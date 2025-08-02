// Dummy stories data
const dummyStories = [
  {
    name: 'Priya',
    avatar: 'https://avatar.iran.liara.run/public/girl?username=priya',
  },
  {
    name: 'Rahul',
    avatar: 'https://avatar.iran.liara.run/public/boy?username=rahul',
  },
  {
    name: 'Aisha',
    avatar: 'https://avatar.iran.liara.run/public/girl?username=aisha',
  },
  {
    name: 'Siddharth',
    avatar: 'https://avatar.iran.liara.run/public/boy?username=siddharth',
  },
  {
    name: 'Megha',
    avatar: 'https://avatar.iran.liara.run/public/girl?username=megha',
  },
  {
    name: 'Arjun',
    avatar: 'https://avatar.iran.liara.run/public/boy?username=arjun',
  },
];

import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { Container, Button, Box, Typography, Card, CardContent, Avatar, Grid, Divider } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';
import { useEffect, useRef, useState as useReactState } from 'react';
import { motion } from 'framer-motion';

const Highlight = styled('span')(({ theme }) => ({
  background: '#6ee7b7',
  color: '#111',
  borderRadius: 6,
  padding: '0 8px',
  fontWeight: 900,
  margin: '0 4px',
  display: 'inline-block',
  minWidth: '1ch',
  whiteSpace: 'pre',
  fontFamily: 'inherit',
}));

// Typing animation for highlighted words: green box always visible, letters animate inside
// ...existing code...

const dummyPosts = [
  {
    user: 'Priya Sharma',
    profilePic: 'https://avatar.iran.liara.run/public/girl?username=priya',
    content: 'Looking for a React developer to join my team for the next hackathon! DM if interested.',
    time: '2 hours ago',
  },
  {
    user: 'Rahul Verma',
    profilePic: 'https://avatar.iran.liara.run/public/boy?username=rahul',
    content: 'Anyone up for building an AI-powered project? Let’s connect and brainstorm!',
    time: '5 hours ago',
  },
  {
    user: 'Aisha Khan',
    profilePic: 'https://avatar.iran.liara.run/public/girl?username=aisha',
    content: 'Just registered for CodeFest 2025! Who else is joining? Let’s form a team!',
    time: '1 day ago',
  },
];

const dummyReviews = [
  {
    name: 'Siddharth',
    profilePic: 'https://avatar.iran.liara.run/public/boy?username=siddharth',
    review: 'I found my dream hackathon team here! The community is super helpful and inspiring.',
  },
  {
    name: 'Megha',
    profilePic: 'https://avatar.iran.liara.run/public/girl?username=megha',
    review: 'Love the live hackathon updates and the chat feature. Made so many new friends!',
  },
  {
    name: 'Arjun',
    profilePic: 'https://avatar.iran.liara.run/public/boy?username=arjun',
    review: 'Perfect place for techies to collaborate and build real projects together.',
  },
];

