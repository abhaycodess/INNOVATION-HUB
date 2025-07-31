import React from 'react';
import { Box, Container, Grid, Typography, Avatar, Paper } from '@mui/material';

const testimonials = [
  {
    name: 'Sarah L.',
    role: 'Product Manager',
    avatar: '/sarah.jpg', // Placeholder, you can replace with actual image URLs
    quote: "This is the platform we've been waiting for. It’s a fantastic way to gauge community interest before committing resources."
  },
  {
    name: 'David C.',
    role: 'Open Source Developer',
    avatar: '/david.jpg',
    quote: "Finding collaborators for my project was always a struggle. Here, I found a designer and a marketer in just a week. Incredible!"
  },
  {
    name: 'Maria G.',
    role: 'UX Designer',
    avatar: '/maria.jpg',
    quote: "The transparency is a game-changer. Knowing that the voting process is verifiable gives me confidence in the platform's integrity."
  }
];

const TestimonialsSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Loved by the Community
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper elevation={0} sx={{ p: 3, backgroundColor: 'background.default', height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>{testimonial.name.charAt(0)}</Avatar>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">{testimonial.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{testimonial.role}</Typography>
                  </Box>
                </Box>
                <Typography variant="body1" color="text.secondary">"{testimonial.quote}"</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection; 