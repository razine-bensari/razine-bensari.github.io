export interface TechnicalSkill {
  name: string;
  level: number;
  description: string;
}

export interface ExpertiseArea {
  title: string;
  description: string;
  icon: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  icon?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  codeUrl: string;
}
