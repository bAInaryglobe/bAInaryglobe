export interface Brand {
  id: string;
  name: string;
  logo: {
    light: string;
    dark: string;
    favicon?: string;
  };
  description?: string;
  partnership: {
    type: 'platinum' | 'gold' | 'silver' | 'bronze';
    startDate: string;
    activeStatus: boolean;
  };
  url: string;
  metrics?: {
    engagementScore: number;
    collaborationYears: number;
    projectsCompleted: number;
  };
  showcase?: {
    featured: boolean;
    testimonial?: string;
    caseStudyUrl?: string;
  };
  industry: string[];
  technologies: string[];
}
