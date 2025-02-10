"use client";
import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Typography
                variant="h1"
                className="text-gradient"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 800,
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                Innovation Through AI
              </Typography>
              <Typography
                variant="h2"
                color="text.secondary"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  mb: 4,
                }}
              >
                We blend cutting-edge technology with creative solutions to build tomorrow's digital experiences.
              </Typography>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: '12px',
                    boxShadow: theme.palette.mode === 'light'
                      ? '0 4px 14px 0 rgba(74, 108, 247, 0.3)'
                      : '0 4px 14px 0 rgba(74, 108, 247, 0.5)',
                  }}
                >
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ position: 'relative', height: '400px' }}
            >
              <div className="material-card" style={{ 
                height: '100%',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <Image
                  src="/images/hero/shape-01.svg"
                  alt="Hero Image"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <motion.div
                style={{
                  position: 'absolute',
                  top: -20,
                  right: -20,
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: theme.palette.primary.main,
                  opacity: 0.1,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
