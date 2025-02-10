"use client";
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SingleFeature = ({ feature }: { feature: { icon: JSX.Element; title: string; paragraph: string } }) => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <Card
        sx={{
          height: '100%',
          backgroundColor: theme.palette.background.paper,
          borderRadius: 4,
          overflow: 'hidden',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: theme.palette.mode === 'light'
              ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              : '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
          }
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box
            sx={{
              width: 60,
              height: 60,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 2,
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              mb: 3,
            }}
          >
            {feature.icon}
          </Box>
          <Typography 
            variant="h6" 
            gutterBottom
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 600,
              mb: 2
            }}
          >
            {feature.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              lineHeight: 1.6
            }}
          >
            {feature.paragraph}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SingleFeature;
