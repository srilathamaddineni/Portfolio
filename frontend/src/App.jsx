import { ThemeProvider } from './context/ThemeContext';
import Header from './components/ui/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Certifications from './components/sections/Certifications';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />  
          <Contact />   
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;