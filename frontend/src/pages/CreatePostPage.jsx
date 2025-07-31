import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postService from '../services/postService';

// MUI Imports
import { Container, Box, TextField, Button, Typography, Alert } from '@mui/material';

const CreatePostPage = () => {
  const [formData, setFormData] = useState({
    content: '',
    imageUrl: '',
    linkUrl: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      await postService.createPost(formData);
      navigate('/'); // Redirect to homepage on success
    } catch (error) {
      setMessage('Failed to submit post. Please try again.');
      console.error(error);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Create a New Post
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3, width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="content"
            label="What's on your mind?"
            id="content"
            multiline
            rows={4}
            value={formData.content}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            id="imageUrl"
            label="Image URL (Optional)"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            id="linkUrl"
            label="Link URL (Optional)"
            name="linkUrl"
            value={formData.linkUrl}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Post
          </Button>
          {message && (
            <Alert severity="error" sx={{ width: '100%' }}>
              {message}
            </Alert>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default CreatePostPage;