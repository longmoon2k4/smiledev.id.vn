import React from 'react';
import { personalInfo } from '../data/profileData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { ArrowUp, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#07080c] py-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personalInfo.name}</span>
              <span className="text-zinc-600">/</span>
              <span className="text-cyan-400 font-mono text-xs">{personalInfo.domainName}</span>
            </div>
            <p className="text-zinc-500 text-[11px] font-mono">
              © {new Date().getFullYear()} Hà Vũ Long. Built with React 19, Vite, Tailwind CSS & Clean Architecture.
            </p>
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-white/5 hover:border-white/20 text-zinc-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-white/5 hover:border-cyan-500/30 text-zinc-400 hover:text-cyan-400 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-zinc-900 border border-white/5 hover:border-indigo-500/30 text-zinc-400 hover:text-indigo-400 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.zalo}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-white/5 hover:border-emerald-500/30 text-zinc-400 hover:text-emerald-400 transition-colors"
              title="Zalo"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="ml-2 flex items-center gap-1 px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-300 hover:text-white text-xs font-mono transition-colors"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
