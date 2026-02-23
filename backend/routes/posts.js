const express = require('express');
const router = express.Router();
const db = require('../db');

// ── Auth middleware for write operations ─────────────────────────────────────
const requireAdmin = (req, res, next) => {
  const secret = process.env.ADMIN_SECRET;
  if (secret && req.headers['x-admin-secret'] !== secret) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
  next();
};

// ── GET /api/posts ───────────────────────────────────────────────────────────
router.get('/', (req, res) => {
  try {
    const posts = db.prepare('SELECT * FROM posts ORDER BY date DESC').all();
    const parsed = posts.map((p) => ({ ...p, tags: JSON.parse(p.tags) }));
    res.json({ success: true, data: parsed });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch posts' });
  }
});

// ── GET /api/posts/:id ───────────────────────────────────────────────────────
router.get('/:id', (req, res) => {
  try {
    const post = db.prepare('SELECT * FROM posts WHERE id = ?').get(req.params.id);
    if (!post) return res.status(404).json({ success: false, message: 'Post not found' });
    res.json({ success: true, data: { ...post, tags: JSON.parse(post.tags) } });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch post' });
  }
});

// ── POST /api/posts ──────────────────────────────────────────────────────────
router.post('/', requireAdmin, (req, res) => {
  const { title, content, tags, date } = req.body;

  if (!title?.trim() || !content?.trim()) {
    return res.status(400).json({ success: false, message: 'Title and content are required' });
  }

  try {
    const result = db
      .prepare(
        'INSERT INTO posts (title, content, tags, date) VALUES (?, ?, ?, ?)'
      )
      .run(
        title.trim(),
        content.trim(),
        JSON.stringify(Array.isArray(tags) ? tags : []),
        date || new Date().toISOString()
      );

    const post = db.prepare('SELECT * FROM posts WHERE id = ?').get(result.lastInsertRowid);
    res.status(201).json({ success: true, data: { ...post, tags: JSON.parse(post.tags) } });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to create post' });
  }
});

// ── PUT /api/posts/:id ───────────────────────────────────────────────────────
router.put('/:id', requireAdmin, (req, res) => {
  const { title, content, tags } = req.body;

  if (!title?.trim() || !content?.trim()) {
    return res.status(400).json({ success: false, message: 'Title and content are required' });
  }

  try {
    const existing = db.prepare('SELECT * FROM posts WHERE id = ?').get(req.params.id);
    if (!existing) return res.status(404).json({ success: false, message: 'Post not found' });

    db.prepare(
      `UPDATE posts
       SET title = ?, content = ?, tags = ?, updated_at = datetime('now')
       WHERE id = ?`
    ).run(
      title.trim(),
      content.trim(),
      JSON.stringify(Array.isArray(tags) ? tags : []),
      req.params.id
    );

    const updated = db.prepare('SELECT * FROM posts WHERE id = ?').get(req.params.id);
    res.json({ success: true, data: { ...updated, tags: JSON.parse(updated.tags) } });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to update post' });
  }
});

// ── DELETE /api/posts/:id ────────────────────────────────────────────────────
router.delete('/:id', requireAdmin, (req, res) => {
  try {
    const existing = db.prepare('SELECT id FROM posts WHERE id = ?').get(req.params.id);
    if (!existing) return res.status(404).json({ success: false, message: 'Post not found' });

    db.prepare('DELETE FROM posts WHERE id = ?').run(req.params.id);
    res.json({ success: true, message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to delete post' });
  }
});

module.exports = router;
