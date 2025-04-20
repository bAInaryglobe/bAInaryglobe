// filepath: src/lib/posts.ts
import blogData from '@/components/Blog/blogData';

// In-memory posts array (replace with database integration for production)
export let posts = [...blogData];

export function getPosts() {
  return posts;
}

export function findPostBySlug(slug: string) {
  return posts.find(p => p.slug === slug);
}

export function addPost(newPost: any) {
  posts.push(newPost);
  return newPost;
}
