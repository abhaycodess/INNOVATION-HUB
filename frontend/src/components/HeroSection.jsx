import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

// Define a keyframe animation for a subtle pulse
const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.2; }
  50% { transform: scale(1.1); opacity: 0.3; }
  100% { transform: scale(1); opacity: 0.2; }
`;

const HeroSection = () => {
  return (
    <Box
      sx={{
        // Use the theme's paper color, which is a very dark grey in our dark theme
        backgroundColor: 'background.paper',
        color: 'text.primary', // Use the theme's primary text color (white)
        pt: 12, // More top padding to account for the transparent navbar
        pb: { xs: 8, md: 12 },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      {/* Abstract background shapes with animation */}
      <Box
        sx={{
          position: 'absolute',
          top: '-50px',
          left: '-50px',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(102, 187, 106, 0.2) 0%, rgba(102, 187, 106, 0) 70%)', // Use theme green
          animation: `${pulse} 8s ease-in-out infinite`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-100px',
          right: '-100px',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(156, 39, 176, 0.2) 0%, rgba(156, 39, 176, 0) 70%)', // Use theme purple
          animation: `${pulse} 10s ease-in-out infinite 2s`,
        }}
      />
      
      <Container maxWidth="md">
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700, fontSize: { xs: '2.5rem', md: '4rem' } }}
        >
          Shape the Future, One Idea at a Time
        </Typography>
        <Typography 
          variant="h5" 
          component="p" 
          color="text.secondary" 
          sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}
        >
          Our platform empowers you to submit, validate, and collaborate on innovative ideas with a global community.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;