"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

export const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });

export function Providers({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
    setTheme(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function SiteProviders({ children }: { children: React.ReactNode }) {
  // Wrap children in additional context if needed for a robust infrastructure
  return (
    <>
      {children}
    </>
  );
}
