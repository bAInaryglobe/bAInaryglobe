"use client";
import { useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is Contact Page for bAInaryglobe",
  // other metadata
};

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all fields.");
      return;
    }
    // Simulate sending a message
    setStatus("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="mx-auto max-w-screen-md p-8">
      <h1 className="mb-6 text-2xl font-bold">Contact Us</h1>
      <Breadcrumb
        pageName="Contact Page"
        description="Having any issues? you can contact us at bAInaryglobe from here."
      />
      {status && <p className="mb-4 text-green-600">{status}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-3 border rounded"
        />
        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          className="w-full p-3 border rounded"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-primary text-white rounded hover:bg-primary-dark"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
