import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/ui/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Certifications from './components/sections/Certifications';
import Education from './components/sections/Education';
import Blog from './components/sections/Blog';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('portfolio');

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header currentView={currentView} onViewChange={setCurrentView} />
        <main className="pt-16">
          {currentView === 'blog' ? (
            <Blog />
          ) : (
            <>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Education />
              <Certifications />
              <Contact />
            </>
          )}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;