const features = [
  {
    title: 'Find Your Team',
    desc: 'Connect with like-minded tech enthusiasts and form teams for hackathons and projects.',
    icon: '🤝',
  },
  {
    title: 'Live & Upcoming Hackathons',
    desc: 'Stay updated with the latest hackathons and join with your friends or new teammates.',
    icon: '🚀',
  },
  {
    title: 'Community Chat',
    desc: 'Chat with your team and the community, share ideas, and get instant feedback.',
    icon: '💬',
  },
  {
    title: 'Project Showcase',
    desc: 'Share your projects, get feedback, and inspire others in the tech community.',
    icon: '🌟',
  },
];

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  // Fix: useState for review avatar loading
  const [reviewImgLoaded, setReviewImgLoaded] = useState(Array(dummyReviews.length).fill(false));
  return (
    <Box sx={{ bgcolor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', pt: { xs: 8, md: 10 } }}>
      {/* Hero Section */}
      <Container maxWidth="md" sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: { xs: 8, md: 12 } }}>
        <Typography variant="h2" sx={{ fontWeight: 900, textAlign: 'center', mb: 2, fontSize: { xs: 32, md: 48 }, letterSpacing: -1, fontFamily: 'Cormorant Garamond, serif' }}>
          Build. Connect. <Highlight>Innovate</Highlight> Together
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', maxWidth: 600, mx: 'auto', mb: 4, textAlign: 'center', fontSize: 20, fontFamily: 'Inter, sans-serif' }}>
          Join a vibrant tech community where you can find teammates, chat, and collaborate on real projects. Discover live and upcoming hackathons, invite friends to join your team, and turn your ideas into reality—together.
        </Typography>
        <Button
          variant="contained"
          sx={{ bgcolor: '#111', color: '#fff', borderRadius: 999, px: 5, py: 1.5, fontWeight: 700, fontSize: 18, boxShadow: 'none', '&:hover': { bgcolor: '#222' } }}
          onClick={() => navigate('/register')}
        >
          JOIN US
        </Button>
      </Container>

      {/* Illustration */}
      <Box sx={{ display: 'flex', justifyContent: 'center', pb: 8 }}>
        <img
          src="/team-illustration.svg"
          alt="Team Illustration"
          style={{ maxWidth: 800, width: '100%' }}
        />
      </Box>

      {/* Features Section - Animated */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 900, mb: 4, textAlign: 'center', fontFamily: 'Cormorant Garamond, serif', letterSpacing: 1 }}
            component={motion.div}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Why <Highlight>Join</Highlight> We-code?
          </Typography>
        </motion.div>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.07, boxShadow: '0 8px 32px rgba(56,189,248,0.18)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    borderRadius: 4,
                    bgcolor: '#f8fafc',
                    height: '100%',
                    boxShadow: '0 2px 8px rgba(56,189,248,0.08)',
                    cursor: 'pointer',
                    transition: 'box-shadow 0.3s',
                  }}
                >
                  <motion.div
                    initial={{ rotate: -10 }}
                    whileHover={{ rotate: 10, scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    style={{ display: 'inline-block' }}
                  >
                    <Typography variant="h2" sx={{ fontSize: 48, mb: 1 }}>{feature.icon}</Typography>
                  </motion.div>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontFamily: 'Cormorant Garamond, serif' }}>{feature.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#555', fontFamily: 'Inter, sans-serif' }}>{feature.desc}</Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>



      {/* Build Communities Section - Avatar Cluster */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: 900, mb: 2, textAlign: 'center', fontFamily: 'Cormorant Garamond, serif', letterSpacing: 1, color: '#111' }}
            component={motion.div}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Highlight>Build</Highlight> Communities
          </Typography>
          <Typography
            variant="h6"
            sx={{ mb: 2, textAlign: 'center', color: '#555', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Connect, collaborate, and grow with passionate techies from all walks of life.
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 5, textAlign: 'center', color: '#555', fontWeight: 500, fontFamily: 'Inter, sans-serif', fontSize: 20 }}
            component={motion.div}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            1k+ users (and a few bots) can't be wrong—join the crowd.
          </Typography>
        </motion.div>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 320, position: 'relative', mt: 2 }}>
          {/* Symmetrical Elliptical Avatar Cluster - closer avatars */}
          <Box sx={{ position: 'relative', width: 340, height: 180, mx: 'auto' }}>
            {/* Center */}
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.1, type: 'spring', stiffness: 200 }} style={{ position: 'absolute', left: 140, top: 60 }}>
              <Avatar src={`https://avatar.iran.liara.run/public/boy?username=global`} sx={{ width: 54, height: 54, border: '3px solid #38bdf8', bgcolor: '#e0e7ef' }} />
            </motion.div>
            {/* Top Row */}
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.13, type: 'spring', stiffness: 200 }} style={{ position: 'absolute', left: 70, top: 20 }}>
              <Avatar src={`https://avatar.iran.liara.run/public/girl?username=priya`} sx={{ width: 44, height: 44, border: '3px solid #a78bfa', bgcolor: '#f3e8ff' }} />
            </motion.div>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.16, type: 'spring', stiffness: 200 }} style={{ position: 'absolute', left: 210, top: 20 }}>
              <Avatar src={`https://avatar.iran.liara.run/public/boy?username=rahul`} sx={{ width: 44, height: 44, border: '3px solid #fbbf24', bgcolor: '#fef9c3' }} />
            </motion.div>
            {/* Middle Row */}
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.19, type: 'spring', stiffness: 200 }} style={{ position: 'absolute', left: 30, top: 80 }}>
              <Avatar src={`https://avatar.iran.liara.run/public/girl?username=aisha`} sx={{ width: 40, height: 40, border: '3px solid #f472b6', bgcolor: '#fce7f3' }} />
            </motion.div>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.22, type: 'spring', stiffness: 200 }} style={{ position: 'absolute', left: 250, top: 80 }}>
              <Avatar src={`https://avatar.iran.liara.run/public/boy?username=sid`} sx={{ width: 40, height: 40, border: '3px solid #38bdf8', bgcolor: '#e0e7ef' }} />
            </motion.div>
            {/* Bottom Row */}
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.25, type: 'spring', stiffness: 200 }} style={{ position: 'absolute', left: 70, top: 130 }}>
              <Avatar src={`https://avatar.iran.liara.run/public/girl?username=megha`} sx={{ width: 44, height: 44, border: '3px solid #fbbf24', bgcolor: '#fef9c3' }} />
            </motion.div>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.28, type: 'spring', stiffness: 200 }} style={{ position: 'absolute', left: 210, top: 130 }}>
              <Avatar src={`https://avatar.iran.liara.run/public/boy?username=arjun`} sx={{ width: 44, height: 44, border: '3px solid #a78bfa', bgcolor: '#f3e8ff' }} />
            </motion.div>
            {/* Corners for crowd effect */}
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.31, type: 'spring', stiffness: 200 }} style={{ position: 'absolute', left: 0, top: 40 }}>
              <Avatar src={`https://avatar.iran.liara.run/public/boy?username=alex`} sx={{ width: 36, height: 36, border: '3px solid #f472b6', bgcolor: '#fce7f3' }} />
            </motion.div>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.34, type: 'spring', stiffness: 200 }} style={{ position: 'absolute', left: 300, top: 40 }}>
              <Avatar src={`https://avatar.iran.liara.run/public/girl?username=anita`} sx={{ width: 36, height: 36, border: '3px solid #38bdf8', bgcolor: '#e0e7ef' }} />
            </motion.div>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.37, type: 'spring', stiffness: 200 }} style={{ position: 'absolute', left: 0, top: 120 }}>
              <Avatar src={`https://avatar.iran.liara.run/public/boy?username=dev`} sx={{ width: 36, height: 36, border: '3px solid #fbbf24', bgcolor: '#fef9c3' }} />
            </motion.div>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.4, type: 'spring', stiffness: 200 }} style={{ position: 'absolute', left: 300, top: 120 }}>
              <Avatar src={`https://avatar.iran.liara.run/public/girl?username=tanvi`} sx={{ width: 36, height: 36, border: '3px solid #a78bfa', bgcolor: '#f3e8ff' }} />
            </motion.div>
          </Box>
        </Box>
      </Container>

      {/* Reviews Section */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" sx={{ fontWeight: 900, mb: 4, textAlign: 'center', fontFamily: 'Cormorant Garamond, serif' }}>
            What Our <Highlight>Users</Highlight> Say
          </Typography>
        </motion.div>
        <Grid container spacing={4} justifyContent="center">
          {dummyReviews.map((review, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 + idx * 0.13, type: 'spring', stiffness: 120 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(34,197,94,0.10)' }}
                style={{ height: '100%' }}
              >
                <Card sx={{ borderRadius: 4, boxShadow: 'none', bgcolor: '#f8fafc', height: '100%', transition: 'box-shadow 0.3s' }}>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ position: 'relative', width: 56, height: 56, mb: 1 }}>
                      {!reviewImgLoaded[idx] && <Skeleton variant="circular" width={56} height={56} />}
                      <Avatar
                        src={review.profilePic}
                        alt={review.name}
                        sx={{ width: 56, height: 56, position: 'absolute', top: 0, left: 0, opacity: reviewImgLoaded[idx] ? 1 : 0, transition: 'opacity 0.2s' }}
                        imgProps={{ loading: 'lazy', onLoad: () => setReviewImgLoaded(arr => arr.map((v, i) => i === idx ? true : v)) }}
                      />
                    </Box>
                    <Typography sx={{ fontWeight: 700, fontFamily: 'Inter, sans-serif', mb: 1 }}>{review.name}</Typography>
                    <Typography sx={{ color: '#222', fontFamily: 'Cormorant Garamond, serif', fontSize: 18, textAlign: 'center' }}>{review.review}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Divider sx={{ my: 6 }} />
      <Box sx={{ textAlign: 'center', pb: 6, color: '#888', fontFamily: 'Inter, sans-serif' }}>
        &copy; {new Date().getFullYear()} We-code. All rights reserved.
      </Box>
    </Box>
  );
};

export default LandingPage;
