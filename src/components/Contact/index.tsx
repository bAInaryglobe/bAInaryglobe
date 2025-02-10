"use client";
import { useState } from "react";
import { TextField, Button, Box, Paper, Container, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const theme = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 4,
            backgroundColor: theme.palette.background.paper,
            border: `1px solid ${theme.palette.divider}`,
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: theme.shadows[8]
            }
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              mb: 4,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700
            }}
          >
            Get in Touch
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3
            }}
          >
            <motion.div variants={itemVariants}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                endIcon={<SendIcon />}
                sx={{
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  boxShadow: theme.shadows[4],
                  '&:hover': {
                    boxShadow: theme.shadows[8]
                  }
                }}
              >
                Send Message
              </Button>
            </motion.div>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default Contact;
