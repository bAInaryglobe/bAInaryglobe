export interface Testimonial {
  id: string;
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    image: string;
    verified: boolean;
    location?: string;
    socialLinks?: {
      linkedin?: string;
      twitter?: string;
      website?: string;
    };
  };
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  projectDetails?: {
    name: string;
    type: string;
    duration: string;
    technologies: string[];
  };
  metrics?: {
    satisfaction: number;
    deliverySpeed: number;
    communication: number;
  };
  featured: boolean;
  video?: string;
  tags: string[];
}

