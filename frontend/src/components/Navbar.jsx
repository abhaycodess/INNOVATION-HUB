
import React, { useEffect, useState, useContext } from 'react';
import { AppBar, Toolbar, Typography, Box, Link as MuiLink, Avatar, Tooltip, Menu, MenuItem, IconButton } from '@mui/material';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import { UserContext } from '../contexts/UserContext';

const Navbar = () => {
  const location = useLocation();
  const [elevate, setElevate] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  // Remove local user sync logic, handled by UserContext

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
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        borderBottom: '1.5px solid #e0e0e0',
        boxShadow: elevate ? '0 8px 32px 0 rgba(56,189,248,0.10)' : '0 2px 8px 0 rgba(56,189,248,0.04)',
        color: '#111',
        zIndex: 1300,
        top: 0,
        left: 0,
        width: '100%',
        m: 0,
        p: 0,
        transition: 'box-shadow 0.4s cubic-bezier(.4,0,.2,1), background 0.4s cubic-bezier(.4,0,.2,1)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 8 }, py: { xs: 0, md: 0.5 }, minHeight: 64, height: 64 }}>
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
          {/* Feed Section button for logged-in users */}
          {user && (
            <MuiLink
              component={RouterLink}
              to="/user-home"
              underline="none"
              sx={{
                color: location.pathname === '/user-home' ? '#059669' : '#222',
                borderBottom: location.pathname === '/user-home' ? '2px solid #059669' : '2px solid transparent',
                pb: 0.5,
                fontWeight: 700,
                fontSize: 16,
                transition: 'color 0.2s',
                '&:hover': { color: '#059669' },
              }}
            >
              Feed Section
            </MuiLink>
          )}
          {/* Chat button for logged-in users */}
          {user && (
            <MuiLink
              component={RouterLink}
              to="/chat"
              underline="none"
              sx={{
                color: location.pathname === '/chat' ? '#38bdf8' : '#222',
                borderBottom: location.pathname === '/chat' ? '2px solid #38bdf8' : '2px solid transparent',
                pb: 0.5,
                fontWeight: 700,
                fontSize: 16,
                transition: 'color 0.2s',
                '&:hover': { color: '#38bdf8' },
              }}
            >
              Chat
            </MuiLink>
          )}
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