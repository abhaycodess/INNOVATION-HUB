import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, IconButton, Collapse, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EventIcon from '@mui/icons-material/Event';

const dummyNews = [
  { id: 1, headline: 'Tech Startup Raises $50M for AI Development' },
  { id: 2, headline: 'New Framework Announced for Faster Web Apps' },
  { id: 3, headline: 'The Future of Quantum Computing: A Deep Dive' },
  { id: 4, headline: 'Cybersecurity Threats on the Rise in 2025' },
  { id: 5, headline: 'The Ethics of AI: A Heated Debate' },
  { id: 6, headline: 'New Breakthrough in Battery Technology' },
];

const dummyHackathons = [
  { id: 1, title: 'AI for Good Challenge', description: 'Build AI solutions to solve global challenges.', timeLeft: '4 days left' },
  { id: 2, title: 'Web3 Innovate Summit', description: 'A hackathon for the decentralized future.', timeLeft: '1 week left' },
  { id: 3, title: 'GameDev Masters', description: 'Create the next big hit in gaming.', timeLeft: '2 weeks left' },
  { id: 4, title: 'Data Science Bowl', description: 'Solve real-world problems with data.', timeLeft: '3 weeks left' },
  { id: 5, title: 'IoT World Hackathon', description: 'Innovate with the Internet of Things.', timeLeft: '1 month left' },
];

const RightSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newsExpanded, setNewsExpanded] = useState(true);

  const handleNewsExpand = () => {
    setNewsExpanded(!newsExpanded);
  };

  const cardStyles = {
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  };

  return (
    <Box
      component="aside"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      sx={{
        position: 'fixed',
        right: 0,
        top: 0,
        height: '100vh',
        width: isExpanded ? '250px' : '80px',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'rgba(241, 245, 249, 0.8)',
        boxShadow: '-2px 0 10px rgba(0,0,0,0.1)',
        p: 2,
        gap: 2,
        zIndex: 1000,
        backdropFilter: 'blur(10px)',
        transition: 'width 0.3s ease-in-out',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ opacity: isExpanded ? 1 : 0, transition: 'opacity 0.3s' }}>
        {/* Tech News Card */}
        <Card sx={cardStyles}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={handleNewsExpand}>
              <Typography variant="h6" sx={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '1.5rem' }}>
                Tech News
              </Typography>
              <IconButton
                sx={{
                  transform: newsExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease-in-out',
                }}
              >
                <ExpandMoreIcon />
              </IconButton>
            </Box>
            <Collapse in={newsExpanded} timeout="auto" unmountOnExit>
              <Box sx={{ pt: 2 }}>
                {dummyNews.map((item) => (
                  <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <NewspaperIcon sx={{ mr: 1, color: '#64748b' }} />
                    <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif' }}>
                      {item.headline}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Collapse>
          </CardContent>
        </Card>

        <Divider sx={{ my: 2 }} />

        {/* Hackathons Section */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          <Typography variant="h6" sx={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '1.5rem', mb: 2 }}>
            Live & Upcoming Hackathons
          </Typography>
          <Box
            sx={{
              overflowY: 'auto',
              flex: 1,
              '&::-webkit-scrollbar': {
                width: '0.4em'
              },
              '&::-webkit-scrollbar-track': {
                boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,.1)',
                outline: '1px solid slategrey'
              }
            }}
          >
            {dummyHackathons.map((hackathon, index) => (
              <Card
                component={motion.div}
                key={hackathon.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                sx={{ ...cardStyles, mb: 2 }}
              >
                <CardContent>
                  <Typography variant="subtitle1" sx={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '1.2rem' }}>
                    {hackathon.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif', mb: 1 }}>
                    {hackathon.description}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', color: '#64748b' }}>
                    <EventIcon sx={{ mr: 1 }} />
                    <Typography variant="caption">
                      {hackathon.timeLeft}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RightSidebar;
