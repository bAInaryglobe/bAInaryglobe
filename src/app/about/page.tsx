import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is About Page for bAInaryglobe",
  // other metadata
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Learn about bAInaryglobe's mission and values"
      />
      <section className="container mx-auto py-12 space-y-12">
        <AboutSectionOne />
        <AboutSectionTwo />
      </section>
    </>
  );
}
