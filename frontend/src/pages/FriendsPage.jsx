import { useEffect, useState } from 'react';
import { Container, Box, Typography, Button, Avatar, Grid, CircularProgress } from '@mui/material';
import axios from 'axios';
import authService from '../services/authService';

const API_URL = 'http://localhost:8080/api/dummy-users';

const FriendsPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [connecting, setConnecting] = useState({});
  const currentUser = authService.getCurrentUser();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(API_URL);
        setUsers(res.data.filter(u => u.username !== currentUser?.username));
      } catch {
        setError('Failed to load users.');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [currentUser]);

  const handleConnect = async (userId) => {
    setConnecting(prev => ({ ...prev, [userId]: true }));
    // TODO: Call friend request endpoint here
    setTimeout(() => {
      setConnecting(prev => ({ ...prev, [userId]: false }));
      // Optionally update UI to show connected
    }, 1000);
  };

  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}><CircularProgress /></Box>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Connect with People</Typography>
      <Grid container spacing={3}>
        {users.map(user => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Box sx={{ p: 3, border: '1px solid #eee', borderRadius: 3, textAlign: 'center', background: '#fafbfc' }}>
              <Avatar sx={{ width: 56, height: 56, mx: 'auto', mb: 1 }}>{user.username.charAt(0).toUpperCase()}</Avatar>
              <Typography variant="h6">{user.username}</Typography>
              <Typography variant="body2" color="text.secondary">{user.email}</Typography>
              <Button
                variant="contained"
                sx={{ mt: 2 }}
                disabled={connecting[user.id]}
                onClick={() => handleConnect(user.id)}
              >
                {connecting[user.id] ? 'Connecting...' : 'Connect'}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FriendsPage;
