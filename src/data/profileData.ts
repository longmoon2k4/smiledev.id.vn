import type { ProjectItem, ExperienceItem, EducationItem, SkillCategory } from '../types/portfolio';

export const personalInfo = {
  name: 'Hà Vũ Long',
  nickname: 'SmileDev',
  title: {
    vi: 'Kỹ sư Phần mềm • Chuyên gia Java Backend • AI Engineering Trainee',
    en: 'Software Engineer • Java Backend Specialist • AI Engineering Trainee',
  },
  headline: {
    vi: 'Xây dựng Kiến trúc Backend Vững chãi & Khám phá Kỹ thuật AI Thế hệ mới',
    en: 'Architecting Resilient Backend Systems & Exploring Next-Gen AI Solutions',
  },
  phone: '0378071412',
  email: 'Longmoon2004@gmail.com',
  location: {
    vi: 'Thạch Hòa, Thạch Thất, Hà Nội (Khu CNC Hòa Lạc)',
    en: 'Thach Hoa, Thach That, Hanoi, Vietnam',
  },
  github: 'https://github.com/longmoon2k4',
  githubUsername: 'longmoon2k4',
  domain: 'https://smiledev.id.vn',
  domainName: 'smiledev.id.vn',
  zalo: 'https://zalo.me/0378071412',
  facebook: 'https://facebook.com',
  linkedin: 'https://linkedin.com/in/havulong',
  openToWork: true,
  gpa: '3.2 / 4.0',
  summary: {
    vi: 'Sinh viên năm cuối ngành Kỹ thuật Phần mềm tại Đại học FPT (GPA 3.2/4.0), sở hữu kinh nghiệm thực chiến môi trường Enterprise tại FPT Software (dự án Automotive NXP) cùng năng lực dẫn dắt dự án (Project Leader). Nền tảng vững vàng về Java 21, Spring Boot 3.4, OOP, SQL Server, Docker và CI/CD. Đã từng trực tiếp kiến trúc hệ thống E-commerce, tích hợp cổng thanh toán trực tuyến VNPay và bảo mật VirusTotal API. Định hướng trở thành Kỹ sư AI thông qua chương trình đào tạo AI Talent Training Program.',
    en: 'Final-year Software Engineering student at FPT University with a 3.2/4.0 GPA, practical enterprise experience at FPT Software (Automotive NXP project), and hands-on leadership experience across software projects. Strong foundation in Java 21, Spring Boot 3.4, OOP, SQL Server, Docker, Git/GitHub, and CI/CD pipelines. Proven experience leading e-commerce systems, VNPay payment gateway integration, and VirusTotal security API. Actively pursuing the AI Talent Training Program – Batch V to transition into AI Engineering.',
  },
  stats: [
    { value: '3.2', label: { vi: 'GPA Đại học FPT', en: 'FPT University GPA' }, suffix: '/4.0' },
    { value: '2+', label: { vi: 'Dự án dẫn dắt (Leader)', en: 'Led Major Projects' }, suffix: ' Systems' },
    { value: '100%', label: { vi: 'Quy chuẩn Clean Code', en: 'Clean Code Standard' }, suffix: ' Java & Spring' },
    { value: 'Automotive', label: { vi: 'Kinh nghiệm FPT Software', en: 'FPT Software Track' }, suffix: ' NXP' },
  ],
};

