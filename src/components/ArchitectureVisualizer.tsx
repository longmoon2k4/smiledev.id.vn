import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Server,
  Shield,
  CreditCard,
  Database,
  Cpu,
  ArrowRight,
  Play,
  RotateCcw,
  CheckCircle2,
} from 'lucide-react';

interface ArchStep {
  id: string;
  title: {
    vi: string;
    en: string;
  };
  subtitle: string;
  icon: any;
  color: string;
  borderColor: string;
  tech: string;
  details: {
    vi: string;
    en: string;
  };
  payloadSample: string;
  metric: string;
}

export const ArchitectureVisualizer: React.FC = () => {
  const { language } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const steps: ArchStep[] = [
    {
      id: 'client',
      title: {
        vi: '1. Khách hàng & Giao diện',
        en: '1. Client & Frontend',
      },
      subtitle: 'React Vite + Axios + JWT Header',
      icon: Cpu,
      color: 'from-cyan-500 to-blue-500',
      borderColor: 'border-cyan-500/50',
      tech: 'React 19 / TypeScript / Vite',
      details: {
        vi: 'Người dùng thực hiện đặt hàng hoặc tải lên tệp tin. Client đóng gói request kèm Bearer JWT Token gửi đến Backend.',
        en: 'User triggers checkout or file upload. Client encapsulates request with Bearer JWT Token to Backend API.',
      },
      payloadSample: `POST /api/v1/checkout HTTP/1.1\nHost: smiledev.id.vn\nAuthorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6...\nContent-Type: application/json\n\n{\n  "productId": "PROD-2026-KEY",\n  "amount": 250000,\n  "currency": "VND"\n}`,
      metric: 'Latency: ~5ms',
    },
    {
      id: 'security',
      title: {
        vi: '2. Bảo mật & Xác thực',
        en: '2. Security & Auth Filter',
      },
      subtitle: 'Spring Security 6 + JWT Provider',
      icon: Shield,
      color: 'from-indigo-500 to-purple-600',
      borderColor: 'border-indigo-500/50',
      tech: 'Spring Security / JJWT / RBAC',
      details: {
        vi: 'Bộ lọc JwtAuthenticationFilter giải mã token, xác thực chữ ký số HMAC, nạp SecurityContextHolder và kiểm tra quyền hạn (Role-Based).',
        en: 'JwtAuthenticationFilter intercepts request, validates HMAC signature, sets SecurityContextHolder, and enforces RBAC permissions.',
      },
      payloadSample: `// Spring Security Context Log\n[INFO] Validated Token for Subject: "user@smiledev.id.vn"\n[INFO] Granted Authorities: [ROLE_USER, ROLE_DEVELOPER]\n[INFO] SecurityContext established in 1.4ms`,
      metric: 'Auth Check: 1.4ms (Verified)',
    },
    {
      id: 'backend-core',
      title: {
        vi: '3. Core Business & Logic',
        en: '3. Core Service Layer',
      },
      subtitle: 'Spring Boot 3.4 Service Layer',
      icon: Server,
      color: 'from-blue-500 to-cyan-400',
      borderColor: 'border-blue-500/50',
      tech: 'Java 21 / Spring Boot 3.4 / Clean Architecture',
      details: {
        vi: 'Xử lý logic nghiệp vụ tạo đơn hàng, quản lý vòng đời License Key, điều phối transaction ACID và gọi các service tích hợp.',
        en: 'Executes order orchestration, license allocation logic, manages ACID transaction boundaries, and coordinates downstream services.',
      },
      payloadSample: `@Service\n@Transactional\npublic OrderResponse processOrder(OrderRequest request) {\n    LicenseKey key = licenseService.allocateKey(request.getProductId());\n    PaymentTransaction tx = vnpayService.createTx(request);\n    return new OrderResponse(tx.getPaymentUrl(), key.getStatus());\n}`,
      metric: 'Service Exec: 8.2ms',
    },
    {
      id: 'integrations',
      title: {
        vi: '4. Tích hợp VNPay & VirusTotal',
        en: '4. VNPay & VirusTotal APIs',
      },
      subtitle: 'Payment Gateway & Threat Scanner',
      icon: CreditCard,
      color: 'from-emerald-500 to-teal-500',
      borderColor: 'border-emerald-500/50',
      tech: 'VNPay Sandbox / VirusTotal v3 REST API',
      details: {
        vi: 'Sinh URL thanh toán VNPay kèm chữ ký số SHA512 chống giả mạo; đồng thời quét checksum mã độc qua VirusTotal API trước khi phân phối file.',
        en: 'Generates secure VNPay payment URLs with SHA512 hash checksums; concurrently checks file SHA256 against VirusTotal database.',
      },
      payloadSample: `// Third-Party Dispatch\n[VNPay] Generated Hash: e3b0c44298fc1c149afbf4c8996fb92427ae...\n[VNPay] Status: 00 - Transaction Initialized\n[VirusTotal] File SHA-256: 0 threats detected (Clean score 72/72)`,
      metric: 'External Call: 120ms',
    },
    {
      id: 'database',
      title: {
        vi: '5. Cơ sở Dữ liệu & Lưu trữ',
        en: '5. Database & Persistence',
      },
      subtitle: 'SQL Server / MySQL + JPA/Hibernate',
      icon: Database,
      color: 'from-amber-500 to-orange-500',
      borderColor: 'border-amber-500/50',
      tech: 'Microsoft SQL Server / MySQL / Spring Data JPA',
      details: {
        vi: 'Ghi nhận trạng thái đơn hàng, lưu mã Key đã mã hóa và đồng bộ dữ liệu bảo đảm toàn vẹn giao dịch (ACID).',
        en: 'Persists order state, stores encrypted keys, and ensures ACID transaction compliance with optimized index queries.',
      },
      payloadSample: `INSERT INTO order_transactions (id, user_id, amount, status, created_at)\nVALUES ('TX-98432', 104, 250000.00, 'COMPLETED', CURRENT_TIMESTAMP);\n-- Execution Time: 2.1ms (Indexed)`,
      metric: 'DB Commit: 2.1ms',
    },
  ];

  const handleSimulate = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    let step = 0;
    setActiveStep(0);
    const interval = setInterval(() => {
      step += 1;
      if (step < steps.length) {
        setActiveStep(step);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 1200);
  };

  const current = steps[activeStep];

  return (
    <section id="architecture" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400">
            <Server className="w-3.5 h-3.5" />
            <span>{language === 'vi' ? 'KIẾN TRÚC DOANH NGHIỆP' : 'ENTERPRISE SYSTEM ARCHITECTURE'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {language === 'vi' ? 'Mô Phỏng Kiến Trúc Backend Thực Tế' : 'Interactive Backend Architecture Flow'}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {language === 'vi'
              ? 'Khám phá cách tôi thiết kế luồng xử lý khép kín: từ Request Client, xác thực Spring Security JWT, xử lý logic Java 21, đến tích hợp cổng VNPay và quét mã độc VirusTotal.'
              : 'Explore how I design resilient enterprise pipelines: from Client Requests and Spring Security JWT to VNPay fintech webhooks and VirusTotal security scans.'}
          </p>
          <div className="pt-2">
            <button
              onClick={handleSimulate}
              disabled={isSimulating}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all shadow-md ${
                isSimulating
                  ? 'bg-zinc-800 text-zinc-400 cursor-not-allowed border border-white/10'
                  : 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:from-cyan-400 hover:to-indigo-500 shadow-cyan-500/20'
              }`}
            >
              {isSimulating ? (
                <>
                  <RotateCcw className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                  <span>{language === 'vi' ? 'Đang mô phỏng luồng...' : 'Simulating Pipeline...'}</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{language === 'vi' ? 'Chạy Mô Phỏng Giao Dịch Live' : 'Simulate Live Transaction Flow'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Pipeline Steps Tracker Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => {
                  if (!isSimulating) setActiveStep(idx);
                }}
                className={`relative text-left p-4 rounded-xl border transition-all duration-300 ${
                  isCurrent
                    ? `bg-zinc-900/90 ${step.borderColor} shadow-lg shadow-cyan-500/10 scale-[1.02]`
                    : 'bg-zinc-950/60 border-white/10 hover:border-white/20 hover:bg-zinc-900/40 opacity-75'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${step.color} text-white shadow-sm`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  {isCurrent && (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                  )}
                </div>
                <div className="font-bold text-xs sm:text-sm text-white line-clamp-1">
                  {step.title[language]}
                </div>
                <div className="text-[11px] text-zinc-400 font-mono mt-0.5 line-clamp-1">
                  {step.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Inspector View */}
        <div className="rounded-2xl bg-[#0d111a] border border-white/10 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Step Description */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${current.color} p-[1.5px]`}
                >
                  <div className="w-full h-full bg-[#090a0f] rounded-[9px] flex items-center justify-center">
                    <current.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {current.title[language]}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400">{current.tech}</div>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {current.details[language]}
              </p>

              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">Execution Status</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Passed (200 OK)
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">Benchmark Metric</span>
                  <span className="text-cyan-300 font-bold">{current.metric}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 text-xs font-mono text-zinc-300 hover:text-white"
                >
                  &larr; Prev Step
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Simulated Code / Log Terminal */}
            <div className="lg:col-span-6 rounded-xl bg-zinc-950 border border-white/10 overflow-hidden shadow-inner font-mono text-xs">
              <div className="px-4 py-2.5 bg-zinc-900/80 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-zinc-400 text-[11px] ml-2">inspector://stream/payload.json</span>
                </div>
                <span className="text-[10px] text-zinc-500">Live Payload</span>
              </div>
              <div className="p-4 overflow-x-auto text-zinc-300 max-h-[260px] leading-relaxed select-text">
                <pre className="text-cyan-300/90 whitespace-pre-wrap font-mono text-[11px]">
                  {current.payloadSample}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
