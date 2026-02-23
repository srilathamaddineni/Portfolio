import { useState, useEffect, useCallback } from 'react';
import { Plus, Pencil, Trash2, ArrowLeft, Clock, Tag, X, BookOpen, Loader2, AlertCircle } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const ADMIN_SECRET = import.meta.env.VITE_ADMIN_SECRET || '';

const emptyForm = { title: '', content: '', tags: '' };

const calculateReadTime = (content) => {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
};

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const adminHeaders = {
  'Content-Type': 'application/json',
  'x-admin-secret': ADMIN_SECRET,
};

// ── Post Form Modal ──────────────────────────────────────────────────────────
const PostFormModal = ({ initial, onSave, onClose, saving }) => {
  const [form, setForm] = useState(initial || emptyForm);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = 'Title is required';
    if (!form.content.trim()) e.content = 'Content is required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    onSave(form);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {initial ? 'Edit Post' : 'New Post'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Title
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="What did you learn?"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Tags <span className="text-gray-400 font-normal">(comma-separated)</span>
            </label>
            <input
              type="text"
              value={form.tags}
              onChange={(e) => setForm({ ...form, tags: e.target.value })}
              placeholder="React, AWS, System Design"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Content
            </label>
            <textarea
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              placeholder="Write your learnings here..."
              rows={12}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-y font-mono text-sm"
            />
            {errors.content && <p className="mt-1 text-sm text-red-500">{errors.content}</p>}
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-medium transition-colors"
            >
              {saving && <Loader2 className="w-4 h-4 animate-spin" />}
              {initial ? 'Save Changes' : 'Publish Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ── Delete Confirm Modal ─────────────────────────────────────────────────────
const DeleteModal = ({ title, onConfirm, onClose, deleting }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Delete Post</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Are you sure you want to delete <span className="font-semibold">"{title}"</span>? This action cannot be undone.
      </p>
      <div className="flex justify-end gap-3">
        <button
          onClick={onClose}
          className="px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          disabled={deleting}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-medium transition-colors"
        >
          {deleting && <Loader2 className="w-4 h-4 animate-spin" />}
          Delete
        </button>
      </div>
    </div>
  </div>
);

// ── Post Detail View ─────────────────────────────────────────────────────────
const PostDetail = ({ post, onBack, onEdit, onDelete }) => (
  <div className="max-w-3xl mx-auto">
    <button
      onClick={onBack}
      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors font-medium"
    >
      <ArrowLeft className="w-4 h-4" />
      Back to all posts
    </button>

    <article>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
        {post.title}
      </h1>

      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
        <span>{formatDate(post.date)}</span>
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {calculateReadTime(post.content)}
        </span>
      </div>

      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="max-w-none">
        {post.content.split('\n').map((para, i) =>
          para.trim() ? (
            <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {para}
            </p>
          ) : (
            <br key={i} />
          )
        )}
      </div>

      <div className="flex gap-3 mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={onEdit}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
        >
          <Pencil className="w-4 h-4" />
          Edit Post
        </button>
        <button
          onClick={onDelete}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-red-300 dark:border-red-700 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 font-medium transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          Delete Post
        </button>
      </div>
    </article>
  </div>
);

// ── Post Card ────────────────────────────────────────────────────────────────
const PostCard = ({ post, onView, onEdit, onDelete }) => (
  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 group">
    <div onClick={onView} className="cursor-pointer">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
        {post.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4 leading-relaxed">
        {post.content}
      </p>
    </div>

    {post.tags.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1 px-2.5 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
          >
            <Tag className="w-3 h-3" />
            {tag}
          </span>
        ))}
      </div>
    )}

    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
        <span>{formatDate(post.date)}</span>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {calculateReadTime(post.content)}
        </span>
      </div>
      <div className="flex items-center gap-1">
        <button
          onClick={onEdit}
          className="p-2 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
          title="Edit"
        >
          <Pencil className="w-4 h-4" />
        </button>
        <button
          onClick={onDelete}
          className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
          title="Delete"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);

