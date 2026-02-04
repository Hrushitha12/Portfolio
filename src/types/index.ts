export interface TimelineItem {
  id: number;
  title: string;
  institution: string;
  date: string;
  description: string;
  highlights?: string[];
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  category: 'languages' | 'frameworks' | 'tools' | 'other';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubLink?: string;
  liveLink?: string;
  paperLink?: string;
}

export interface Publication {
  id: number;
  title: string;
  journal: string;
  date: string;
  abstract: string;
  link?: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  id: string;
  name: string;
  href: string;
}