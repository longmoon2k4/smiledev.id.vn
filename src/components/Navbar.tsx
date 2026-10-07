import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/profileData';
import { Menu, X, FileText, Globe, Terminal as TerminalIcon } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenTerminal }) => {
  const { language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: language === 'vi' ? 'Giới thiệu' : 'About' },
    { href: '#experience', label: language === 'vi' ? 'Kinh nghiệm' : 'Experience' },
    { href: '#projects', label: language === 'vi' ? 'Dự án' : 'Projects' },
    { href: '#architecture', label: language === 'vi' ? 'Kiến trúc' : 'Architecture' },
    { href: '#skills', label: language === 'vi' ? 'Kỹ năng' : 'Skills' },
    { href: '#contact', label: language === 'vi' ? 'Liên hệ' : 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090a0f]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 text-white no-underline focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-emerald-500 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
            <div className="w-full h-full bg-[#090a0f] rounded-[10px] flex items-center justify-center">
              <span className="font-mono font-bold text-sm bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                HL
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors text-base sm:text-lg">
              {personalInfo.name}
            </span>
            <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {personalInfo.domainName}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-zinc-900/60 border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs lg:text-sm font-medium text-zinc-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (Language Switcher, Terminal Trigger, Resume CTA) */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Language Switch */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900/80 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white hover:border-cyan-500/40 transition-all"
            title={language === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span className="uppercase font-semibold tracking-wider">
              {language === 'vi' ? 'EN' : 'VI'}
            </span>
          </button>

          {/* Terminal Shortcut */}
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg bg-zinc-900/80 border border-white/10 text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              title={language === 'vi' ? 'Mở Terminal Tương Tác' : 'Open Interactive Terminal'}
            >
              <TerminalIcon className="w-4 h-4" />
            </button>
          )}

          {/* Resume CTA */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-medium text-xs sm:text-sm shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{language === 'vi' ? 'Xem CV' : 'Resume'}</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="px-2 py-1 rounded bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300"
          >
            {language.toUpperCase()}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#090a0f]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex items-center gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium text-sm"
            >
              <FileText className="w-4 h-4" />
              <span>{language === 'vi' ? 'Xem Hồ Sơ CV (PDF)' : 'View Resume (PDF)'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
