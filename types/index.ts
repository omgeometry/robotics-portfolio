/**
 * TypeScript interfaces for portfolio content
 */

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  pdfUrl?: string;
  imageUrl?: string;
  imageAlt: string;
}

export interface HardwareProject {
  title: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  imageUrl?: string;
  imageAlt: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}
