"use client";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createContext, useState, useEffect, ReactNode, useMemo } from "react";

export const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });

const getDesignTokens = (mode: 'light' | 'dark') => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#4A6CF7',
          },
          background: {
            default: '#ffffff',
            paper: '#f8f9fa',
          },
          text: {
            primary: '#1F2937',
            secondary: '#4B5563',
          },
        }
      : {
          primary: {
            main: '#4A6CF7',
          },
          background: {
            default: '#111827',
            paper: '#1F2937',
          },
          text: {
            primary: '#F9FAFB',
            secondary: '#D1D5DB',
          },
        }),
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: mode === 'light' 
              ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              : '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: mode === 'light'
            ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            : '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12)',
        },
      },
    },
  },
});

export function Providers({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as 'light' | 'dark' ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
    setMode(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme);
  }, []);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem("theme", newMode);
    document.documentElement.setAttribute('data-theme', newMode);
  };

  return (
    <ThemeContext.Provider value={{ theme: mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function SiteProviders({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
