import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo, projects, experiences, educations, skillCategories } from '../data/profileData';
import { triggerConfetti } from '../utils/confetti';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

interface CommandHistory {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
}) => {
  const { language } = useLanguage();
  const [input, setInput] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      id: 'init-1',
      command: 'systemctl status smiledev-core',
      output: (
        <div className="text-emerald-400 space-y-1">
          <div>● smiledev.service - Hà Vũ Long (Software & AI Trainee Core)</div>
          <div>   Loaded: loaded (/etc/systemd/system/smiledev.service; enabled)</div>
          <div>   Active: active (running) since 2026-10-07 | Status: "Ready for Opportunities"</div>
          <div>   Tasks: 4 (Java 21, Spring Boot 3, VNPay API, AI Trainee)</div>
          <div className="text-zinc-400 mt-2">
            💡 Gõ <span className="text-cyan-400 font-bold">help</span> để xem danh sách các lệnh hỗ trợ. Type <span className="text-cyan-400 font-bold">help</span> to list commands.
          </div>
        </div>
      ),
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const raw = cmdStr.trim();
    const cmd = raw.toLowerCase();

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1.5 text-zinc-300">
            <div className="text-cyan-400 font-bold mb-1">Available CLI Commands:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              <div><span className="text-emerald-400 font-bold">about</span> - Tóm tắt hồ sơ kỹ sư (Bio & Summary)</div>
              <div><span className="text-emerald-400 font-bold">skills</span> - Danh mục kỹ năng & công nghệ (Tech Stack)</div>
              <div><span className="text-emerald-400 font-bold">projects</span> - Các dự án tiêu biểu (Case Studies)</div>
              <div><span className="text-emerald-400 font-bold">exp</span> - Kinh nghiệm FPT Software & Học vấn</div>
              <div><span className="text-emerald-400 font-bold">contact</span> - Thông tin liên hệ trực tiếp & Zalo</div>
              <div><span className="text-emerald-400 font-bold">resume</span> - Mở bản CV xem & in PDF</div>
              <div><span className="text-emerald-400 font-bold">hire</span> - Gửi tín hiệu mời phỏng vấn</div>
              <div><span className="text-emerald-400 font-bold">curl</span> - Lấy dữ liệu API JSON `/api/v1/resume`</div>
              <div><span className="text-emerald-400 font-bold">clear</span> - Xóa trắng màn hình terminal</div>
            </div>
          </div>
        );
        break;

      case 'about':
      case 'bio':
        output = (
          <div className="space-y-2 text-zinc-300">
            <div className="text-cyan-400 font-bold">{personalInfo.name} ({personalInfo.domainName})</div>
            <div className="text-zinc-400">{personalInfo.title[language]}</div>
            <div className="text-zinc-300 text-xs leading-relaxed">{personalInfo.summary[language]}</div>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-zinc-300">
            <div className="text-cyan-400 font-bold">Technical Arsenal Matrix:</div>
            {skillCategories.map((c, i) => (
              <div key={i} className="text-xs">
                <span className="text-indigo-400 font-semibold">{c.title.en}: </span>
                <span className="text-zinc-300">{c.skills.map((s) => s.name).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2.5 text-zinc-300">
            <div className="text-cyan-400 font-bold">Featured Projects:</div>
            {projects.map((p, i) => (
              <div key={i} className="p-2 rounded bg-zinc-900 border border-white/5 text-xs">
                <div className="text-emerald-400 font-bold">{p.title} ({p.role})</div>
                <div className="text-zinc-400">{p.subtitle}</div>
                <div className="text-cyan-300 mt-1">Tech: {p.techStack.join(', ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'exp':
      case 'experience':
        output = (
          <div className="space-y-2 text-zinc-300">
            <div className="text-cyan-400 font-bold">Experience & Education:</div>
            {experiences.map((e, i) => (
              <div key={i} className="text-xs">
                <span className="text-emerald-400 font-bold">{e.company}</span> - {e.role} ({e.period})
                <div className="text-zinc-400">{e.type}</div>
              </div>
            ))}
            {educations.map((ed, i) => (
              <div key={i} className="text-xs mt-2">
                <span className="text-indigo-400 font-bold">{ed.school}</span> - {ed.degree} (GPA: {ed.gpa})
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1.5 text-xs text-zinc-300">
            <div className="text-cyan-400 font-bold">Direct Channels:</div>
            <div>📞 Phone / Zalo: <span className="text-emerald-400 font-bold">{personalInfo.phone}</span></div>
            <div>✉️ Email: <span className="text-indigo-400">{personalInfo.email}</span></div>
            <div>🐙 GitHub: <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{personalInfo.github}</a></div>
            <div>🌐 Domain: <a href={personalInfo.domain} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{personalInfo.domainName}</a></div>
          </div>
        );
        break;

      case 'resume':
      case 'cv':
      case 'download':
        triggerConfetti();
        output = (
          <div className="space-y-2 text-xs text-zinc-300">
            <div className="text-emerald-400 font-bold">📄 File CV đã sẵn sàng tải:</div>
            <div>
              <a
                href="/CV_Ha_Vu_Long_Software_Engineer.pdf"
                download="Ha_Vu_Long_CV.pdf"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-emerald-600 text-white font-bold no-underline hover:bg-emerald-500 transition-colors"
              >
                ⬇️ Tải CV Bản Gốc (Download PDF)
              </a>
            </div>
            <div className="text-zinc-400 text-[11px]">
              Đang mở khung xem trước CV... (Opening in-app Resume Viewer...)
            </div>
          </div>
        );
        setTimeout(() => {
          onOpenResume();
        }, 1200);
        break;

      case 'hire':
      case 'hire me':
      case 'sudo hire long':
        triggerConfetti();
        output = (
          <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs space-y-1">
            <div className="font-bold text-sm">🎉 Cảm ơn bạn đã quan tâm! (Thank you for reaching out!)</div>
            <div>Hà Vũ Long sẵn sàng tiếp nhận các cơ hội Java Backend, Software Engineer & AI Engineering.</div>
            <div>Hãy liên hệ trực tiếp qua SĐT/Zalo: <span className="font-mono font-bold text-white">0378071412</span> hoặc Email: <span className="font-mono font-bold text-white">Longmoon2004@gmail.com</span></div>
          </div>
        );
        break;

      case 'curl':
      case 'curl /api/v1/resume':
        output = (
          <pre className="text-cyan-300 text-[11px] whitespace-pre-wrap">
{JSON.stringify(
  {
    status: 200,
    engineer: personalInfo.name,
    title: personalInfo.title.en,
    gpa: personalInfo.gpa,
    fptExperience: 'Automotive Project (NXP)',
    projects: ['License Key E-Commerce (VNPay + VirusTotal)', 'SBA301 Clothing Shop + CI/CD'],
    contact: {
      phone: personalInfo.phone,
      email: personalInfo.email,
      github: personalInfo.github,
    }
  },
  null,
  2
)}
          </pre>
        );
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
      case 'close':
        onClose();
        return;

      default:
        output = (
          <div className="text-red-400 text-xs">
            command not found: "{raw}". Gõ <span className="text-cyan-400 font-bold">help</span> để xem các lệnh có sẵn.
          </div>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: raw,
        output,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`w-full ${
          isExpanded ? 'max-w-6xl h-[85vh]' : 'max-w-3xl h-[550px]'
        } bg-[#0a0d14] rounded-2xl border border-white/15 shadow-2xl flex flex-col overflow-hidden font-mono transition-all`}
      >
        {/* Top Titlebar */}
        <div className="px-4 py-3 bg-[#0d121c] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-red-500/90 hover:opacity-80 transition-opacity"
              />
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-3 h-3 rounded-full bg-yellow-500/90 hover:opacity-80 transition-opacity"
              />
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-3 h-3 rounded-full bg-emerald-500/90 hover:opacity-80 transition-opacity"
              />
            </div>
            <div className="flex items-center gap-2 ml-3 text-xs text-zinc-400">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>long@smiledev-core: ~ (v1.0.0-release)</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 hover:text-white rounded"
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button onClick={onClose} className="p-1 hover:text-white rounded">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          className="flex-1 p-4 overflow-y-auto space-y-4 text-xs select-text"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="text-cyan-400 font-bold">long@smiledev:~$</span>
                <span className="text-white font-medium">{item.command}</span>
                <span className="text-[10px] text-zinc-600 ml-auto">{item.timestamp}</span>
              </div>
              <div className="pl-4 pt-1">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Prompt */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim()) handleCommand(input);
          }}
          className="px-4 py-3 bg-[#0d121c] border-t border-white/10 flex items-center gap-2"
        >
          <span className="text-cyan-400 font-bold text-xs">long@smiledev:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'about', 'skills', 'hire', 'clear'..."
            className="flex-1 bg-transparent text-white text-xs font-mono focus:outline-none placeholder:text-zinc-600"
          />
          <button
            type="submit"
            className="p-1 rounded bg-zinc-800 text-zinc-400 hover:text-white"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
