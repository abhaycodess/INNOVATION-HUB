
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import { Box, Button, TextField, Typography, Link, Alert } from '@mui/material';
import { useEffect } from 'react';
  // Ensure body and html take full height and have no margin
const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflowX = 'hidden';
    return () => {
      document.documentElement.style.height = '';
      document.body.style.height = '';
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.overflowX = '';
    };
  }, []);

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
    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    try {
      await authService.register(
        formData.username,
        formData.email,
        formData.password
      );
      navigate('/login');
    } catch (error) {
      const resMessage =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      setMessage(resMessage);
    }
  };
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              value={formData.confirmPassword}
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

  return (
    <Box
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
        width: '100vw',
        height: '100vh',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url('/login-bg.svg')`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflowX: 'hidden',
        overflowY: 'auto',
        zIndex: 0,
        pt: { xs: 8, md: 10 }, // padding top for fixed navbar
        m: 0,
        p: 0,
        border: 0,
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
        {/* Left: Large Vector Image Placeholder */}
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
            src="/register-vector.svg"
            alt="Register Illustration"
            style={{
              width: '100%',
              maxWidth: 520,
              minHeight: 380,
              height: '100%',
              objectFit: 'cover',
              opacity: 0.97,
              display: 'block',
            }}
          />
        </Box>
        {/* Right: Register Form (blended, no box) */}
        <Box
          sx={{
            flex: 1,
            maxWidth: 360,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 5,
            p: { xs: 0, md: 0 },
            bgcolor: 'transparent',
            boxShadow: 'none',
            gap: 1.5,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 900, mb: 1.2, color: '#111', textAlign: 'center', letterSpacing: -1, fontFamily: 'inherit', fontSize: 28 }}>
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.2 }}>
            <TextField
              margin="dense"
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
                  py: 1,
                  border: 'none',
                  boxShadow: 'none',
                  color: '#111',
                  fontSize: 17,
                  borderBottom: '2px solid #111',
                }
              }}
              InputLabelProps={{
                sx: {
                  fontWeight: 700,
                  color: '#111',
                  fontSize: 17,
                  left: 0,
                }
              }}
              sx={{
                mb: 1,
                bgcolor: 'transparent',
                borderRadius: 0,
                boxShadow: 'none',
                border: 'none',
                '& .MuiInputBase-input': {
                  fontWeight: 700,
                  color: '#111',
                  fontSize: 17,
                },
                '& .MuiInputLabel-root': {
                  fontWeight: 700,
                  color: '#111',
                  fontSize: 17,
                },
              }}
            />
            <TextField
              margin="dense"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              variant="standard"
              InputProps={{
                disableUnderline: false,
                sx: {
                  bgcolor: 'transparent',
                  borderRadius: 0,
                  fontWeight: 700,
                  px: 0,
                  py: 1,
                  border: 'none',
                  boxShadow: 'none',
                  color: '#111',
                  fontSize: 17,
                  borderBottom: '2px solid #111',
                }
              }}
              InputLabelProps={{
                sx: {
                  fontWeight: 700,
                  color: '#111',
                  fontSize: 17,
                  left: 0,
                }
              }}
              sx={{
                mb: 1,
                bgcolor: 'transparent',
                borderRadius: 0,
                boxShadow: 'none',
                border: 'none',
                '& .MuiInputBase-input': {
                  fontWeight: 700,
                  color: '#111',
                  fontSize: 17,
                },
                '& .MuiInputLabel-root': {
                  fontWeight: 700,
                  color: '#111',
                  fontSize: 17,
                },
              }}
            />
            <TextField
              margin="dense"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
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
                  py: 1,
                  border: 'none',
                  boxShadow: 'none',
                  color: '#111',
                  fontSize: 17,
                  borderBottom: '2px solid #111',
                }
              }}
              InputLabelProps={{
                sx: {
                  fontWeight: 700,
                  color: '#111',
                  fontSize: 17,
                  left: 0,
                }
              }}
              sx={{
                mb: 1,
                bgcolor: 'transparent',
                borderRadius: 0,
                boxShadow: 'none',
                border: 'none',
                '& .MuiInputBase-input': {
                  fontWeight: 700,
                  color: '#111',
                  fontSize: 17,
                },
                '& .MuiInputLabel-root': {
                  fontWeight: 700,
                  color: '#111',
                  fontSize: 17,
                },
              }}
            />
            <TextField
              margin="dense"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              value={formData.confirmPassword}
              onChange={handleChange}
              variant="standard"
              InputProps={{
                disableUnderline: false,
                sx: {
                  bgcolor: 'transparent',
                  borderRadius: 0,
                  fontWeight: 700,
                  px: 0,
                  py: 1,
                  border: 'none',
                  boxShadow: 'none',
                  color: '#111',
                  fontSize: 17,
                  borderBottom: '2px solid #111',
                }
              }}
              InputLabelProps={{
                sx: {
                  fontWeight: 700,
                  color: '#111',
                  fontSize: 17,
                  left: 0,
                }
              }}
              sx={{
                mb: 1,
                bgcolor: 'transparent',
                borderRadius: 0,
                boxShadow: 'none',
                border: 'none',
                '& .MuiInputBase-input': {
                  fontWeight: 700,
                  color: '#111',
                  fontSize: 17,
                },
                '& .MuiInputLabel-root': {
                  fontWeight: 700,
                  color: '#111',
                  fontSize: 17,
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
                py: 1.1,
                fontSize: 20,
                boxShadow: 'none',
                mb: 1,
                textTransform: 'none',
                '&:hover': { bgcolor: '#34d399' },
              }}
            >
              Sign Up
            </Button>
            <Box sx={{ width: '100%', textAlign: 'center', mt: 2 }}>
              <Typography variant="body2" sx={{ color: '#111', fontWeight: 500 }}>
                Already have an account?{' '}
                <Link href="/login" underline="hover" sx={{ color: '#38bdf8', fontWeight: 700 }}>
                  Log In
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

export default RegisterPage;