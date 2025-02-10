"use client";
import { Card, CardContent, CardMedia, Typography, Box, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: any }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 4,
          overflow: 'hidden',
          backgroundColor: theme.palette.background.paper,
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: theme.shadows[8],
          },
        }}
      >
        <Box sx={{ position: 'relative', paddingTop: '60%' }}>
          <CardMedia
            component={Image}
            src={blog.image}
            alt={blog.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>

        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="caption"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: 'white',
                px: 2,
                py: 0.5,
                borderRadius: 1,
                display: 'inline-block',
              }}
            >
              {blog.tags[0]}
            </Typography>
          </Box>

          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: theme.palette.text.primary,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              mb: 2,
            }}
          >
            {blog.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 3,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {blog.paragraph}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  position: 'relative',
                  mr: 1,
                }}
              >
                <Image
                  src={blog.author.image}
                  alt={blog.author.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
              <Box>
                <Typography variant="subtitle2" color="text.primary">
                  {blog.author.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {blog.publishDate}
                </Typography>
              </Box>
            </Box>

            <Link href={`/blog/${blog.id}`} passHref>
              <Button
                variant="text"
                sx={{
                  color: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                Read More
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SingleBlog;
