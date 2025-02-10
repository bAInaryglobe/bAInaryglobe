"use client";
import { Card, CardContent, Box, Typography, Avatar, useTheme, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import Image from "next/image";

const SingleTestimonial = ({ testimonial }: { testimonial: any }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card
        sx={{
          height: '100%',
          borderRadius: 4,
          position: 'relative',
          overflow: 'visible',
          backgroundColor: theme.palette.background.paper,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: theme.palette.mode === 'light'
              ? '0 20px 40px rgba(0,0,0,0.1)'
              : '0 20px 40px rgba(0,0,0,0.3)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -2,
            left: -2,
            right: -2,
            bottom: -2,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
            borderRadius: '20px',
            zIndex: -1,
            opacity: 0,
            transition: 'opacity 0.3s ease-in-out',
          },
          '&:hover::before': {
            opacity: 0.3,
          },
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ mb: 3 }}>
            <Rating value={5} readOnly />
          </Box>
          
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: theme.palette.text.primary,
              lineHeight: 1.8,
              fontStyle: 'italic',
            }}
          >
            "{testimonial.content}"
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              sx={{
                width: 56,
                height: 56,
                mr: 2,
                border: `2px solid ${theme.palette.primary.main}`,
              }}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </Avatar>
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                }}
              >
                {testimonial.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                }}
              >
                {testimonial.designation}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SingleTestimonial;
