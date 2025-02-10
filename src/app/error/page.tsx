"use client";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error Page ",
  description: "This is Error Page",
  // other metadata
};

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-red-50 dark:bg-red-900">
      <h2 className="text-3xl font-bold text-red-700 dark:text-red-300 mb-4">Something went wrong!</h2>
      <p className="mb-6 text-red-600 dark:text-red-200">{error.message}</p>
      <button onClick={() => reset()} className="px-6 py-3 bg-red-700 text-white rounded hover:bg-red-800">
        Try Again
      </button>
    </div>
  );
}
