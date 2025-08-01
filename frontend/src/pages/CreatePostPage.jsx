import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postService from '../services/postService';

// MUI Imports
import { Container, Box, TextField, Button, Typography, Alert, IconButton, Tooltip } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import GifBoxIcon from '@mui/icons-material/GifBox';
import PollIcon from '@mui/icons-material/Poll';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const CreatePostPage = () => {
  const [formData, setFormData] = useState({
    content: '',
    image: null,
    video: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files && files[0]) {
      setFormData(prevState => ({ ...prevState, image: files[0] }));
      setImagePreview(URL.createObjectURL(files[0]));
    } else if (name === 'video' && files && files[0]) {
      setFormData(prevState => ({ ...prevState, video: files[0] }));
      setVideoPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const data = new FormData();
    data.append('content', formData.content);
    if (formData.image) data.append('image', formData.image);
    if (formData.video) data.append('video', formData.video);

    try {
      await postService.createPost(data);
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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3, width: '100%' }} encType="multipart/form-data">
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
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, mb: 2 }}>
            <Tooltip title="Add image">
              <IconButton component="label">
                <ImageIcon color={formData.image ? 'primary' : 'action'} />
                <input type="file" accept="image/*" hidden name="image" onChange={handleChange} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add GIF">
              <IconButton onClick={() => alert('GIF picker coming soon!')}>
                <GifBoxIcon color="action" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Create poll">
              <IconButton onClick={() => alert('Poll creation coming soon!')}>
                <PollIcon color="action" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add emoji">
              <IconButton onClick={() => alert('Emoji picker coming soon!')}>
                <EmojiEmotionsIcon color="action" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add location">
              <IconButton onClick={() => alert('Location feature coming soon!')}>
                <LocationOnIcon color="action" />
              </IconButton>
            </Tooltip>
          </Box>
          {/* Removed separate upload image/video buttons, handled by icons above */}
          {imagePreview && (
            <Box sx={{ mt: 2 }}>
              <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', borderRadius: 8 }} />
            </Box>
          )}
          {videoPreview && (
            <Box sx={{ mt: 2 }}>
              <video src={videoPreview} controls style={{ maxWidth: '100%', borderRadius: 8 }} />
            </Box>
          )}
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