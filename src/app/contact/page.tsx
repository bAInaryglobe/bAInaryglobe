import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is Contact Page for bAInaryglobe",
  // other metadata
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-screen-md p-8">
      <h1 className="mb-6 text-2xl font-bold">Contact Us</h1>
      <Breadcrumb
        pageName="Contact Page"
        description="Having any issues? you can contact us at bAInaryglobe from here."
      />
      <Contact />
    </main>
  );
}
