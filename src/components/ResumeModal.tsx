import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo, experiences, educations, projects } from '../data/profileData';
import { triggerConfetti } from '../utils/confetti';
import { GithubIcon } from './SocialIcons';
import {
  X,
  Printer,
  Download,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Globe,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();

  // Close on Escape key press and lock background scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    triggerConfetti();
    window.print();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-hidden animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      {/* Modal Card Box */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl h-[92vh] max-h-[900px] bg-white text-zinc-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-zinc-700/50 my-auto"
      >
        {/* Top Control Bar (Always pinned on top) */}
        <div className="print:hidden shrink-0 px-4 sm:px-6 py-3 bg-[#0d121c] text-white flex items-center justify-between border-b border-white/10 z-20">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-bold text-xs sm:text-sm tracking-tight text-white line-clamp-1">
              {personalInfo.name} – CV / Resume
            </span>
            <span className="hidden md:inline text-[11px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">
              FPT University & FPT Software
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Download Original PDF Button */}
            <a
              href="/CV_Ha_Vu_Long_Software_Engineer.pdf"
              download="Ha_Vu_Long_CV.pdf"
              onClick={triggerConfetti}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-all"
              title="Tải trực tiếp file PDF gốc về máy"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{language === 'vi' ? 'Tải PDF Gốc' : 'Download PDF'}</span>
            </a>

            {/* Open in new tab button */}
            <a
              href="/CV_Ha_Vu_Long_Software_Engineer.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs font-medium border border-white/10 transition-all"
              title="Mở file PDF trong tab mới"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">{language === 'vi' ? 'Mở Tab' : 'Open Tab'}</span>
            </a>

            {/* Print button */}
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-sm transition-all"
              title="In hoặc lưu dạng PDF trình duyệt"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{language === 'vi' ? 'In' : 'Print'}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500 text-red-300 hover:text-white border border-red-500/30 transition-all text-xs font-semibold ml-1"
              title="Đóng (Phím Esc hoặc bấm ra ngoài)"
            >
              <X className="w-4 h-4" />
              <span className="hidden sm:inline">{language === 'vi' ? 'Đóng (Esc)' : 'Close'}</span>
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 lg:p-12 space-y-8 bg-white print:p-0 print:overflow-visible select-text">
          {/* Resume Header */}
          <div className="border-b-2 border-zinc-900 pb-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 uppercase">
                  {personalInfo.name}
                </h1>
                <p className="text-base sm:text-lg font-bold text-zinc-700 mt-1">
                  Software Engineer | Java Backend | AI Engineering Trainee
                </p>
              </div>
              <div className="text-left sm:text-right text-xs font-mono text-zinc-600 space-y-1">
                <div className="flex items-center sm:justify-end gap-1.5 font-bold text-zinc-900">
                  <Phone className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{personalInfo.location.en}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5 font-semibold text-zinc-800">
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>github.com/{personalInfo.githubUsername}</span>
                  <span className="mx-1">|</span>
                  <Globe className="w-3.5 h-3.5" />
                  <span>{personalInfo.domainName}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-black font-mono tracking-widest text-zinc-900 uppercase border-b border-zinc-300 pb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed text-justify">
              {personalInfo.summary.en}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-black font-mono tracking-widest text-zinc-900 uppercase border-b border-zinc-300 pb-1">
              EDUCATION
            </h2>
            {educations.map((edu, idx) => (
              <div key={idx} className="flex flex-wrap justify-between items-start text-xs sm:text-sm gap-1">
                <div>
                  <span className="font-bold text-zinc-900">{edu.school}</span> –{' '}
                  <span className="italic text-zinc-700">{edu.degree}</span>
                </div>
                <div className="font-mono font-semibold text-zinc-800">
                  Expected Graduation: 2027 | GPA: 3.2/4.0
                </div>
              </div>
            ))}
          </div>

          {/* Professional Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-black font-mono tracking-widest text-zinc-900 uppercase border-b border-zinc-300 pb-1">
              PROFESSIONAL EXPERIENCE
            </h2>
            {experiences.map((exp, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex flex-wrap justify-between items-start text-xs sm:text-sm gap-1">
                  <div>
                    <span className="font-black text-zinc-900">{exp.company}</span> –{' '}
                    <span className="font-bold text-zinc-700">{exp.type}</span>
                    <div className="italic text-zinc-600">{exp.role}</div>
                  </div>
                  <div className="font-mono text-zinc-600 text-xs">{exp.period}</div>
                </div>
                <ul className="list-disc list-inside text-xs text-zinc-700 space-y-1 pl-1">
                  {exp.achievements.en.map((ach, aIdx) => (
                    <li key={aIdx} className="leading-relaxed">
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects & Leadership */}
          <div className="space-y-4">
            <h2 className="text-xs font-black font-mono tracking-widest text-zinc-900 uppercase border-b border-zinc-300 pb-1">
              PROJECTS & LEADERSHIP
            </h2>
            {projects.map((proj, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex flex-wrap justify-between items-start text-xs sm:text-sm gap-1">
                  <div className="font-bold text-zinc-900">
                    <span>{proj.title.toUpperCase()}</span>
                    <span className="text-zinc-600 font-normal"> | {proj.role}</span>
                  </div>
                  <div className="font-mono text-zinc-600 text-xs">
                    {proj.github && <span>{proj.github.replace('https://', '')}</span>}
                  </div>
                </div>
                <div className="text-[11px] font-mono text-zinc-600">
                  Tech: {proj.techStack.join(', ')}
                </div>
                <ul className="list-disc list-inside text-xs text-zinc-700 space-y-1 pl-1">
                  {proj.highlights.en.map((hl, hIdx) => (
                    <li key={hIdx} className="leading-relaxed">
                      {hl}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-black font-mono tracking-widest text-zinc-900 uppercase border-b border-zinc-300 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="text-xs text-zinc-800 space-y-1">
              <div>
                <span className="font-bold">Languages & Core:</span> Java, Dart, SQL, HTML/CSS, JavaScript/TypeScript.
              </div>
              <div>
                <span className="font-bold">Backend & Frameworks:</span> Spring Boot 3.x, REST API, Spring Security, Spring Data JPA, OOP, Clean Architecture.
              </div>
              <div>
                <span className="font-bold">Databases:</span> Microsoft SQL Server (MSSQL), MySQL.
              </div>
              <div>
                <span className="font-bold">DevOps & Tools:</span> Docker, Git, GitHub Actions, Basic CI/CD, Postman.
              </div>
              <div>
                <span className="font-bold">API Integrations:</span> VNPay Payment Gateway, VirusTotal Security API.
              </div>
              <div>
                <span className="font-bold">Mobile & AI Focus:</span> Flutter, Dart, AI Engineering Trainee (Batch V).
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
