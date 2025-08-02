import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Grid,
  Paper,
  Typography,
  IconButton,
  Tooltip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Chip,
  Collapse,
} from '@mui/material';
import {
  Email,
  Phone,
  VideoCall,
  CalendarToday,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';
import authService, { getCurrentUser } from '../services/authService';

const projects = [
  {
    title: 'Web Designing',
    date: 'March 06, 2024',
    stage: 'Prototyping',
    daysLeft: 2,
    color: '#FFF7D1',
  },
  {
    title: 'Mobile App',
    date: 'March 08, 2024',
    stage: 'Design',
    daysLeft: 5,
    color: '#E6F3FF',
  },
  {
    title: 'Dashboard',
    date: 'March 12, 2024',
    stage: 'Wireframe',
    daysLeft: 8,
    color: '#FFE6E6',
  },
];

const dummyMessages = [
  {
    sender: 'Alex',
    message: 'Any update on the design?',
    avatar: `https://avatar.iran.liara.run/public/boy?username=Alex`,
  },
  {
    sender: 'Priya',
    message: "I've submitted the wireframes.",
    avatar: `https://avatar.iran.liara.run/public/girl?username=Priya`,
  },
  {
    sender: 'David',
    message: "Let's meet tomorrow.",
    avatar: `https://avatar.iran.liara.run/public/boy?username=David`,
  },
];

const UserDashboard = () => {
  const [user, setUser] = useState(() => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  });
  const [showInfo, setShowInfo] = useState(true);
  const [showInbox, setShowInbox] = useState(true);

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      setUser(JSON.parse(userStr));
    }
  }, []);

  return (
    <Box
      sx={{
        p: 3,
        pt: { xs: 8, sm: 10 },
        bgcolor: '#f9f9f9',
        minHeight: '100vh',
        fontFamily: 'Inter, sans-serif',
        marginLeft: '24px',
        marginRight: '24px',
      }}
    >
      <Grid container spacing={10}>
        {/* Left Panel */}
        <Grid item xs={12} md={3}>
          {/* Profile Card */}
          <Paper elevation={3} sx={{ p: 4, borderRadius: 4, mb: 4 }}>
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar
                src={(() => {
                  if (user?.profilePic) return user.profilePic;
                  if (user?.gender && user?.username) {
                    return user.gender === 'girl'
                      ? `https://avatar.iran.liara.run/public/girl?username=${user.username}`
                      : `https://avatar.iran.liara.run/public/boy?username=${user.username}`;
                  }
                  return undefined;
                })()}
                sx={{ width: 64, height: 64, boxShadow: '0 2px 8px rgba(0,0,0,0.10)', border: '2px solid #b8d8be' }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}
                >
                  {user?.username || 'User'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user?.email || ''}
                </Typography>
              </Box>
            </Box>
            <Box mt={2} display="flex" justifyContent="space-around">
              <Tooltip title="Email">
                <IconButton>
                  <Email />
                </IconButton>
              </Tooltip>
              <Tooltip title="Phone">
                <IconButton>
                  <Phone />
                </IconButton>
              </Tooltip>
              <Tooltip title="Video Call">
                <IconButton>
                  <VideoCall />
                </IconButton>
              </Tooltip>
              <Tooltip title="Calendar">
                <IconButton>
                  <CalendarToday />
                </IconButton>
              </Tooltip>
            </Box>
            <Box
              mt={2}
              p={1}
              bgcolor="#f1f1f1"
              borderRadius={2}
              textAlign="center"
            >
              <Typography variant="body2">Time Slot</Typography>
              <Typography fontWeight="bold">
                {user?.slot || 'April, 2024'}
              </Typography>
            </Box>
          </Paper>

          {/* Detailed Info - Collapsible */}
          <Paper elevation={3} sx={{ p: 3, borderRadius: 4 }}>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle1">Detailed Info</Typography>
              <IconButton onClick={() => setShowInfo(!showInfo)}>
                {showInfo ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Box>
            <Collapse in={showInfo}>
              <Divider sx={{ mb: 1 }} />
              <List dense>
                <ListItem>
                  <ListItemText primary="Full Name" secondary={user?.name} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Email" secondary={user?.email} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Phone" secondary={user?.phone} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Designation" secondary={user?.role} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Availability"
                    secondary="Schedule the time slot"
                  />
                </ListItem>
              </List>
            </Collapse>
          </Paper>
        </Grid>

        {/* Right Panel */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={20}>
            {/* Main Content Column */}
            <Grid item xs={12} lg={9}>
              <Grid container spacing={4}>
                {projects.map((proj, index) => (
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={4}
                    key={index}
                  >
                    <Paper
                      sx={{
                        p: 3,
                        bgcolor: proj.color,
                        borderRadius: 4,
                        height: '100%',
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                        },
                      }}
                      elevation={3}
                    >
                      <Typography variant="caption">{proj.date}</Typography>
                      <Typography variant="h6">{proj.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {proj.stage}
                      </Typography>
                      <Chip
                        label={`${proj.daysLeft} Days Left`}
                        size="small"
                        sx={{ mt: 1, bgcolor: '#fff' }}
                      />
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Sidebar Column */}
            <Grid item xs={12} lg={5}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {/* Inbox Card */}
                <Paper sx={{
                  p: 3,
                  borderRadius: 4,
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }} elevation={3}>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="subtitle1">Notifications</Typography>
                    <IconButton onClick={() => setShowInbox(!showInbox)}>
                      {showInbox ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                  </Box>
                  <Collapse in={showInbox}>
                    <Box display="flex" flexDirection="column" gap={2} mt={2}>
                      {dummyMessages.map((msg, i) => (
                        <Box
                          key={i}
                          display="flex"
                          gap={3}
                          alignItems="center"
                          p={2}
                          bgcolor={i === 1 ? '#000' : '#f5f5f5'}
                          color={i === 1 ? '#fff' : '#000'}
                          borderRadius={2}
                        >
                          <Avatar src={msg.avatar} sx={{ width: 40, height: 40, mr: 1 }} />
                          <Box>
                            <Typography fontWeight="bold" sx={{ fontSize: 16 }}>{msg.sender}</Typography>
                            <Typography variant="body2" sx={{ fontSize: 15 }}>{msg.message}</Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Collapse>
                </Paper>

                {/* Calendar Card */}
                <Paper sx={{
                  p: 3,
                  borderRadius: 4,
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }} elevation={3}>
                  <Typography variant="subtitle1" gutterBottom>
                    Calendar - March
                  </Typography>
                  <Box
                    display="grid"
                    gridTemplateColumns="repeat(7, 1fr)"
                    gap={2}
                    textAlign="center"
                  >
                    {Array.from({ length: 31 }, (_, i) => {
                      const isMarked = [5, 8, 12, 21].includes(i + 1);
                      return (
                        <Box
                          key={i}
                          p={1}
                          borderRadius={2}
                          bgcolor={isMarked ? '#000' : '#e0e0e0'}
                          color={isMarked ? '#fff' : '#000'}
                        >
                          {i + 1}
                        </Box>
                      );
                    })}
                  </Box>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDashboard;