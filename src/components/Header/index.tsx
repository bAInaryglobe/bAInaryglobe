"use client";
import { useState } from "react";
import Link from "next/link";
import { AppBar, Toolbar, Container, Box, IconButton, Drawer, List, ListItem, Button, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{
        backgroundColor: theme.palette.mode === 'light' 
          ? 'rgba(255, 255, 255, 0.8)'
          : 'rgba(17, 24, 39, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Link href="/" passHref>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box
                component="img"
                src="/images/logo/logo.svg"
                alt="Logo"
                sx={{ height: 40 }}
              />
            </motion.div>
          </Link>

          {isMobile ? (
            <>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <ThemeToggler />
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={() => setMobileOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
              </Box>

              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                sx={{
                  '& .MuiDrawer-paper': {
                    width: '100%',
                    maxWidth: 300,
                    backgroundColor: theme.palette.background.default,
                  },
                }}
              >
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton onClick={() => setMobileOpen(false)}>
                    <CloseIcon />
                  </IconButton>
                </Box>
                <List>
                  {menuData.map((menuItem, index) => (
                    <ListItem key={index}>
                      <Link href={menuItem.path} passHref style={{ width: '100%' }}>
                        <Button
                          fullWidth
                          onClick={() => setMobileOpen(false)}
                          sx={{
                            color: theme.palette.text.primary,
                            justifyContent: 'flex-start',
                            px: 2,
                          }}
                        >
                          {menuItem.title}
                        </Button>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={navVariants}
            >
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                {menuData.map((menuItem, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Link href={menuItem.path} passHref>
                      <Button
                        sx={{
                          color: theme.palette.text.primary,
                          '&:hover': {
                            backgroundColor: theme.palette.action.hover,
                          },
                        }}
                      >
                        {menuItem.title}
                      </Button>
                    </Link>
                  </motion.div>
                ))}
                <ThemeToggler />
              </Box>
            </motion.nav>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
