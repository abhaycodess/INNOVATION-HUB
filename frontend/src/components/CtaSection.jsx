import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default', textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom>
          Ready to bring your idea to life?
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
          Join our community of innovators and start building the future today.
        </Typography>
        <Button variant="contained" color="primary" size="large" component={Link} to="/register">
          Sign Up for Free
        </Button>
      </Container>
    </Box>
  );
};

export default CtaSection;