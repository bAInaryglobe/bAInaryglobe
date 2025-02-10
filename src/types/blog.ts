export interface Author {
  id: string;
  name: string;
  image: string;
  bio?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: Author;
  tags: string[];
  readTime: number;
  views: number;
  likes: number;
  featured?: boolean;
  category: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface BlogComment {
  id: string;
  content: string;
  author: {
    name: string;
    image?: string;
  };
  date: string;
  parentId?: string;
  likes: number;
}
