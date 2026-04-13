// src/types/index.ts

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  featured: boolean;
  color: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
  color: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
