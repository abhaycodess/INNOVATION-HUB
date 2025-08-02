import React, { useState } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';

const LeftSidebar = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  const navItems = [
    { name: 'Home', outlined: <HomeOutlinedIcon />, filled: <HomeIcon />, path: '/user-home' },
    { name: 'Profile', outlined: <PersonOutlineOutlinedIcon />, filled: <PersonIcon />, path: '/profile' },
    { name: 'Chat', outlined: <ChatBubbleOutlineOutlinedIcon />, filled: <ChatBubbleIcon />, path: 'chat' },
    { name: 'Settings', outlined: <SettingsOutlinedIcon />, filled: <SettingsIcon />, path: '/settings' },
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100vh',
        width: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: '#f1f5f9',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
        zIndex: 1000,
        pt: '100px', // Add padding to account for the stories bar
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {navItems.map((item) => (
          <Tooltip title={item.name} placement="right" key={item.name}>
            <IconButton
              onClick={() => navigate(item.path)}
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
              sx={{
                transform: hovered === item.name ? 'scale(1.2)' : 'scale(1)',
                transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
                color: hovered === item.name ? '#38bdf8' : '#334155',
              }}
              aria-label={`Navigate to ${item.name}`}
            >
              {hovered === item.name ? item.filled : item.outlined}
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
};

export default LeftSidebar;
