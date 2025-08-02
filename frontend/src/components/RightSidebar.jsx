import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, IconButton, Collapse, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const dummyNews = [
  { id: 1, headline: 'Tech Startup Raises $50M for AI Development' },
  { id: 2, headline: 'New Framework Announced for Faster Web Apps' },
  { id: 3, headline: 'The Future of Quantum Computing: A Deep Dive' },
  { id: 4, headline: 'Cybersecurity Threats on the Rise in 2025' },
];

const dummyHackathons = [
  { id: 1, title: 'AI for Good Challenge', description: 'Build AI solutions to solve global challenges.', timeLeft: '4 days left' },
  { id: 2, title: 'Web3 Innovate Summit', description: 'A hackathon for the decentralized future.', timeLeft: '1 week left' },
  { id: 3, title: 'GameDev Masters', description: 'Create the next big hit in gaming.', timeLeft: '2 weeks left' },
];

const RightSidebar = () => {
  const [newsExpanded, setNewsExpanded] = useState(true);

  const handleNewsExpand = () => {
    setNewsExpanded(!newsExpanded);
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        right: 0,
        top: 0,
        height: '100vh',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#f1f5f9',
        boxShadow: '-2px 0 5px rgba(0,0,0,0.1)',
        p: 2,
        gap: 2,
        zIndex: 1000,
      }}
    >
      {/* Tech News Card */}
      <Card sx={{ borderRadius: 4, boxShadow: 'none', bgcolor: '#ffffff' }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={handleNewsExpand}>
            <Typography variant="h6" sx={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700 }}>
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
                <Typography key={item.id} variant="body2" sx={{ mb: 1, fontFamily: 'Inter, sans-serif' }}>
                  <ChevronRightIcon sx={{ fontSize: '1rem', verticalAlign: 'middle' }} /> {item.headline}
                </Typography>
              ))}
            </Box>
          </Collapse>
        </CardContent>
      </Card>

      <Divider />

      {/* Hackathons Section */}
      <Box>
        <Typography variant="h6" sx={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, mb: 2 }}>
          Live & Upcoming Hackathons
        </Typography>
        {dummyHackathons.map((hackathon, index) => (
          <motion.div
            key={hackathon.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card sx={{ mb: 2, borderRadius: 4, boxShadow: 'none', bgcolor: '#ffffff' }}>
              <CardContent>
                <Typography variant="subtitle1" sx={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700 }}>
                  {hackathon.title}
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif', mb: 1 }}>
                  {hackathon.description}
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748b' }}>
                  {hackathon.timeLeft}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default RightSidebar;
