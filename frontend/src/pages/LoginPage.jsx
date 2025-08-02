import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import { UserContext } from '../contexts/UserContext';
import { Box, Button, TextField, Typography, Link, Alert } from '@mui/material';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const data = await authService.login(formData.username, formData.password);
      setUser({
        id: data.id,
        username: data.username,
        email: data.email,
        profilePic: data.profilePic,
        gender: data.gender, // add gender if available
      });
      navigate('/user-home');
    } catch (error) {
      const resMessage =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      setMessage("Login failed: Invalid credentials"); // More specific error
    }
  };
  // Redirect to /user-home if already logged in
  React.useEffect(() => {
    if (authService.getCurrentUser()) {
      navigate('/user-home');
    }
  }, [navigate]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `url('/login-bg.svg') center center/cover no-repeat, linear-gradient(135deg, #38bdf8 0%, #6ee7b7 100%)`,
        overflow: 'hidden',
        zIndex: 0,
        pt: { xs: 8, md: 10 }, // padding top for fixed navbar
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: 1100,
          minHeight: 500,
          p: { xs: 2, md: 4 },
          gap: { xs: 4, md: 0 },
        }}
      >
        {/* Left: Large Vector Image */}
        <Box
          sx={{
            flex: 1.2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            minWidth: 0,
            height: { xs: 250, md: 480 },
            mr: { md: 6 },
            mb: { xs: 3, md: 0 },
          }}
        >
          <img
            src="/login-vector.svg"
            alt="Login Illustration"
            style={{
              width: '100%',
              maxWidth: 440,
              height: '100%',
              objectFit: 'contain',
              opacity: 0.97,
            }}
          />
        </Box>
        {/* Right: Login Form (blended, no box) */}
        <Box
          sx={{
            flex: 1,
            maxWidth: 400,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 5,
            p: { xs: 0, md: 0 },
            bgcolor: 'transparent',
            boxShadow: 'none',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 900, mb: 2, color: '#111', textAlign: 'center', letterSpacing: -1, fontFamily: 'inherit' }}>
            Log In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={formData.username}
              onChange={handleChange}
              variant="standard"
              InputProps={{
                disableUnderline: false,
                sx: {
                  bgcolor: 'transparent',
                  borderRadius: 0,
                  fontWeight: 700,
                  px: 0,
                  py: 1.5,
                  border: 'none',
                  boxShadow: 'none',
                  color: '#111',
                  fontSize: 18,
                  borderBottom: '2px solid #111',
                }
              }}
              InputLabelProps={{
                sx: {
                  fontWeight: 700,
                  color: '#111',
                  fontSize: 18,
                  left: 0,
                }
              }}
              sx={{
                mb: 2,
                bgcolor: 'transparent',
                borderRadius: 0,
                boxShadow: 'none',
                border: 'none',
                '& .MuiInputBase-input': {
                  fontWeight: 700,
                  color: '#111',
                  fontSize: 18,
                },
                '& .MuiInputLabel-root': {
                  fontWeight: 700,
                  color: '#111',
                  fontSize: 18,
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              variant="standard"
              InputProps={{
                disableUnderline: false,
                sx: {
                  bgcolor: 'transparent',
                  borderRadius: 0,
                  fontWeight: 700,
                  px: 0,
                  py: 1.5,
                  border: 'none',
                  boxShadow: 'none',
                  color: '#111',
                  fontSize: 18,
                  borderBottom: '2px solid #111',
                }
              }}
              InputLabelProps={{
                sx: {
                  fontWeight: 700,
                  color: '#111',
                  fontSize: 18,
                  left: 0,
                }
              }}
              sx={{
                mb: 2,
                bgcolor: 'transparent',
                borderRadius: 0,
                boxShadow: 'none',
                border: 'none',
                '& .MuiInputBase-input': {
                  fontWeight: 700,
                  color: '#111',
                  fontSize: 18,
                },
                '& .MuiInputLabel-root': {
                  fontWeight: 700,
                  color: '#111',
                  fontSize: 18,
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                bgcolor: '#6ee7b7',
                color: '#111',
                fontWeight: 900,
                borderRadius: 2,
                py: 1.5,
                fontSize: 22,
                boxShadow: 'none',
                mb: 1,
                textTransform: 'none',
                '&:hover': { bgcolor: '#34d399' },
              }}
            >
              Log In
            </Button>
            <Box sx={{ width: '100%', textAlign: 'center', mt: 2 }}>
              <Typography variant="body2" sx={{ color: '#111', fontWeight: 500 }}>
                Not have an account?{' '}
                <Link href="/register" underline="hover" sx={{ color: '#38bdf8', fontWeight: 700 }}>
                  Register
                </Link>
              </Typography>
            </Box>
            {message && (
              <Alert severity="error" sx={{ width: '100%' }}>{message}</Alert>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;