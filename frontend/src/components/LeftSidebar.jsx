import React, { useState } from 'react';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { name: 'Home', outlined: <HomeOutlinedIcon />, filled: <HomeIcon />, path: '/user-home' },
    { name: 'Profile', outlined: <PersonOutlineOutlinedIcon />, filled: <PersonIcon />, path: '/dashboard' },
    { name: 'Chat', outlined: <ChatBubbleOutlineOutlinedIcon />, filled: <ChatBubbleIcon />, path: '/chat' },
    { name: 'Settings', outlined: <SettingsOutlinedIcon />, filled: <SettingsIcon />, path: '/settings' },
  ];

  return (
    <Box
      component="nav"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100vh',
        width: isExpanded ? '220px' : '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: 'rgba(255, 255, 255, 0.7)',
        boxShadow: '2px 0 15px rgba(0,0,0,0.1)',
        zIndex: 1100,
        pt: '120px',
        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        backdropFilter: 'blur(12px)',
        borderRight: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'flex-start', width: '100%', px: 2.5 }}>
        {navItems.map((item) => (
          <Tooltip title={isExpanded ? '' : item.name} placement="right" key={item.name}>
            <Box
              onClick={() => navigate(item.path)}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                p: 1.5,
                borderRadius: '12px',
                width: '100%',
                transition: 'background-color 0.3s, transform 0.3s',
                backgroundColor: hoveredItem === item.name ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                transform: hoveredItem === item.name ? 'scale(1.03)' : 'scale(1)',
              }}
            >
              <IconButton
                sx={{
                  color: hoveredItem === item.name ? '#0284c7' : '#334155',
                  transform: hoveredItem === item.name ? 'scale(1.1)' : 'scale(1)',
                  transition: 'color 0.3s, transform 0.3s',
                }}
                aria-label={`Navigate to ${item.name}`}
              >
                {hoveredItem === item.name ? item.filled : item.outlined}
              </IconButton>
              {isExpanded && (
                <Typography sx={{ ml: 2, color: '#334155', fontWeight: 600, whiteSpace: 'nowrap', opacity: isExpanded ? 1 : 0, transition: 'opacity 0.3s' }}>
                  {item.name}
                </Typography>
              )}
            </Box>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
};

export default LeftSidebar;
