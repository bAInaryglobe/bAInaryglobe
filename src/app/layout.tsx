"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Providers, ThemeContext } from "./providers";
import { useContext, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme === "light" ? "bg-white" : "bg-gray-900";
  }, [theme]);

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className="min-h-screen">
        <Providers>
          <header className="bg-white dark:bg-gray-900 shadow py-4">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-xl font-bold">bAInaryglobe</h1>
              <ThemeToggle />
            </div>
          </header>
          <main>{children}</main>
          <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-12">
            <div className="container mx-auto text-center text-sm text-gray-600">
              © {new Date().getFullYear()} bAInaryglobe. All rights reserved.
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className="p-2 border rounded">
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
