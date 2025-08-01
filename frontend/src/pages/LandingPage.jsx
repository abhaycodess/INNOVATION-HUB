
import React from "react";
import { Container, Button, Box, Typography, Card, CardContent, Avatar, Grid, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const Highlight = styled('span')(({ theme }) => ({
  background: '#6ee7b7',
  color: '#111',
  borderRadius: 6,
  padding: '0 8px',
  fontWeight: 900,
  margin: '0 4px',
  display: 'inline-block',
}));

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
        <Button variant="contained" sx={{ bgcolor: '#111', color: '#fff', borderRadius: 999, px: 5, py: 1.5, fontWeight: 700, fontSize: 18, boxShadow: 'none', '&:hover': { bgcolor: '#222' } }}>
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

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h4" sx={{ fontWeight: 900, mb: 4, textAlign: 'center', fontFamily: 'Cormorant Garamond, serif' }}>
          Why Join We-code?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Box sx={{ textAlign: 'center', p: 3, borderRadius: 4, bgcolor: '#f8fafc', height: '100%' }}>
                <Typography variant="h2" sx={{ fontSize: 48, mb: 1 }}>{feature.icon}</Typography>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontFamily: 'Cormorant Garamond, serif' }}>{feature.title}</Typography>
                <Typography variant="body2" sx={{ color: '#555', fontFamily: 'Inter, sans-serif' }}>{feature.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Dummy Posts Section */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h4" sx={{ fontWeight: 900, mb: 4, textAlign: 'center', fontFamily: 'Cormorant Garamond, serif' }}>
          Community Posts
        </Typography>
        <Grid container spacing={3}>
          {dummyPosts.map((post, idx) => (
            <Grid item xs={12} key={idx}>
              <Card sx={{ borderRadius: 4, boxShadow: 'none', bgcolor: '#f1f5f9' }}>
                <CardContent sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Avatar src={post.profilePic} alt={post.user} sx={{ width: 48, height: 48 }} />
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>{post.user}</Typography>
                    <Typography sx={{ color: '#222', fontFamily: 'Cormorant Garamond, serif', fontSize: 18 }}>{post.content}</Typography>
                    <Typography variant="caption" sx={{ color: '#888', fontFamily: 'Inter, sans-serif' }}>{post.time}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Reviews Section */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h4" sx={{ fontWeight: 900, mb: 4, textAlign: 'center', fontFamily: 'Cormorant Garamond, serif' }}>
          What Our Users Say
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {dummyReviews.map((review, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card sx={{ borderRadius: 4, boxShadow: 'none', bgcolor: '#f8fafc', height: '100%' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                  <Avatar src={review.profilePic} alt={review.name} sx={{ width: 56, height: 56, mb: 1 }} />
                  <Typography sx={{ fontWeight: 700, fontFamily: 'Inter, sans-serif', mb: 1 }}>{review.name}</Typography>
                  <Typography sx={{ color: '#222', fontFamily: 'Cormorant Garamond, serif', fontSize: 18, textAlign: 'center' }}>{review.review}</Typography>
                </CardContent>
              </Card>
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
