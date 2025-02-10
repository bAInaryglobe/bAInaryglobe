"use client";
import { useState, useEffect } from "react";
import { Fab, useTheme, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          style={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 1000,
          }}
        >
          <Zoom in={isVisible}>
            <Fab
              onClick={scrollToTop}
              color="primary"
              aria-label="scroll to top"
              sx={{
                backgroundColor: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[8],
                },
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </Zoom>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
