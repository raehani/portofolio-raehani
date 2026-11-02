export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'all' | 'mobile' | 'saas' | 'ecommerce';
  categoryLabel: string;
  image: string;
  client: string;
  year: string;
  impactMetric: string;
  summary: string;
  challenge: string;
  solution: string;
  tags: string[];
  role: string;
  deliverables: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  tools: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  philosophy: string;
  location: string;
  email: string;
  availableForHire: boolean;
  avatarUrl: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    dribbble?: string;
    github?: string;
    instagram?: string;
    youtube?: string;
    behance?: string;
  };
}
