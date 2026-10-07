import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/profileData';
import { triggerConfetti } from '../utils/confetti';
import { GithubIcon } from './SocialIcons';
import {
  ArrowRight,
  Download,
  Mail,
  Terminal,
  ShieldCheck,
  Cpu,
  Layers,
  Check,
  Copy,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal }) => {
  const { language } = useLanguage();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    triggerConfetti();
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section className="relative min-h-screen pt-28 sm:pt-32 pb-16 flex items-center justify-center overflow-hidden">
      {/* Ambient Lighting & Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/15 to-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -top-10 right-10 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content & Positioning */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-emerald-500/30 text-xs font-mono text-emerald-400 shadow-sm shadow-emerald-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>
                {language === 'vi'
                  ? 'Sẵn sàng tiếp nhận cơ hội Software & AI Trainee'
                  : 'Open to Software & AI Engineering Roles'}
              </span>
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                <span>{personalInfo.name}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-emerald-400">
                  .dev
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-medium text-zinc-300 tracking-tight">
                {personalInfo.title[language]}
              </p>
            </div>

            {/* Headline & Description */}
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.summary[language]}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all"
              >
                <span>{language === 'vi' ? 'Khám phá Dự án' : 'Explore Projects'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 hover:border-cyan-500/40 text-white font-medium text-sm transition-all"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>{language === 'vi' ? 'Xem & Tải CV (PDF)' : 'Resume / CV'}</span>
              </button>

              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-900/50 hover:bg-zinc-800/80 border border-white/10 text-zinc-400 hover:text-cyan-300 font-mono text-xs transition-all"
                title={language === 'vi' ? 'Mở interactive CLI terminal' : 'Launch interactive CLI'}
              >
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>smile-cli</span>
              </button>
            </div>

            {/* Quick Contact & Social Direct Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/70 border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white text-xs font-mono transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5 text-zinc-300" />
                <span>github.com/{personalInfo.githubUsername}</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>

              {/* Zalo */}
              <a
                href={personalInfo.zalo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/70 border border-white/10 hover:border-cyan-500/30 text-zinc-300 hover:text-cyan-400 text-xs font-mono transition-all"
              >
                <span className="font-bold text-cyan-400 text-xs">Zalo</span>
                <span>0378071412</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>

              {/* Email Copy */}
              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/70 border border-white/10 hover:border-indigo-500/30 text-zinc-300 hover:text-indigo-400 text-xs font-mono transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>{personalInfo.email}</span>
                {copiedField === 'email' ? (
                  <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-zinc-500" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Bento Identity Cockpit */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Decorative Card Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-indigo-500/30 to-emerald-500/30 blur-xl opacity-70 animate-pulse" />

              <div className="relative rounded-2xl bg-[#0d111a] border border-white/10 p-6 shadow-2xl backdrop-blur-xl space-y-6">
                {/* Header of Bento Card */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-[2px]">
                      <div className="w-full h-full bg-[#090a0f] rounded-[10px] flex items-center justify-center">
                        <span className="font-mono font-black text-lg bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                          HVL
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-bold text-white text-base">{personalInfo.name}</h3>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono">
                          Verified
                        </span>
                      </div>
                      <p className="text-xs font-mono text-zinc-400">{personalInfo.domainName}</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50 animate-pulse" />
                </div>

                {/* Key Metrics Bento Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {personalInfo.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                          {stat.value}
                        </span>
                        <span className="text-[10px] font-mono text-cyan-400">{stat.suffix}</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-1 line-clamp-1">
                        {stat.label[language]}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Engineering Highlights Pill Box */}
                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{language === 'vi' ? 'Điểm Nhấn Nổi Bật' : 'Core Highlights'}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-zinc-900/40 border border-white/5 text-xs text-zinc-300">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>
                        {language === 'vi'
                          ? 'Kinh nghiệm FPT Software (NXP Automotive Project)'
                          : 'FPT Software Automotive Project (NXP)'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-zinc-900/40 border border-white/5 text-xs text-zinc-300">
                      <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>
                        {language === 'vi'
                          ? 'Dẫn dắt dự án E-Commerce & Cổng thanh toán VNPay'
                          : 'Project Leader for E-Commerce & VNPay Integration'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-zinc-900/40 border border-white/5 text-xs text-zinc-300">
                      <Layers className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>
                        {language === 'vi'
                          ? 'AI Engineering Trainee (AI Talent Training Program - Batch V)'
                          : 'AI Engineering Trainee (AI Talent Program - Batch V)'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Action Footer */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    System Status: Normal
                  </span>
                  <span>Java 21 • Spring Boot 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
