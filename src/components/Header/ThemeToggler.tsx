"use client";
import { IconButton, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useContext } from 'react';
import { ThemeContext } from '@/app/providers';
import { motion } from 'framer-motion';

const ThemeToggler = () => {
  const theme = useTheme();
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <IconButton
        onClick={toggleTheme}
        aria-label="toggle theme"
        sx={{
          p: 1.5,
          borderRadius: 2,
          backgroundColor: theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.05)' 
            : 'rgba(0, 0, 0, 0.05)',
          '&:hover': {
            backgroundColor: theme.palette.mode === 'dark'
              ? 'rgba(255, 255, 255, 0.1)'
              : 'rgba(0, 0, 0, 0.1)',
          }
        }}
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon sx={{ color: 'text.primary' }} />
        ) : (
          <Brightness4Icon sx={{ color: 'text.primary' }} />
        )}
      </IconButton>
    </motion.div>
  );
};

export default ThemeToggler;
