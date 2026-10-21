export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'AI' | 'Full Stack' | 'Backend' | 'Frontend' | 'DSA & Algorithms';
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  accentColor: string; // e.g. 'purple', 'blue', 'coral', 'yellow', 'emerald'
  featured: boolean;
  highlights: string[];
  visualType: 'ai-resume' | 'seat-booking' | 'lru-cache' | 'ecommerce' | 'generic';
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    tag?: string;
  }[];
}

export interface CodingProfile {
  platform: 'LeetCode' | 'GitHub' | 'LinkedIn';
  username: string;
  profileUrl: string;
  badge: string;
  headline: string;
  description: string;
  stats?: { label: string; value: string }[];
  accentColor: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  scoreLabel: string;
  score: string;
  highlights?: string[];
}
