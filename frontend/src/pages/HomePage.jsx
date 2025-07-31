import { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import postService from '../services/postService'; // Use the new postService
import { Fade } from "react-awesome-reveal";

// MUI Imports
import { Container, Typography, Card, CardContent, CardHeader, CardActions, Avatar, IconButton, Box, CircularProgress, Alert } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ShareIcon from '@mui/icons-material/Share';

const HomePage = () => {
  const [posts, setPosts] = useState([]); // Renamed from ideas
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Use the new service function
        const response = await postService.getAllPosts();
        setPosts(response.data);
      } catch (err) {
        setError('Failed to fetch posts. Is your backend server running?');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <HeroSection />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Latest Posts
        </Typography>

        {loading && ( <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}><CircularProgress /></Box> )}
        {error && ( <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert> )}

        {!loading && !error && (
          <Box sx={{ mt: 4 }}>
            {posts.length > 0 ? (
                posts.map(post => (
                  <Fade bottom key={post.id} triggerOnce>
                    <Card sx={{ mb: 3 }}>
                      <CardHeader
                        avatar={
                          <Avatar sx={{ bgcolor: 'primary.main' }} aria-label="user-avatar">
                            {post.author ? post.author.username.charAt(0).toUpperCase() : '?'}
                          </Avatar>
                        }
                        action={ <IconButton aria-label="share"><ShareIcon /></IconButton> }
                        title={post.author ? post.author.username : 'Anonymous'}
                        subheader={new Date(post.createdAt).toLocaleString()}
                      />
                      <CardContent>
                        {/* Display post content and image if it exists */}
                        <Typography variant="body1" color="text.secondary">
                          {post.content}
                        </Typography>
                        {post.imageUrl && (
                          <Box sx={{ mt: 2, borderRadius: 2, overflow: 'hidden' }}>
                            <img src={post.imageUrl} alt="Post content" style={{ maxWidth: '100%', display: 'block' }} />
                          </Box>
                        )}
                      </CardContent>
                      <CardActions disableSpacing>
                        <IconButton aria-label="like">
                          <ThumbUpOutlinedIcon />
                        </IconButton>
                        <Typography variant="body2" color="text.secondary">{post.likes.length}</Typography>
                      </CardActions>
                    </Card>
                  </Fade>
                ))
            ) : (
              <Typography align="center">No posts found. Be the first to create one!</Typography>
            )}
          </Box>
        )}
      </Container>
    </>
  );
};

export default HomePage;