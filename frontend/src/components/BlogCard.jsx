import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Box, Typography, Avatar, Chip, Card, CardContent, CardMedia } from '@mui/material';

const BlogCard = ({ post }) => {
  const { title, description, imageUrl, author, authorAvatar, date, tags } = post;

  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)' }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{ textDecoration: 'none', height: '100%' }}
    >
      <Card sx={{
        borderRadius: 4,
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#f8fafc',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
      }}>
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt={title}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ mb: 2 }}>
            {tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  mr: 1,
                  mb: 1,
                  bgcolor: '#e0e7ff',
                  color: '#4f46e5',
                  fontWeight: 600,
                  fontFamily: 'Inter, sans-serif',
                }}
              />
            ))}
          </Box>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 800,
              fontFamily: 'Cormorant Garamond, serif',
              mb: 1.5,
              flexGrow: 1,
              color: '#111'
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#555',
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1.6,
              mb: 3
            }}
          >
            {description}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
            <Avatar src={authorAvatar} alt={author} sx={{ width: 40, height: 40, mr: 1.5 }} />
            <Box>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 700, fontFamily: 'Inter, sans-serif', color: '#333' }}
              >
                {author}
              </Typography>
              <Typography variant="caption" sx={{ color: '#777', fontFamily: 'Inter, sans-serif' }}>
                {date}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BlogCard;
