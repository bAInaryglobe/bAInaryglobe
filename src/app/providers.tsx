"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
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
