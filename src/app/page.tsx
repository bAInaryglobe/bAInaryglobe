"use client";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

// metadata for pages
export const metadata: Metadata = {
  title: "bAInaryglobe",
  description: "This is Home for bAInaryglobe website",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <main className="flex flex-col items-center">
        <ScrollUp key="scroll-up" />
        <section className="w-full p-8 text-center">
          <h1 className="text-4xl font-bold"></h1>
          <section className="container mx-auto py-12 text-center">
            <h2 className="text-2xl font-bold">Welcome to bAInaryglobe</h2>
            <p className="mt-4 text-lg">
              We blend innovation with AI to deliver extraordinary digital experiences.
            </p>
          </section>
          <Hero key="hero" />
          <Features key="features" />
          <Video key="video" />
          <Brands key="brands" />
          <AboutSectionOne key="about-section-one" />
          <AboutSectionTwo key="about-section-two" />
          <Testimonials key="testimonials" />
          <Pricing key="pricing" />
          <Blog key="blog" />
          <Contact key="contact" />
        </section>
      </main>
    </>
  );
}


