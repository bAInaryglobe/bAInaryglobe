export interface Feature {
  id: string;
  icon: string | React.ReactNode;
  title: string;
  description: string;
  link?: string;
  category?: string;
  benefits?: string[];
  demoUrl?: string;
  techStack?: string[];
  status: 'alpha' | 'beta' | 'stable' | 'deprecated';
  configuration?: Record<string, any>;
  integrations?: string[];
  metrics?: {
    performance?: number;
    reliability?: number;
    scalability?: number;
  };
}
