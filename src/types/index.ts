// src/types/index.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  features: string[];
  impact: string;
  status: "completed" | "ongoing" | "research";
  year: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  cgpa: string;
  highlights: string[];
  coursework: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  platform: string;
  date: string;
  score?: string;
  credentialUrl: string;
  icon: string;
}

export interface ResearchPaper {
  title: string;
  status: "under-review" | "ongoing" | "published";
  area: string[];
  date: string;
  coAuthors?: string[];
  institution?: string;
  abstract: string;
  url?: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5
  category: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Achievement {
  value: string;
  label: string;
  icon: string;
}