export const experiences: ExperienceItem[] = [
  {
    company: 'FPT SOFTWARE',
    role: 'Software Engineer / Project Member',
    period: 'Dec 2025 – Feb 2026',
    location: 'Hà Nội, Việt Nam',
    type: 'Enterprise Project (NXP Automotive)',
    badge: 'Enterprise Track',
    description: {
      vi: 'Tham gia phát triển phần mềm trong môi trường Automotive chuyên nghiệp tiêu chuẩn quốc tế, cộng tác chặt chẽ cùng đội ngũ kỹ sư dự án doanh nghiệp.',
      en: 'Worked in a real-world Automotive software development environment and collaborated within an enterprise project team.',
    },
    achievements: {
      vi: [
        'Tham gia toàn diện vào quy trình phân tích yêu cầu (Requirements), đặc tả kỹ thuật phần mềm (Specifications) và quy trình kiểm thử (Testing).',
        'Áp dụng triệt để nguyên lý Lập trình hướng đối tượng (OOP) và quy chuẩn Clean Code trong môi trường dự án ô tô chuẩn quốc tế.',
        'Làm quen sâu sắc với quy trình phát triển phần mềm chuẩn doanh nghiệp (Enterprise SDLC, Git workflows, Agile Scrum).',
      ],
      en: [
        'Participated in activities related to project requirements, project specification and software testing.',
        'Applied Object-Oriented Programming (OOP) principles and gained practical exposure to enterprise software development workflows.',
        'Collaborated effectively within a multi-disciplinary enterprise engineering team following strict automotive quality standards.',
      ],
    },
    skills: ['Java', 'OOP', 'Automotive Software', 'Specification', 'Software Testing', 'Enterprise SDLC', 'Git'],
  },
];

