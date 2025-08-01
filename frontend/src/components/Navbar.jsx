
import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Link as MuiLink, Avatar, Tooltip, Menu, MenuItem, IconButton } from '@mui/material';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const Navbar = () => {
  const location = useLocation();
  const [elevate, setElevate] = useState(false);
  const [user, setUser] = useState(() => authService.getCurrentUser());
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  // Sync user state with localStorage on login/logout and on mount (reload)
  useEffect(() => {
    const syncUser = () => setUser(authService.getCurrentUser());
    window.addEventListener('storage', syncUser);
    // Also check on mount (reload)
    syncUser();
    return () => window.removeEventListener('storage', syncUser);
  }, []);

  useEffect(() => {
    const handleScroll = () => setElevate(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Blog', to: '/blog' },
    { label: 'Q&A', to: '#' },
  ];

  const profilePic = user?.profilePic;
  const username = user?.username;
  const gender = user?.gender; // Make sure gender is available in user object
  // Profile Pic API
  // https://avatar.iran.liara.run/public/boy?username=
  // https://avatar.iran.liara.run/public/girl?username=
  const boyPic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
  const girlPic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
  const avatarUrl = gender === 'girl' ? girlPic : boyPic;

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    authService.logout();
    setUser(null);
    handleMenuClose();
    navigate('/');
  };

  return (
    <AppBar
      position="fixed"
      elevation={elevate ? 4 : 0}
      sx={{
        backgroundColor: 'rgba(255,255,255,0.45)',
        backdropFilter: 'blur(18px) saturate(180%)',
        WebkitBackdropFilter: 'blur(18px) saturate(180%)',
        borderBottom: '1.5px solid rgba(200,200,200,0.25)',
        boxShadow: elevate ? undefined : 'none',
        transition: 'box-shadow 0.3s ease-in-out, background 0.3s',
        color: '#111',
        zIndex: 1300,
        top: 0,
        left: 0,
        width: '100vw',
        m: 0,
        p: 0,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 8 }, py: { xs: 0, md: 0.5 }, minHeight: 48 }}>
        <Box
          component={RouterLink}
          to="/"
          sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none', cursor: 'pointer' }}
        >
          <img src="/We-code.svg" alt="We-code Logo" style={{ height: 32, width: 32, objectFit: 'contain', marginRight: 6, verticalAlign: 'middle' }} />
          <Typography variant="h6" sx={{ fontWeight: 900, letterSpacing: 1, fontSize: 24, color: '#111', fontFamily: 'inherit', lineHeight: 1, height: 32, display: 'flex', alignItems: 'center' }}>
            We-code
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
          {navLinks.map(link => (
            <MuiLink
              key={link.label}
              component={link.to !== '#' ? RouterLink : 'a'}
              to={link.to !== '#' ? link.to : undefined}
              href={link.to === '#' ? '#' : undefined}
              underline="none"
              sx={{
                color: location.pathname === link.to ? '#059669' : '#222',
                borderBottom: location.pathname === link.to ? '2px solid #059669' : '2px solid transparent',
                pb: 0.5,
                fontWeight: 600,
                fontSize: 16,
                transition: 'color 0.2s',
                '&:hover': { color: '#059669' },
              }}
            >
              {link.label}
            </MuiLink>
          ))}
          {/* Show Log In/Register if not logged in */}
          {!user && (
            <>
              <MuiLink
                component={RouterLink}
                to="/login"
                underline="none"
                sx={{
                  color: '#222',
                  borderBottom: location.pathname === '/login' ? '2px solid #059669' : '2px solid transparent',
                  pb: 0.5,
                  fontWeight: 600,
                  fontSize: 16,
                  transition: 'color 0.2s',
                  '&:hover': { color: '#059669' },
                }}
              >
                Log In
              </MuiLink>
              <MuiLink
                component={RouterLink}
                to="/register"
                underline="none"
                sx={{
                  color: '#222',
                  borderBottom: location.pathname === '/register' ? '2px solid #059669' : '2px solid transparent',
                  pb: 0.5,
                  fontWeight: 600,
                  fontSize: 16,
                  transition: 'color 0.2s',
                  '&:hover': { color: '#059669' },
                }}
              >
                Register
              </MuiLink>
            </>
          )}
          {/* Show avatar with dropdown if logged in */}
          {user && (
            <>
              <Tooltip title={username || 'Profile'}>
                <IconButton onClick={handleAvatarClick} sx={{ ml: 2 }}>
                  <Avatar
                    src={avatarUrl}
                    alt={username || 'Profile'}
                    sx={{ width: 36, height: 36, border: '2px solid #059669', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}
                    imgProps={{ loading: 'lazy' }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <MenuItem component={RouterLink} to="/dashboard" onClick={handleMenuClose}>Visit Dashboard</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;