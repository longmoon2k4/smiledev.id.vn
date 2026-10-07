import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/profileData';
import { Code2, Server, Brain, Award, CheckCircle2, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const { language } = useLanguage();

  const principles = [
    {
      icon: Server,
      color: 'from-cyan-500 to-blue-600',
      title: {
        vi: 'Kiến trúc Backend Vững chắc & Mở rộng',
        en: 'Resilient & Scalable Backend',
      },
      desc: {
        vi: 'Nắm vững Java 21, Spring Boot 3.4, Spring Security, tối ưu hóa truy vấn SQL Server/MySQL và thiết kế RESTful API chuẩn công nghiệp.',
        en: 'Mastering Java 21, Spring Boot 3.4, Spring Security, SQL Server/MySQL query optimization, and enterprise-grade RESTful API design.',
      },
    },
    {
      icon: Brain,
      color: 'from-indigo-500 to-purple-600',
      title: {
        vi: 'Chuyển dịch sang AI Engineering',
        en: 'AI Engineering Trainee Focus',
      },
      desc: {
        vi: 'Tận dụng nền tảng vững chắc về kỹ thuật phần mềm và kiến trúc phân tán để tiếp thu sâu kỹ thuật AI qua chương trình AI Talent Training Program.',
        en: 'Leveraging solid software engineering and distributed architecture foundations to advance into modern AI systems and engineering.',
      },
    },
    {
      icon: Award,
      color: 'from-emerald-500 to-teal-600',
      title: {
        vi: 'Năng lực Dẫn dắt & Quy chuẩn Enterprise',
        en: 'Leadership & Enterprise Standards',
      },
      desc: {
        vi: 'Kinh nghiệm thực tế từ FPT Software (dự án Automotive NXP) cùng vai trò Project Leader quản lý vòng đời phát triển phần mềm (SDLC, CI/CD, Testing).',
        en: 'Hands-on exposure at FPT Software (Automotive NXP) combined with Project Leader experience across full SDLC, CI/CD, and rigorous testing.',
      },
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Code2 className="w-3.5 h-3.5" />
            <span>{language === 'vi' ? 'HỒ SƠ NĂNG LỰC' : 'PROFESSIONAL PROFILE'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {language === 'vi' ? 'Hành trình & Triết lý Kỹ thuật' : 'Engineering Journey & Philosophy'}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {language === 'vi'
              ? 'Kết hợp tư duy hệ thống chặt chẽ của lập trình viên Java Backend với sự nhạy bén công nghệ của một kỹ sư AI tương lai.'
              : 'Bridging the rigorous system design discipline of a Java Backend Specialist with the innovative vision of an AI Engineer.'}
          </p>
        </div>

        {/* 3 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 backdrop-blur-sm"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} p-[1.5px] mb-6 group-hover:scale-110 transition-transform`}
                >
                  <div className="w-full h-full bg-[#090a0f] rounded-[10px] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">
                  {p.title[language]}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{p.desc[language]}</p>
              </div>
            );
          })}
        </div>

        {/* Detailed Narrative & Quick Facts Box */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0d111a] to-[#090c14] border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono">
                <Sparkles className="w-4 h-4" />
                <span>{language === 'vi' ? 'TỔNG QUAN NGHỀ NGHIỆP' : 'CAREER OBJECTIVE'}</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {personalInfo.headline[language]}
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {language === 'vi'
                  ? 'Là sinh viên năm cuối Đại học FPT với GPA 3.2/4.0, tôi đã tích lũy kinh nghiệm làm việc thực tế tại FPT Software trong dự án ô tô (Automotive NXP), tuân thủ quy trình kiểm thử và tài liệu đặc tả khắt khe. Song song đó, với vai trò Trưởng nhóm dự án (Project Leader), tôi đã hiện thực hóa nhiều hệ thống thương mại điện tử hoàn chỉnh từ việc thiết kế CSDL, backend Spring Boot 3, bảo mật Spring Security JWT, đến tích hợp cổng thanh toán VNPay và bảo mật VirusTotal.'
                  : 'As a final-year Software Engineering student at FPT University with a 3.2/4.0 GPA, I gained real-world enterprise experience at FPT Software working on the Automotive NXP project, adhering to strict software specifications and QA testing. Simultaneously, serving as a Project Leader, I have engineered full-cycle e-commerce platforms—from database design and Spring Boot 3 micro-services to VNPay payment integration and VirusTotal threat scanning.'}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                {[
                  language === 'vi' ? 'Thiết kế Hệ thống Chuẩn mực' : 'Enterprise System Design',
                  language === 'vi' ? 'Bảo mật & Tích hợp API' : 'Security & API Integrations',
                  language === 'vi' ? 'Quản trị Dự án & CI/CD' : 'Project Leadership & CI/CD',
                  language === 'vi' ? 'Định hướng AI Engineering' : 'AI Engineering Trainee',
                ].map((tag, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-800/80 border border-white/5 text-xs text-zinc-300 font-mono"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-xl bg-zinc-950/80 border border-white/5 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                {language === 'vi' ? 'Thông tin Tổng hợp' : 'Quick Snapshot'}
              </div>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between pb-2 border-b border-white/5">
                  <span className="text-zinc-400">{language === 'vi' ? 'Họ và tên' : 'Full Name'}</span>
                  <span className="text-white font-medium">{personalInfo.name}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/5">
                  <span className="text-zinc-400">{language === 'vi' ? 'Đại học' : 'University'}</span>
                  <span className="text-cyan-400 font-medium">FPT University (2027)</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/5">
                  <span className="text-zinc-400">GPA</span>
                  <span className="text-emerald-400 font-mono font-bold">{personalInfo.gpa}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/5">
                  <span className="text-zinc-400">{language === 'vi' ? 'Kinh nghiệm Doanh nghiệp' : 'Enterprise Track'}</span>
                  <span className="text-indigo-400 font-medium">FPT Software (NXP)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">{language === 'vi' ? 'Vị trí hướng tới' : 'Target Role'}</span>
                  <span className="text-white font-medium">AI Engineering Trainee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
