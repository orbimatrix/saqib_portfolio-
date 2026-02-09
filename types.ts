
export enum Domain {
  HOME = 'HOME',
  AI = 'AI',
  HUGGING_FACE = 'HUGGING_FACE',
  DATA_SCIENCE = 'DATA_SCIENCE',
  WEB3 = 'WEB3',
  VIDEO_EDITOR = 'VIDEO_EDITOR',
  ALL_PROJECTS = 'ALL_PROJECTS'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  stats?: { label: string; value: string }[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface DomainTheme {
  primary: string;
  secondary: string;
  accent: string;
  bg: string;
  text: string;
  cardBg: string;
  icon: string;
}
