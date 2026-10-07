import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/profileData';
import { GithubIcon } from './SocialIcons';
import {
  FolderGit2,
  ExternalLink,
  Workflow,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'security' | 'fullstack'>('all');

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{language === 'vi' ? 'DỰ ÁN TIÊU BIỂU' : 'FEATURED CASE STUDIES'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {language === 'vi' ? 'Dự Án Doanh Nghiệp & Dẫn Dắt' : 'Enterprise & Leadership Projects'}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {language === 'vi'
              ? 'Các hệ thống phần mềm do tôi trực tiếp chủ trì thiết kế kiến trúc backend, bảo mật, tích hợp thanh toán VNPay và pipeline tự động hóa CI/CD.'
              : 'End-to-end software platforms where I served as Project Leader, architecting backend services, payment integration, security scans, and CI/CD pipelines.'}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: language === 'vi' ? 'Tất cả dự án' : 'All Projects' },
              { id: 'security', label: language === 'vi' ? 'Bảo mật & Fintech (VNPay/VirusTotal)' : 'Security & Fintech' },
              { id: 'fullstack', label: language === 'vi' ? 'Full-Stack & CI/CD Pipeline' : 'Full-Stack & CI/CD' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  filter === tab.id
                    ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/25'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-[#0d111a] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              {/* Top Highlight Banner */}
              <div className="p-6 sm:p-8 space-y-5">
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[11px] font-semibold">
                      {project.role}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">{project.period}</span>
                  </div>

                  {project.metrics && (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{project.metrics}</span>
                    </div>
                  )}
                </div>

                {/* Title and Subtitle */}
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-mono">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.description[language]}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    {language === 'vi' ? 'Trách nhiệm & Điểm nhấn:' : 'Core Responsibilities & Milestones:'}
                  </div>
                  {project.highlights[language].slice(0, 4).map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                      <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Architecture Flow Preview */}
                {project.architectureDiagram && (
                  <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-white/5 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span className="flex items-center gap-1 text-cyan-400">
                        <Workflow className="w-3.5 h-3.5" />
                        System Architecture Flow
                      </span>
                    </div>
                    <p className="text-xs text-zinc-300 font-mono leading-relaxed">
                      {project.architectureDiagram.flowDescription[language]}
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Tech Stack & Action Links */}
              <div className="p-6 sm:p-8 pt-0 space-y-5">
                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/5 text-[11px] font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-white/30 text-white text-xs font-mono font-medium transition-all"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>{language === 'vi' ? 'Mã Nguồn (GitHub)' : 'Source Code'}</span>
                      <ExternalLink className="w-3 h-3 text-zinc-500" />
                    </a>
                  )}

                  {project.cicdRepo && (
                    <a
                      href={project.cicdRepo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-950/60 hover:bg-indigo-900/80 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium transition-all"
                    >
                      <Workflow className="w-4 h-4 text-indigo-400" />
                      <span>{language === 'vi' ? 'CI/CD Pipeline Repo' : 'CI/CD Pipeline'}</span>
                      <ExternalLink className="w-3 h-3 text-indigo-400" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
