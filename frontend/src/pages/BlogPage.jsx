import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Box, Typography, Container, Grid, Avatar, Chip, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { dummyPosts } from '../data/dummyPosts';
import BlogCard from '../components/BlogCard';

const Highlight = styled('span')(() => ({
  background: '#6ee7b7',
  color: '#111',
  borderRadius: 6,
  padding: '0 8px',
  fontWeight: 900,
  margin: '0 4px',
  display: 'inline-block',
}));

const BlogPage = () => {
  const featuredPost = dummyPosts[0];
  const latestPosts = dummyPosts.slice(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <Box sx={{ bgcolor: '#fff', minHeight: '100vh', pt: { xs: 12, md: 16 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
          <Typography variant="h2" sx={{ fontWeight: 900, textAlign: 'center', mb: 2, fontFamily: 'Cormorant Garamond, serif', letterSpacing: -1 }}>
            Tech, Teams, and <Highlight>Triumphs</Highlight>
          </Typography>
          <Typography variant="body1" sx={{ color: '#555', maxWidth: 600, mx: 'auto', mb: 8, textAlign: 'center', fontSize: 20, fontFamily: 'Inter, sans-serif' }}>
            Your go-to source for hackathon tips, development guides, and community stories.
          </Typography>
        </motion.div>

        {/* Featured Post */}
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} viewport={{ once: true }}>
          <Box sx={{ mb: 8, textDecoration: 'none' }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Box sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
                    <img src={featuredPost.imageUrl} alt={featuredPost.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </Box>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="overline" sx={{ color: '#4f46e5', fontWeight: 700, mb: 1 }}>Featured Post</Typography>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 800, fontFamily: 'Cormorant Garamond, serif', mb: 2, color: '#111' }}>
                  {featuredPost.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', fontFamily: 'Inter, sans-serif', mb: 3 }}>
                  {featuredPost.description}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Avatar src={featuredPost.authorAvatar} alt={featuredPost.author} sx={{ width: 48, height: 48, mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, fontFamily: 'Inter, sans-serif', color: '#333' }}>{featuredPost.author}</Typography>
                    <Typography variant="body2" sx={{ color: '#777' }}>{featuredPost.date}</Typography>
                  </Box>
                </Box>
                <Button variant="contained" sx={{ bgcolor: '#111', color: '#fff', borderRadius: 999, px: 3, py: 1, fontWeight: 700, '&:hover': { bgcolor: '#222' } }}>
                  Read More
                </Button>
              </Grid>
            </Grid>
          </Box>
        </motion.div>

        {/* Latest Posts */}
        <Box sx={{ py: 6 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} viewport={{ once: true }}>
            <Typography variant="h4" sx={{ fontWeight: 900, mb: 4, fontFamily: 'Cormorant Garamond, serif', textAlign: 'center' }}>
              Latest <Highlight>Insights</Highlight>
            </Typography>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true }}>
            <Grid container spacing={4}>
              {latestPosts.map((post) => (
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                  <motion.div variants={itemVariants}>
                    <BlogCard post={post} />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogPage;
