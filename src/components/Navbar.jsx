import { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../App';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass-panel' : 'py-6 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tighter text-dark dark:text-white">
          sm1le2k4<span className="text-fpt">.Dev</span>
        </a>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-cyan transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-fpt" /> : <Moon className="w-5 h-5 text-electric" />}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2 border border-cyan text-cyan rounded-full hover:bg-cyan/10 transition-colors box-glow-cyan"
          >
            Let's Talk
          </motion.button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-fpt" /> : <Moon className="w-5 h-5 text-electric" />}
          </motion.button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-dark dark:text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-light dark:bg-deepDark border-t border-black/5 dark:border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4 shadow-xl">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-cyan transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 mt-4 border border-cyan text-cyan rounded-xl hover:bg-cyan/10 transition-colors box-glow-cyan font-bold"
              >
                Let's Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
