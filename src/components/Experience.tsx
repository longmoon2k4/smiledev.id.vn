import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { experiences, educations } from '../data/profileData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Building, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="experience" className="py-20 sm:py-28 relative overflow-hidden bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{language === 'vi' ? 'HÀNH TRÌNH CHUYÊN NGHIỆP' : 'PROFESSIONAL EXPERIENCE'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {language === 'vi' ? 'Kinh Nghiệm & Học Vấn' : 'Experience & Education'}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {language === 'vi'
              ? 'Kinh nghiệm thực chiến trong các dự án phần mềm doanh nghiệp khắt khe và nền tảng học thuật vững chắc tại Đại học FPT.'
              : 'Proven track record in enterprise automotive engineering and robust academic background at FPT University.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Work Experience Column (FPT Software) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-4">
              <Building className="w-5 h-5 text-cyan-400" />
              <span>{language === 'vi' ? 'Kinh Nghiệm Thực Chiến' : 'Industry Experience'}</span>
            </div>

            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl bg-[#0d111a] border border-white/10 hover:border-cyan-500/40 p-6 sm:p-8 transition-all duration-300 shadow-xl"
              >
                {/* Header of Experience Card */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                      {exp.badge && (
                        <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-mono text-cyan-400 font-semibold">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-cyan-300 text-sm font-medium mt-1">{exp.role}</div>
                    <div className="text-xs text-zinc-400 font-mono mt-0.5">{exp.type}</div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-zinc-400 space-y-1">
                    <div className="flex items-center gap-1.5 text-zinc-300">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 mb-5 leading-relaxed">
                  {exp.description[language]}
                </p>

                {/* Achievements List */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    {language === 'vi' ? 'Đóng góp & Kết quả:' : 'Key Achievements & Scope:'}
                  </div>
                  {exp.achievements[language].map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/5 text-xs font-mono text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Trainee Column (FPT University & AI Trainee) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-4">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
              <span>{language === 'vi' ? 'Học Vấn & Đào Tạo' : 'Education & Training'}</span>
            </div>

            {educations.map((edu, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl bg-[#0d111a] border border-white/10 p-6 sm:p-7 shadow-xl space-y-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">{edu.school}</h3>
                    <div className="text-emerald-400 text-xs sm:text-sm font-medium mt-1">
                      {edu.degree}
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 font-bold">
                    GPA {edu.gpa}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 pb-2 border-b border-white/5">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    {edu.period}
                  </span>
                  <span>•</span>
                  <span>{edu.location}</span>
                </div>

                <div className="space-y-2">
                  {edu.highlights[language].map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* AI Engineering Program Spotlight Card */}
            <div className="rounded-2xl bg-gradient-to-br from-indigo-950/40 via-purple-950/30 to-[#0d111a] border border-indigo-500/30 p-6 shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-bold">
                <Sparkles className="w-4 h-4" />
                <span>AI TALENT TRAINING PROGRAM</span>
              </div>
              <h4 className="text-base font-bold text-white">
                {language === 'vi' ? 'Định Hướng AI Engineering (Batch V)' : 'AI Engineering Trainee (Batch V)'}
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {language === 'vi'
                  ? 'Chủ động tiếp cận kiến trúc mô hình học máy, quy trình xử lý dữ liệu và tích hợp giải pháp AI vào các hệ sinh thái phần mềm doanh nghiệp.'
                  : 'Proactively building deep competencies in machine learning pipelines, data systems, and operationalizing modern AI solutions into enterprise software.'}
              </p>
              <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-indigo-300">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                <span>Status: In-Progress / Trainee Track</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
