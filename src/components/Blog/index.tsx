"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import Link from "next/link";
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of articles that we write for your benefit and knowledge"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog, idx) => (
            <motion.div
              key={blog.id}
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <SingleBlog blog={blog} />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/blog" className="inline-block text-primary font-semibold hover:underline">
            View All Posts &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