// ── Blog (main) ──────────────────────────────────────────────────────────────
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [view, setView] = useState('list'); // 'list' | 'detail'
  const [selectedPost, setSelectedPost] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [activeTag, setActiveTag] = useState(null);

  // ── Fetch all posts ────────────────────────────────────────────────────────
  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/api/posts`);
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      setPosts(json.data);
    } catch (err) {
      setError('Could not load posts. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchPosts(); }, [fetchPosts]);

  const allTags = [...new Set(posts.flatMap((p) => p.tags))];
  const filtered = activeTag ? posts.filter((p) => p.tags.includes(activeTag)) : posts;

  // ── Save (create or update) ────────────────────────────────────────────────
  const handleSave = async (form) => {
    const tags = form.tags.split(',').map((t) => t.trim()).filter(Boolean);
    setSaving(true);
    try {
      if (editingPost) {
        const res = await fetch(`${API_URL}/api/posts/${editingPost.id}`, {
          method: 'PUT',
          headers: adminHeaders,
          body: JSON.stringify({ title: form.title, content: form.content, tags }),
        });
        const json = await res.json();
        if (!json.success) throw new Error(json.message);
        setPosts((prev) => prev.map((p) => (p.id === editingPost.id ? json.data : p)));
        if (selectedPost?.id === editingPost.id) setSelectedPost(json.data);
      } else {
        const res = await fetch(`${API_URL}/api/posts`, {
          method: 'POST',
          headers: adminHeaders,
          body: JSON.stringify({ title: form.title, content: form.content, tags, date: new Date().toISOString() }),
        });
        const json = await res.json();
        if (!json.success) throw new Error(json.message);
        setPosts((prev) => [json.data, ...prev]);
      }
      setShowForm(false);
      setEditingPost(null);
    } catch (err) {
      alert(`Failed to save post: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  // ── Delete ─────────────────────────────────────────────────────────────────
  const handleDelete = async () => {
    setDeleting(true);
    try {
      const res = await fetch(`${API_URL}/api/posts/${deleteTarget.id}`, {
        method: 'DELETE',
        headers: adminHeaders,
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      setPosts((prev) => prev.filter((p) => p.id !== deleteTarget.id));
      if (view === 'detail') { setView('list'); setSelectedPost(null); }
      setDeleteTarget(null);
    } catch (err) {
      alert(`Failed to delete post: ${err.message}`);
    } finally {
      setDeleting(false);
    }
  };

  const openEdit = (post) => {
    setEditingPost(post);
    setShowForm(true);
  };

  // ── Loading state ──────────────────────────────────────────────────────────
  if (loading) {
    return (
      <section className="min-h-screen py-20 bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-10 h-10 text-blue-600 animate-spin mx-auto mb-3" />
          <p className="text-gray-500 dark:text-gray-400">Loading posts...</p>
        </div>
      </section>
    );
  }

  // ── Error state ────────────────────────────────────────────────────────────
  if (error) {
    return (
      <section className="min-h-screen py-20 bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center max-w-md">
          <AlertCircle className="w-10 h-10 text-red-500 mx-auto mb-3" />
          <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">Something went wrong</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{error}</p>
          <button
            onClick={fetchPosts}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="min-h-screen py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">

        {view === 'detail' && selectedPost ? (
          <PostDetail
            post={selectedPost}
            onBack={() => { setView('list'); setSelectedPost(null); }}
            onEdit={() => openEdit(selectedPost)}
            onDelete={() => setDeleteTarget(selectedPost)}
          />
        ) : (
          <>
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Blog
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                Notes, learnings, and thoughts on software engineering
              </p>
            </div>

            {/* Tag Filter + Add Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveTag(null)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    !activeTag
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  All
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      activeTag === tag
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <button
                onClick={() => { setEditingPost(null); setShowForm(true); }}
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm"
              >
                <Plus className="w-4 h-4" />
                Add Post
              </button>
            </div>

            {/* Posts Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <BookOpen className="w-14 h-14 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  {activeTag ? `No posts tagged "${activeTag}"` : 'No posts yet'}
                </h3>
                {!activeTag && (
                  <p className="text-gray-400 dark:text-gray-500">
                    Click "Add Post" to publish your first learning.
                  </p>
                )}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((post) => (
                  <PostCard
                    key={post.id}
                    post={post}
                    onView={() => { setSelectedPost(post); setView('detail'); }}
                    onEdit={() => openEdit(post)}
                    onDelete={() => setDeleteTarget(post)}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {showForm && (
        <PostFormModal
          initial={editingPost ? { title: editingPost.title, content: editingPost.content, tags: editingPost.tags.join(', ') } : null}
          onSave={handleSave}
          onClose={() => { setShowForm(false); setEditingPost(null); }}
          saving={saving}
        />
      )}

      {deleteTarget && (
        <DeleteModal
          title={deleteTarget.title}
          onConfirm={handleDelete}
          onClose={() => setDeleteTarget(null)}
          deleting={deleting}
        />
      )}
    </section>
  );
};

export default Blog;
