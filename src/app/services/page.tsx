import { Metadata } from "next";
import { Box, Container, Grid, Card, CardMedia, CardContent, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: "Bainaryglobe services",
  description: "This is list of services offered by bAInaryglobe",
};

const services = [
  {
    image: '/vexeroo.png',
    name: 'Vexeroo',
    description: 'Description of Service One',
  },
  {
    image: '/vxfit.png',
    name: 'Vexeroo car',
    description: 'Description of Service Two',
  },
  {
    image: '/vxfit.png',
    name: 'Vxfit',
    description: 'Vxfit is a fitness app designed for busy, office individuals'
  },
  {
    image: '/vxfit.png',
    name: 'See Naija',
    description: ' Tourism attractions right within the vexeroo app'
  },
  {
    image: '/vxfit.png',
    name: 'VxReels',
    description: 'View reels, live sessions of product unveilings, and much more'
  },
  {
    image: '/vxfit.png',
    name: 'VxFuel',
    description: 'Order fuel from the comfort of your home, dont break a sweat'
  },
  {
    image: '/vxfit.png',
    name: 'VxCars',
    description: 'Rent a car as easy as it gets, no problem!'
  },
  {
    image: '/vxfit.png',
    name: 'VxAI',
    description: 'Chat with a fully customizable assistant to help you with daily activities'
  },
  {
    image: '/vxhome.png',
    name: 'VxHome',
    description: 'Vexeroo homes provides house rental, house sharing, and others without meddling agents'
  },
  {
    image: '/vxflight.png',
    name: 'VxFlight',
    description: 'from your home, straight to the airport, no hassle involved we take care of all that.'
  },
];

const ServicesPage = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 6,
              fontWeight: 700,
              background: 'linear-gradient(45deg, #4A6CF7, #818CF8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Services
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                    transform: 'perspective(1000px)',
                    transformStyle: 'preserve-3d',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'perspective(1000px) rotateX(5deg) translateY(-5px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                      '& .service-image': {
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', pt: '60%', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      image={service.image}
                      alt={service.name}
                      className="service-image"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        transition: 'transform 0.3s ease-in-out',
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      {service.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.6,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesPage;
