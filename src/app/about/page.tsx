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
        description="bAInary Globe: Innovating with a user-centric approach."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
}
