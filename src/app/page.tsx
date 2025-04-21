import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Milestones from "@/components/Milestones";
// import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

// metadata for pages
export const metadata: Metadata = {
  title: "bAInaryglobe",
  description: "This is Home for bAInaryglobe website",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp key="scroll-up" />
      <Hero key="hero" />
      <Features key="features" />
      <Milestones key="milestones" />
      <Video key="video" />
      <Brands key="brands" />
      <AboutSectionOne key="about-section-one" />
      <AboutSectionTwo key="about-section-two" />
      <Testimonials key="testimonials" />
      <Blog key="blog" />
      <Contact key="contact" />
    </>
  );
}


