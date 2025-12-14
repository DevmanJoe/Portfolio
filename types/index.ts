export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  features: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'mobile' | 'tools';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}