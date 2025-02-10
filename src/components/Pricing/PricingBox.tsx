"use client";
import { Box, Card, CardContent, Typography, Button, Container, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface PricingProps {
  packageName: string;
  price: string;
  duration: string;
  subtitle: string;
  children?: React.ReactNode;
}

const PricingBox = ({ packageName, price, duration, subtitle, children, popular }: PricingProps & { popular?: boolean }) => {
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
          position: 'relative',
          borderRadius: 4,
          overflow: 'visible',
          transform: popular ? 'scale(1.05)' : 'scale(1)',
          backgroundColor: theme.palette.background.paper,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: popular ? 'scale(1.08)' : 'scale(1.03)',
            boxShadow: theme.shadows[8],
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
            opacity: popular ? 0.2 : 0,
            transition: 'opacity 0.3s ease-in-out',
          },
          '&:hover::before': {
            opacity: 0.2,
          },
        }}
      >
        {popular && (
          <Box
            sx={{
              position: 'absolute',
              top: -15,
              right: 20,
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              px: 3,
              py: 1,
              borderRadius: '15px',
              fontSize: '0.875rem',
              fontWeight: 600,
              boxShadow: theme.shadows[2],
            }}
          >
            Popular
          </Box>
        )}

        <CardContent sx={{ p: 4 }}>
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              fontSize: '2rem',
              fontWeight: 700,
              color: theme.palette.text.primary,
            }}
          >
            {packageName}
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: '3.5rem',
                fontWeight: 800,
                color: theme.palette.primary.main,
                display: 'inline',
              }}
            >
              ${price}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: theme.palette.text.secondary,
                display: 'inline',
                ml: 1,
              }}
            >
              /{duration}
            </Typography>
          </Box>

          <Typography
            variant="subtitle1"
            sx={{
              color: theme.palette.text.secondary,
              mb: 4,
            }}
          >
            {subtitle}
          </Typography>

          <Box sx={{ mb: 4 }}>
            {children}
          </Box>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant={popular ? "contained" : "outlined"}
              fullWidth
              size="large"
              sx={{
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
              }}
            >
              Get Started
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PricingBox;
