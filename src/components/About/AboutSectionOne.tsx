"use client";
import { Box, Container, Grid, Typography, Paper, useTheme } from '@mui/material';
import Image from "next/image";
import { motion } from 'framer-motion';

const AboutSectionOne = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Paper
                elevation={0}
                sx={{
                  position: 'relative',
                  height: '500px',
                  borderRadius: 4,
                  overflow: 'hidden',
                  transform: 'perspective(1000px) rotateY(-5deg)',
                  transition: 'transform 0.5s ease-in-out',
                  '&:hover': {
                    transform: 'perspective(1000px) rotateY(0deg)',
                  },
                }}
              >
                <Image
                  src="/images/about/about-image.svg"
                  alt="About Image"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Paper>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                sx={{
                  mb: 4,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Crafting Digital Excellence
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                }}
              >
                We combine cutting-edge AI technology with creative solutions to transform your digital presence. Our team of experts is dedicated to delivering innovative solutions that drive real business results.
              </Typography>

              <Grid container spacing={4}>
                {[
                  { number: "100+", text: "Projects Completed" },
                  { number: "50+", text: "Happy Clients" },
                  { number: "10+", text: "Awards Won" },
                ].map((stat, index) => (
                  <Grid item xs={6} sm={4} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          textAlign: 'center',
                          borderRadius: 4,
                          backgroundColor: theme.palette.background.paper,
                          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: theme.shadows[4],
                          },
                        }}
                      >
                        <Typography
                          variant="h3"
                          sx={{
                            color: theme.palette.primary.main,
                            fontWeight: 700,
                            mb: 1,
                          }}
                        >
                          {stat.number}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {stat.text}
                        </Typography>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSectionOne;
