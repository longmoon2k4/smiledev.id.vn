import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState, createContext } from "react";
import { ReactLenis } from 'lenis/react';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
        <div className="min-h-screen font-sans selection:bg-cyan selection:text-white relative z-0 transition-colors duration-500">
        {/* Cinematic Noise Overlay */}
        <div className="noise-overlay"></div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan via-electric to-fpt origin-left z-[100] box-glow-cyan"
          style={{ scaleX }}
        />

        <ParticleBackground theme={theme} />
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Contact />
        </main>

        <footer className="py-8 text-center border-t border-white/10 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Ha Vu Long. Built with React & Framer Motion.</p>
        </footer>
      </div>
    </ReactLenis>
    </ThemeContext.Provider>
  );
}

export default App;
