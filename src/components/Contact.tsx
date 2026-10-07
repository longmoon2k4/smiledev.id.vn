import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/profileData';
import { triggerConfetti } from '../utils/confetti';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    triggerConfetti();
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      triggerConfetti();
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-cyan-500/15 via-indigo-500/10 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{language === 'vi' ? 'KẾT NỐI TRỰC TIẾP' : 'GET IN TOUCH'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {language === 'vi' ? 'Sẵn Sàng Cho Các Cơ Hội Hợp Tác' : "Let's Build Something Exceptional"}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {language === 'vi'
              ? 'Tôi luôn cởi mở trao đổi về các vị trí Software Engineer, Java Backend Developer và chương trình AI Engineering Trainee.'
              : 'I am actively seeking software engineering opportunities, Java backend positions, and AI engineering trainee roles.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Direct Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Phone & Zalo */}
            <div className="p-6 rounded-2xl bg-[#0d111a] border border-white/10 hover:border-cyan-500/40 transition-all shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-400">
                      {language === 'vi' ? 'Điện thoại & Zalo' : 'Phone & Zalo'}
                    </div>
                    <div className="font-bold text-white text-base font-mono">{personalInfo.phone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                    title="Copy Phone Number"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={personalInfo.zalo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 rounded-lg bg-cyan-500 text-black font-bold text-xs hover:bg-cyan-400 transition-colors flex items-center gap-1"
                  >
                    <span>Zalo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-[#0d111a] border border-white/10 hover:border-indigo-500/40 transition-all shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-400">
                      {language === 'vi' ? 'Email Trực Tiếp' : 'Direct Email'}
                    </div>
                    <div className="font-bold text-white text-sm sm:text-base font-mono truncate max-w-[200px] sm:max-w-none">
                      {personalInfo.email}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs transition-colors"
                    title="Send Email"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="p-6 rounded-2xl bg-[#0d111a] border border-white/10 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-400">
                  {language === 'vi' ? 'Địa Điểm Làm Việc' : 'Location & Area'}
                </div>
                <div className="text-sm font-medium text-white">{personalInfo.location[language]}</div>
              </div>
            </div>

            {/* Social Channels Strip */}
            <div className="pt-2 grid grid-cols-2 gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-zinc-900 border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white text-xs font-mono transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-zinc-900 border border-white/10 hover:border-cyan-500/30 text-zinc-300 hover:text-cyan-400 text-xs font-mono transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Right: Message Dispatcher Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0d111a] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h3 className="font-bold text-white text-lg flex items-center gap-2">
                  <Send className="w-4 h-4 text-cyan-400" />
                  <span>{language === 'vi' ? 'Gửi Tin Nhắn Nhanh' : 'Send Direct Message'}</span>
                </h3>
                <span className="text-xs font-mono text-zinc-400">smiledev://mailer</span>
              </div>

              {isSubmitted && (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm flex items-center gap-2.5 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    {language === 'vi'
                      ? 'Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi bạn trong thời gian sớm nhất.'
                      : 'Message dispatched successfully! I will get back to you promptly.'}
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400">
                      {language === 'vi' ? 'Họ và tên *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Nguyen Van A"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder:text-zinc-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400">
                      {language === 'vi' ? 'Địa chỉ Email *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400">
                    {language === 'vi' ? 'Tiêu đề (Chủ đề tuyển dụng/hợp tác)' : 'Subject / Purpose'}
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Java Backend Developer / AI Trainee Interview Invitation"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder:text-zinc-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400">
                    {language === 'vi' ? 'Nội dung trao đổi *' : 'Message *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder={
                      language === 'vi'
                        ? 'Chào Long, chúng tôi ấn tượng với hồ sơ và các dự án của bạn...'
                        : 'Hi Long, we are impressed by your profile and projects...'
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder:text-zinc-600"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all flex items-center justify-center gap-2"
                >
                  {isSending ? (
                    <span>{language === 'vi' ? 'Đang gửi...' : 'Transmitting...'}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{language === 'vi' ? 'Gửi Tin Nhắn Đến Hà Vũ Long' : 'Send Message'}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