export const educations: EducationItem[] = [
  {
    school: 'FPT UNIVERSITY (ĐẠI HỌC FPT)',
    degree: 'Cử nhân Kỹ thuật Phần mềm (Software Engineering)',
    period: 'Expected Graduation: 2027',
    gpa: '3.2 / 4.0',
    location: 'Khu Công Nghệ Cao Hòa Lạc, Hà Nội',
    highlights: {
      vi: [
        'GPA 3.2/4.0 - Nắm vững kiến trúc hệ thống, cấu trúc dữ liệu giải thuật, cơ sở dữ liệu và công nghệ phần mềm hiện đại.',
        'Giữ vai trò Project Leader trong nhiều đồ án phát triển phần mềm full-stack và backend.',
        'Định hướng chuyển tiếp mạnh mẽ sang AI Engineering qua chương trình AI Talent Training Program – Batch V.',
      ],
      en: [
        'GPA 3.2/4.0 - Solid foundation in Software Architecture, Data Structures & Algorithms, Database Systems, and Modern SE methodologies.',
        'Served as Project Leader in multiple core software and full-stack engineering capstones.',
        'Actively transitioning into AI Engineering via the prestigious AI Talent Training Program – Batch V.',
      ],
    },
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'license-key-platform',
    title: 'License Key E-Commerce Platform',
    subtitle: 'Nền tảng thương mại điện tử phân phối & quản lý License Key bản quyền số',
    role: 'Project Leader & Backend Architect',
    period: '2025 – 2026',
    category: 'security',
    featured: true,
    metrics: 'Integrated VNPay & VirusTotal API',
    techStack: ['Java', 'Spring Boot', 'VNPay API', 'VirusTotal API', 'Docker', 'MySQL', 'Git/GitHub', 'REST API'],
    description: {
      vi: 'Dẫn dắt phát triển nền tảng thương mại điện tử chuyên biệt để kinh doanh, cấp phát và quản lý bản quyền phần mềm kỹ thuật số, tích hợp thanh toán tự động và quét bảo mật mã độc thời gian thực.',
      en: 'Led the development of a specialized e-commerce platform for selling, provisioning, and managing digital software license keys with automated payment and real-time security scanning.',
    },
    highlights: {
      vi: [
        'Chủ trì định hình ý tưởng kinh doanh, phân tích yêu cầu nghiệp vụ và quản lý phạm vi phát triển dự án.',
        'Trực tiếp thiết kế ERD, triển khai thực thể Entities, Services và toàn bộ Business Logic bằng Spring Boot.',
        'Tích hợp cổng thanh toán trực tuyến VNPay qua IPN/Webhook và VirusTotal API để tự động quét mã độc tệp tin tải lên.',
        'Xây dựng các luồng Dashboard phân quyền chuyên biệt cho Admin, Developer và End-User.',
        'Đóng gói và triển khai ứng dụng bằng Docker để đảm bảo tính đồng nhất môi trường.',
      ],
      en: [
        'Led the development of an e-commerce platform for selling and managing license keys for digital products.',
        'Defined project ideas, business requirements, and development scope; coordinated implementation across core system components.',
        'Designed and implemented entities, services, and core business logic using Spring Boot; configured connection to online databases.',
        'Integrated VNPay for online payment gateway and VirusTotal API for automated file security/virus scanning.',
        'Implemented authentication, product catalog, payment handling, and dedicated dashboards for Admin, Developer, and User workflows.',
      ],
    },
    github: 'https://github.com/longmoon2k4',
    architectureDiagram: {
      nodes: ['User Client', 'Spring Boot API', 'VNPay Gateway', 'VirusTotal Security', 'SQL Database'],
      flowDescription: {
        vi: 'Khách hàng đặt mua ➔ Spring Boot tạo đơn ➔ VNPay thanh toán trực tuyến ➔ VirusTotal quét file đính kèm ➔ Cấp phát Key an toàn vào DB.',
        en: 'Client order ➔ Spring Boot creates order ➔ VNPay processes payment ➔ VirusTotal scans payloads ➔ Secure License Key issued to DB.',
      },
    },
  },
  {
    id: 'sba301-clothing-shop',
    title: 'SBA301 – Small Clothing E-Commerce & CI/CD',
    subtitle: 'Hệ thống thương mại điện tử thời trang Full-Stack với Pipeline CI/CD tự động',
    role: 'Project Leader & DevOps Lead',
    period: '2025',
    category: 'fullstack',
    featured: true,
    metrics: 'Automated CI/CD Pipeline with GitHub Actions',
    techStack: ['Java 21', 'Spring Boot 3.4', 'Spring Data JPA', 'Spring Security', 'JWT', 'SQL Server', 'React', 'Vite', 'Axios', 'GitHub Actions', 'Docker', 'Postman'],
    description: {
      vi: 'Dự án thương mại điện tử thời trang hoàn chỉnh kết nối REST API Backend Spring Boot 3.4 với Frontend React Vite, đồng thời xây dựng quy trình triển khai CI/CD độc lập tự động.',
      en: 'A comprehensive full-stack e-commerce clothing system connecting Spring Boot 3.4 REST backend with React Vite frontend, accompanied by an automated CI/CD deployment pipeline.',
    },
    highlights: {
      vi: [
        'Dẫn dắt nhóm phát triển toàn bộ chu trình mua hàng: giỏ hàng, đặt hàng, xử lý thanh toán, đánh giá sản phẩm và quản trị Staff/Admin.',
        'Kiến trúc RESTful API chuẩn mực với Java 21, Spring Boot 3.4, Spring Security, JWT và SQL Server.',
        'Tích hợp frontend React + Vite + Axios với trải nghiệm người dùng mượt mà, phản hồi tức thời.',
        'Xây dựng riêng một Repository CI/CD chuyên biệt để thực hành tự động hóa quy trình build, test và deployment với GitHub Actions.',
      ],
      en: [
        'Led a group software project covering customer shopping, ordering, payment/review flows and staff/admin operations.',
        'Coordinated project scope and implementation tasks while contributing to backend development and system integration.',
        'Worked with a Spring Boot REST backend, JPA/Hibernate, SQL Server and React frontend; practiced authentication, API design and role-oriented application flows.',
        'Created a separate CI/CD-focused repository to practice deployment automation and DevOps workflows.',
      ],
    },
    github: 'https://github.com/gekok/sba301-clothing-shop',
    cicdRepo: 'https://github.com/longmoon2k4/SBA301-CICD',
    architectureDiagram: {
      nodes: ['React Vite UI', 'Spring Security JWT', 'Spring Boot 3.4 REST', 'SQL Server DB', 'GitHub Actions CI/CD'],
      flowDescription: {
        vi: 'React UI gửi request kèm JWT ➔ Spring Security xác thực ➔ Business Service xử lý ➔ SQL Server lưu trữ ➔ GitHub Actions tự động kiểm thử & build.',
        en: 'React UI sends requests with JWT ➔ Spring Security authenticates ➔ Business Service executes ➔ SQL Server persists ➔ GitHub Actions auto builds & tests.',
      },
    },
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: {
      vi: 'Backend & Kiến trúc Hệ thống',
      en: 'Backend & Architecture',
    },
    iconName: 'Server',
    skills: [
      { name: 'Java 21 / Java Core', level: 'Expert', tag: 'Core' },
      { name: 'Spring Boot 3.x', level: 'Expert', tag: 'Core' },
      { name: 'Spring Security & JWT', level: 'Advanced', tag: 'Security' },
      { name: 'Spring Data JPA / Hibernate', level: 'Advanced', tag: 'ORM' },
      { name: 'RESTful API Design', level: 'Expert', tag: 'Architecture' },
      { name: 'OOP & Clean Architecture', level: 'Expert', tag: 'Best Practice' },
      { name: 'Microservices & Modular Monolith', level: 'Advanced', tag: 'Architecture' },
    ],
  },
  {
    title: {
      vi: 'Cơ sở Dữ liệu & Lưu trữ',
      en: 'Databases & Storage',
    },
    iconName: 'Database',
    skills: [
      { name: 'Microsoft SQL Server (MSSQL)', level: 'Advanced', tag: 'RDBMS' },
      { name: 'MySQL / MariaDB', level: 'Advanced', tag: 'RDBMS' },
      { name: 'Database Modeling & ERD', level: 'Expert', tag: 'Design' },
      { name: 'SQL Query Optimization', level: 'Advanced', tag: 'Performance' },
      { name: 'Transaction Management', level: 'Advanced', tag: 'ACID' },
    ],
  },
  {
    title: {
      vi: 'DevOps, Cloud & Tự động hóa',
      en: 'DevOps, Cloud & Automation',
    },
    iconName: 'Cpu',
    skills: [
      { name: 'Docker & Containerization', level: 'Advanced', tag: 'DevOps' },
      { name: 'GitHub Actions (CI/CD)', level: 'Advanced', tag: 'Automation' },
      { name: 'Git & GitHub Workflows', level: 'Expert', tag: 'VCS' },
      { name: 'Postman & API Testing', level: 'Expert', tag: 'QA' },
      { name: 'Linux / Bash Scripting', level: 'Proficient', tag: 'System' },
    ],
  },
  {
    title: {
      vi: 'Tích hợp API & Bảo mật',
      en: 'API Integrations & Security',
    },
    iconName: 'ShieldCheck',
    skills: [
      { name: 'VNPay Payment Gateway', level: 'Advanced', tag: 'Fintech' },
      { name: 'VirusTotal Security API', level: 'Advanced', tag: 'Cybersecurity' },
      { name: 'Role-Based Access Control (RBAC)', level: 'Expert', tag: 'Auth' },
      { name: 'Webhook & IPN Handlers', level: 'Advanced', tag: 'Event-driven' },
    ],
  },
  {
    title: {
      vi: 'Frontend, Mobile & AI Direction',
      en: 'Frontend, Mobile & AI Track',
    },
    iconName: 'Layers',
    skills: [
      { name: 'React & Vite', level: 'Advanced', tag: 'Frontend' },
      { name: 'TypeScript & JavaScript', level: 'Advanced', tag: 'Web' },
      { name: 'Tailwind CSS', level: 'Advanced', tag: 'UI/UX' },
      { name: 'Flutter & Dart', level: 'Proficient', tag: 'Mobile' },
      { name: 'AI Engineering Trainee (Batch V)', level: 'Actively Learning', tag: 'AI' },
      { name: 'Machine Learning Fundamentals', level: 'Learning', tag: 'AI' },
    ],
  },
];
