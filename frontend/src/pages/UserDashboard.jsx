import React from 'react';
import { Container, Box, Typography, Avatar, Paper, Button } from '@mui/material';
import authService from '../services/authService';

const UserDashboard = () => {
  const user = authService.getCurrentUser();

  if (!user) {
    return (
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h5" fontWeight={700} mb={2}>You are not logged in.</Typography>
          <Button href="/login" variant="contained" color="primary">Log In</Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Paper elevation={4} sx={{ p: { xs: 2, md: 6 }, borderRadius: 4, background: 'rgba(255,255,255,0.85)', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, mb: 4 }}>
          <Avatar src={user.profilePic} alt={user.username} sx={{ width: 96, height: 96, border: '3px solid #059669', boxShadow: '0 2px 12px rgba(0,0,0,0.09)' }} />
          <Box>
            <Typography variant="h4" fontWeight={900} color="#059669" gutterBottom>{user.username}</Typography>
            <Typography variant="subtitle1" color="#222">{user.email}</Typography>
            <Typography variant="body2" color="#666" mt={1}>Welcome to your dashboard! Here you can manage your posts, see your activity, and update your profile (feature coming soon).</Typography>
          </Box>
        </Box>
        {/* Add more dashboard features here as needed */}
        <Box mt={4}>
          <Typography variant="h6" fontWeight={700} color="#059669">Your Activity</Typography>
          <Typography variant="body2" color="#444" mt={1}>Feature coming soon: View your posts, comments, likes, and more.</Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default UserDashboard;
