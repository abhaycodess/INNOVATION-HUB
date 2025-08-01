import { useState, useEffect } from 'react';
import postService from '../services/postService';
import PostCard from '../components/PostCard';

// MUI Imports
import { Container, Typography, Box, CircularProgress, Alert } from '@mui/material';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
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
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Your Feed
      </Typography>

      {loading && ( <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}><CircularProgress /></Box> )}
      {error && ( <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert> )}

      {!loading && !error && (
        <Box>
          {posts.length > 0 ? (
              posts.map(post => (
                <PostCard post={post} key={post.id} />
              ))
          ) : (
            <Typography align="center">No posts found. Be the first to create one!</Typography>
          )}
        </Box>
      )}
    </Container>
  );
};

export default HomePage;