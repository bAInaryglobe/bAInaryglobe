"use client";

import { AppBar, Box, Container, IconButton, Toolbar, Typography, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Providers, ThemeContext } from "./providers";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={inter.className}>
        <Providers>
          <MainContent>{children}</MainContent>
        </Providers>
      </body>
    </html>
  );
}

function MainContent({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const { toggleTheme } = useContext(ThemeContext);
  
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="sticky" elevation={0} sx={{ 
        backgroundColor: theme.palette.background.default,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 700,
                }}
              >
                bAInaryglobe
              </Typography>
            </motion.div>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton onClick={toggleTheme} color="inherit" sx={{
              backgroundColor: theme.palette.action.hover,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: theme.palette.action.selected,
              }
            }}>
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1 }}>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </Box>

      <Paper component="footer" elevation={0} sx={{
        mt: 'auto',
        py: 3,
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} bAInaryglobe. All rights reserved.
          </Typography>
        </Container>
      </Paper>
    </Box>
  );
}
