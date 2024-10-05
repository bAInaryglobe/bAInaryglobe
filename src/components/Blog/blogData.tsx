import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "bAInaryglobe's UI design methodology",
    paragraph:
      "Technology has gone beyond the era when we had to design in unorganized manner, and bAInaryglobe's design methodology is way ahead of the modern status quo.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Emmanuel Eyitayo",
      image: "/images/blog/author-01a.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },

  {
    id: 2,
    title: "9 simple ways to improve your design skills",
    paragraph:
      "Technology",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Emmanuel Eyitayo",
      image: "/images/blog/author-02a.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Technology",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Nathaniel Favour",
      image: "/images/blog/author-03a.png",
      designation: "Backend developer",
    },
    tags: ["design"],
    publishDate: "2025",
  },

  {
    id: 3,
    title: " How to build a Million dollar company",
    paragraph:
      "Technology",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Ben Lucky",
      image: "/images/blog/author-03a.png",
      designation: "Backend developer",
    },
    tags: ["design"],
    publishDate: "2025",
  },

];
export default blogData;
