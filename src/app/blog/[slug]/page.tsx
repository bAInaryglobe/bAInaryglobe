// filepath: src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import blogData from '@/components/Blog/blogData';
import SingleBlog from '@/components/Blog/SingleBlog';

interface Props { params: { slug: string } }

export default function BlogPostPage({ params: { slug } }: Props) {
  const post = blogData.find(b => b.slug === slug);
  if (!post) return notFound();
  return <SingleBlog blog={post} />;
}
