import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { skillCategories } from '../data/profileData';
import { Server, Database, Cpu, ShieldCheck, Layers, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, any> = {
  Server,
  Database,
  Cpu,
  ShieldCheck,
  Layers,
};

export const Skills: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="skills" className="py-20 sm:py-28 relative overflow-hidden bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>{language === 'vi' ? 'NĂNG LỰC KỸ THUẬT' : 'TECHNICAL ARSENAL'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {language === 'vi' ? 'Hệ Sinh Thái Kỹ Năng' : 'Skills & Technologies Matrix'}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {language === 'vi'
              ? 'Tập trung chuyên sâu vào nền tảng Java Backend hiện đại, quy chuẩn bảo mật doanh nghiệp, cơ sở dữ liệu và tự động hóa DevOps.'
              : 'Focused on modern Java Backend ecosystems, enterprise security protocols, robust databases, and DevOps automation.'}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = iconMap[cat.iconName] || Server;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0d111a] border border-white/10 hover:border-cyan-500/30 p-6 sm:p-7 transition-all duration-300 shadow-xl space-y-5 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-white">
                      {cat.title[language]}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-white/15 transition-all"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="text-xs sm:text-sm font-medium text-zinc-200">
                            {skill.name}
                          </span>
                        </div>
                        {skill.tag && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800 text-zinc-400 border border-white/5">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>Standard: Production Ready</span>
                  <span className="text-cyan-400">Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
