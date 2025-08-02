import React, { useState, useContext } from 'react';
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
  Card,
  CardContent,
  Toolbar,
} from '@mui/material';
import {
  Email,
  Phone,
  VideoCall,
  CalendarToday,
  ExpandLess,
  ExpandMore,
  CheckCircleOutline,
  Timeline,
  BarChart,
  People,
  PersonAdd,
  PostAdd,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { UserContext } from '../contexts/UserContext';

const projects = [
  {
    title: 'Web Designing',
    date: 'March 06, 2024',
    stage: 'Prototyping',
    daysLeft: 2,
    color: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    icon: <CheckCircleOutline />,
  },
  {
    title: 'Mobile App',
    date: 'March 08, 2024',
    stage: 'Design',
    daysLeft: 5,
    color: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
    icon: <Timeline />,
  },
  {
    title: 'Dashboard',
    date: 'March 12, 2024',
    stage: 'Wireframe',
    daysLeft: 8,
    color: 'linear-gradient(135deg, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)',
    icon: <BarChart />,
  },
];

const quickStats = [
  { title: 'Followers', value: '1.2k', icon: <People /> },
  { title: 'Following', value: '250', icon: <PersonAdd /> },
  { title: 'Posts', value: '50', icon: <PostAdd /> },
];

const techStack = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python'];

const todoList = [
  { task: 'Review pull request', done: false },
  { task: 'Prepare slides for presentation', done: true },
  { task: 'Fix bug in the login page', done: false },
];

const dummyMessages = [
  {
    sender: 'Alex',
    message: 'Any update on the design?',
    avatar: 'https://avatar.iran.liara.run/public/boy?username=Alex',
  },
  {
    sender: 'Priya',
    message: "I've submitted the wireframes.",
    avatar: 'https://avatar.iran.liara.run/public/girl?username=Priya',
  },
  {
    sender: 'David',
    message: "Let's meet tomorrow.",
    avatar: 'https://avatar.iran.liara.run/public/boy?username=David',
  },
];

const UserDashboard = () => {
  const { user } = useContext(UserContext);
  const [showInfo, setShowInfo] = useState(true);
  const [showInbox, setShowInbox] = useState(true);

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3, md: 4 },
          bgcolor: '#f0f2f5',
          minHeight: '100vh',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <Toolbar />
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12} md={4} lg={3}>
            <Paper elevation={5} sx={{ p: { xs: 2, md: 3 }, borderRadius: 4, mb: 4, bgcolor: '#ffffff' }}>
              <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                <Avatar
                  src={
                    user?.profilePic ||
                    (user?.gender === 'girl'
                      ? `https://avatar.iran.liara.run/public/girl?username=${user.username}`
                      : `https://avatar.iran.liara.run/public/boy?username=${user.username}`)
                  }
                  sx={{ width: 80, height: 80, boxShadow: '0 4px 12px rgba(0,0,0,0.15)', border: '3px solid #6ee7b7' }}
                />
                <Box textAlign="center">
                  <Typography variant="h5" sx={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700 }}>
                    {user?.username || 'User'}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user?.email || 'email@example.com'}
                  </Typography>
                </Box>
              </Box>
              <Box mt={3} display="flex" justifyContent="space-around">
                <Tooltip title="Email">
                  <IconButton sx={{ color: '#38bdf8' }}><Email /></IconButton>
                </Tooltip>
                <Tooltip title="Phone">
                  <IconButton sx={{ color: '#38bdf8' }}><Phone /></IconButton>
                </Tooltip>
                <Tooltip title="Video Call">
                  <IconButton sx={{ color: '#38bdf8' }}><VideoCall /></IconButton>
                </Tooltip>
                <Tooltip title="Calendar">
                  <IconButton sx={{ color: '#38bdf8' }}><CalendarToday /></IconButton>
                </Tooltip>
              </Box>
              <Box mt={3} p={2} bgcolor="#eef2f7" borderRadius={2} textAlign="center">
                <Typography variant="overline" color="text.secondary">Time Slot</Typography>
                <Typography fontWeight="bold" variant="body1">
                  {user?.slot || 'April, 2024'}
                </Typography>
              </Box>
            </Paper>

            <Paper elevation={5} sx={{ p: 3, borderRadius: 4, bgcolor: '#ffffff' }}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6" sx={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700 }}>Detailed Info</Typography>
                <IconButton onClick={() => setShowInfo(!showInfo)}>
                  {showInfo ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </Box>
              <Collapse in={showInfo}>
                <Divider sx={{ my: 2 }} />
                <List dense>
                  <ListItem>
                    <ListItemText primary="Full Name" secondary={user?.name || 'N/A'} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Email" secondary={user?.email || 'N/A'} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Phone" secondary={user?.phone || 'N/A'} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Designation" secondary={user?.role || 'N/A'} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Availability" secondary="Schedule the time slot" />
                  </ListItem>
                </List>
              </Collapse>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8} lg={9}>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 900, fontFamily: 'Cormorant Garamond, serif' }}>
              Welcome back, {user?.username || 'User'}!
            </Typography>
            <Grid container spacing={4}>
              {projects.map((proj, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    elevation={5}
                    sx={{
                      borderRadius: 4,
                      color: '#fff',
                      background: proj.color,
                      height: '100%',
                    }}
                  >
                    <CardContent>
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="caption">{proj.date}</Typography>
                        {proj.icon}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, my: 1 }}>{proj.title}</Typography>
                      <Typography variant="body2" sx={{ mb: 2 }}>{proj.stage}</Typography>
                      <Chip
                        label={`${proj.daysLeft} Days Left`}
                        size="small"
                        sx={{ bgcolor: 'rgba(255, 255, 255, 0.3)', color: '#fff', fontWeight: 'bold' }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Grid container spacing={4} sx={{ mt: 2 }}>
              <Grid item xs={12} lg={4}>
                <Paper elevation={5} sx={{ p: 3, borderRadius: 4, bgcolor: '#ffffff' }}>
                  <Typography variant="h6" sx={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, mb: 2 }}>Quick Stats</Typography>
                  <Box display="flex" justifyContent="space-around">
                    {quickStats.map(stat => (
                      <Box key={stat.title} textAlign="center">
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>{stat.value}</Typography>
                        <Typography variant="body2" color="text.secondary">{stat.title}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Paper elevation={5} sx={{ p: 3, borderRadius: 4, bgcolor: '#ffffff' }}>
                  <Typography variant="h6" sx={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, mb: 2 }}>My Tech Stack</Typography>
                  <Box display="flex" flexWrap="wrap" gap={1}>
                    {techStack.map(skill => (
                      <Chip key={skill} label={skill} sx={{ bgcolor: '#eef2f7', fontWeight: 'bold' }} />
                    ))}
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Paper elevation={5} sx={{ p: 3, borderRadius: 4, bgcolor: '#ffffff' }}>
                  <Typography variant="h6" sx={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, mb: 2 }}>To-Do List</Typography>
                  <List dense>
                    {todoList.map(item => (
                      <ListItem key={item.task} dense>
                        <ListItemText primary={item.task} sx={{ textDecoration: item.done ? 'line-through' : 'none' }} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
            </Grid>

            <Grid container spacing={4} sx={{ mt: 2 }}>
              <Grid item xs={12} lg={7}>
                <Paper elevation={5} sx={{ p: 3, borderRadius: 4, bgcolor: '#ffffff' }}>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" sx={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700 }}>Notifications</Typography>
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
                          gap={2}
                          alignItems="center"
                          p={2}
                          bgcolor={i === 1 ? '#111' : '#f0f2f5'}
                          color={i === 1 ? '#fff' : '#000'}
                          borderRadius={2}
                        >
                          <Avatar src={msg.avatar} sx={{ width: 40, height: 40 }} />
                          <Box>
                            <Typography fontWeight="bold" sx={{ fontSize: '0.95rem' }}>{msg.sender}</Typography>
                            <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>{msg.message}</Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Collapse>
                </Paper>
              </Grid>
              <Grid item xs={12} lg={5}>
                <Paper elevation={5} sx={{ p: 3, borderRadius: 4, bgcolor: '#ffffff' }}>
                  <Typography variant="h6" sx={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, mb: 2 }}>
                    Calendar - March
                  </Typography>
                  <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" gap={1} textAlign="center">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                      <Typography key={day} variant="caption" color="text.secondary">{day}</Typography>
                    ))}
                    {Array.from({ length: 31 }, (_, i) => {
                      const isMarked = [5, 8, 12, 21].includes(i + 1);
                      return (
                        <Box
                          key={i}
                          p={1}
                          borderRadius="50%"
                          bgcolor={isMarked ? '#38bdf8' : 'transparent'}
                          color={isMarked ? '#fff' : '#000'}
                          sx={{
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              bgcolor: isMarked ? '#38bdf8' : '#e0e0e0',
                              transform: 'scale(1.1)'
                            }
                          }}
                        >
                          {i + 1}
                        </Box>
                      );
                    })}
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UserDashboard;
