"use client";
import Link from "next/link";
import { Container, Grid, Typography, Box, IconButton, useTheme, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const theme = useTheme();

  const socialLinks = [
    { icon: <FacebookIcon />, href: "#" },
    { icon: <TwitterIcon />, href: "#" },
    { icon: <LinkedInIcon />, href: "#" }
  ];

  const footerLinks = [
    {
      title: "Company",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Contact", href: "/contact" },
        { text: "Blog", href: "/blog" }
      ]
    },
    {
      title: "Services",
      links: [
        { text: "Products", href: "/services" },
        { text: "Solutions", href: "/services" },
        { text: "Support", href: "/contact" }
      ]
    }
  ];

  return (
    <Paper
      component="footer"
      elevation={0}
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                  bAInaryglobe
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Innovating the future through AI and technology solutions.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconButton
                      href={social.href}
                      sx={{
                        color: theme.palette.text.secondary,
                        '&:hover': {
                          color: theme.palette.primary.main,
                          backgroundColor: theme.palette.action.hover,
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {footerLinks.map((column, columnIndex) => (
            <Grid item xs={6} md={4} key={columnIndex}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  {column.title}
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                  {column.links.map((link, linkIndex) => (
                    <Box component="li" key={linkIndex} sx={{ mb: 1 }}>
                      <Link href={link.href} passHref>
                        <Typography
                          component="span"
                          sx={{
                            color: theme.palette.text.secondary,
                            textDecoration: 'none',
                            transition: 'color 0.2s ease-in-out',
                            cursor: 'pointer',
                            '&:hover': {
                              color: theme.palette.primary.main,
                            },
                          }}
                        >
                          {link.text}
                        </Typography>
                      </Link>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            borderTop: `1px solid ${theme.palette.divider}`,
            mt: 6,
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} bAInaryglobe. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;
