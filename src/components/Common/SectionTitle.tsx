"use client";
import { Typography, Box, Container, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ mb: { mb } }}>
      <Box
        sx={{
          maxWidth: width,
          mx: center ? "auto" : "0",
          textAlign: center ? "center" : "left",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <Typography
            variant="h2"
            sx={{
              background: `linear-gradient(140deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 800,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              letterSpacing: "-0.02em",
              mb: 2,
            }}
          >
            {title}
          </Typography>
        </motion.div>

        {paragraph && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: { xs: "16px", sm: "18px" },
                lineHeight: 1.6,
              }}
            >
              {paragraph}
            </Typography>
          </motion.div>
        )}
      </Box>
    </Container>
  );
};

export default SectionTitle;
