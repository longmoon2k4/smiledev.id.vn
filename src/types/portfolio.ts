export type Language = 'vi' | 'en';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  description: {
    vi: string;
    en: string;
  };
  highlights: {
    vi: string[];
    en: string[];
  };
  techStack: string[];
  metrics?: string;
  category: 'backend' | 'fullstack' | 'security' | 'devops';
  github?: string;
  cicdRepo?: string;
  liveDemo?: string;
  featured: boolean;
  architectureDiagram?: {
    nodes: string[];
    flowDescription: {
      vi: string;
      en: string;
    };
  };
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: {
    vi: string;
    en: string;
  };
  achievements: {
    vi: string[];
    en: string[];
  };
  skills: string[];
  badge?: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  gpa: string;
  location: string;
  highlights: {
    vi: string[];
    en: string[];
  };
}

export interface SkillCategory {
  title: {
    vi: string;
    en: string;
  };
  iconName: string;
  skills: {
    name: string;
    level: string; // 'Expert' | 'Advanced' | 'Proficient'
    tag?: string;
  }[];
}
