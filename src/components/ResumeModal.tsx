import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo, experiences, educations, projects } from '../data/profileData';
import { triggerConfetti } from '../utils/confetti';
import { GithubIcon } from './SocialIcons';
import {
  X,
  Printer,
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

  if (!isOpen) return null;

  const handlePrint = () => {
    triggerConfetti();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white text-zinc-900 rounded-2xl shadow-2xl overflow-hidden my-8 border border-zinc-200">
        {/* Modal Top Control Bar (Hidden when printing) */}
        <div className="print:hidden px-6 py-4 bg-zinc-900 text-white flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm sm:text-base">
              {personalInfo.name} – Executive Resume (CV)
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">
              FPT University & FPT Software
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/CV_Ha_Vu_Long_Software_Engineer.pdf"
              download="Ha_Vu_Long_CV.pdf"
              onClick={triggerConfetti}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow transition-all"
              title="Tải trực tiếp file PDF"
            >
              <Printer className="w-3.5 h-3.5 hidden sm:inline" />
              <span>{language === 'vi' ? 'Tải PDF Gốc' : 'Download PDF'}</span>
            </a>
            <a
              href="/CV_Ha_Vu_Long_Software_Engineer.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium border border-white/10 transition-all"
              title="Mở tab mới"
            >
              <span>{language === 'vi' ? 'Mở Tab Mới' : 'Open Tab'}</span>
            </a>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{language === 'vi' ? 'In / Web PDF' : 'Print / View'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-8 sm:p-12 space-y-8 bg-white print:p-0">
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
              <div className="text-right text-xs font-mono text-zinc-600 space-y-1">
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
              <div key={idx} className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-zinc-900">{edu.school}</span> –{' '}
                  <span className="italic text-zinc-700">{edu.degree}</span>
                </div>
                <div className="text-right font-mono font-semibold text-zinc-800">
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
                <div className="flex justify-between items-start text-xs sm:text-sm">
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
                <div className="flex justify-between items-start text-xs sm:text-sm">
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
