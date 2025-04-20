import BlogList from "@/components/Blog";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page",
  description: "This is Blog Page for bAInaryglobe",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Blog Page"
        description="Get the latest information and updates from bAInaryglobe blog"
      />

      <BlogList />
    </>
  );
};

export default Blog;
