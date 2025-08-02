import React from "react";
import { Container, Box, Typography, Avatar, Card, CardContent, Grid, IconButton, Tooltip, TextField, Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';

// Dummy stories data
const dummyStories = [
  { name: 'Priya', avatar: 'https://avatar.iran.liara.run/public/girl?username=priya' },
  { name: 'Rahul', avatar: 'https://avatar.iran.liara.run/public/boy?username=rahul' },
  { name: 'Aisha', avatar: 'https://avatar.iran.liara.run/public/girl?username=aisha' },
  { name: 'Siddharth', avatar: 'https://avatar.iran.liara.run/public/boy?username=siddharth' },
  { name: 'Megha', avatar: 'https://avatar.iran.liara.run/public/girl?username=megha' },
  { name: 'Arjun', avatar: 'https://avatar.iran.liara.run/public/boy?username=arjun' },
  { name: 'Sneha', avatar: 'https://avatar.iran.liara.run/public/girl?username=sneha' },
  { name: 'Vikram', avatar: 'https://avatar.iran.liara.run/public/boy?username=vikram' },
  { name: 'Neha', avatar: 'https://avatar.iran.liara.run/public/girl?username=neha' },
  { name: 'Karan', avatar: 'https://avatar.iran.liara.run/public/boy?username=karan' },
  { name: 'Simran', avatar: 'https://avatar.iran.liara.run/public/girl?username=simran' },
  { name: 'Rohit', avatar: 'https://avatar.iran.liara.run/public/boy?username=rohit' },
];

const dummyPosts = [
  {
    user: 'Riya Patel',
    profilePic: 'https://avatar.iran.liara.run/public/girl?username=riya',
    content: 'Excited to start a new open source project! Looking for collaborators.',
    time: 'Just now',
    media: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
  },
  {
    user: 'Aman Singh',
    profilePic: 'https://avatar.iran.liara.run/public/boy?username=aman',
    content: 'Completed my first hackathon! Amazing experience with the team.',
    time: '1 hour ago',
    media: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
  },
  {
    user: 'Sneha Roy',
    profilePic: 'https://avatar.iran.liara.run/public/girl?username=sneha',
    content: 'Anyone interested in a weekend coding sprint? Let’s connect!',
    time: '3 hours ago',
    media: '',
  },
  {
    user: 'Vikram Mehra',
    profilePic: 'https://avatar.iran.liara.run/public/boy?username=vikram',
    content: 'Check out this cool robotics project I built!',
    time: '4 hours ago',
    media: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    user: 'Neha Gupta',
    profilePic: 'https://avatar.iran.liara.run/public/girl?username=neha',
    content: 'Learning about cloud computing. Any good resources to share?',
    time: '5 hours ago',
    media: '',
  },
  {
    user: 'Karan Malhotra',
    profilePic: 'https://avatar.iran.liara.run/public/boy?username=karan',
    content: 'Just finished a UI/UX design sprint. Feedback welcome!',
    time: '6 hours ago',
    media: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  },
  {
    user: 'Simran Kaur',
    profilePic: 'https://avatar.iran.liara.run/public/girl?username=simran',
    content: 'Attending a tech conference this weekend. Who else is going?',
    time: '7 hours ago',
    media: '',
  },
  {
    user: 'Rohit Sharma',
    profilePic: 'https://avatar.iran.liara.run/public/boy?username=rohit',
    content: 'Built a new app with React Native. Demo soon!',
    time: '8 hours ago',
    media: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
  },
  {
    user: 'Tanvi Desai',
    profilePic: 'https://avatar.iran.liara.run/public/girl?username=tanvi',
    content: 'Exploring AI in healthcare. Fascinating stuff!',
    time: '9 hours ago',
    media: '',
  },
  {
    user: 'Dev Joshi',
    profilePic: 'https://avatar.iran.liara.run/public/boy?username=dev',
    content: 'My IoT project got featured in a magazine!',
    time: '10 hours ago',
    media: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=600&q=80',
  },
];

const UserHomePage = () => {
  const [likes, setLikes] = React.useState(Array(dummyPosts.length).fill(0));
  const [liked, setLiked] = React.useState(Array(dummyPosts.length).fill(false));
  const [showComments, setShowComments] = React.useState(Array(dummyPosts.length).fill(false));
  const [comments, setComments] = React.useState(Array(dummyPosts.length).fill([]));
  const [commentInputs, setCommentInputs] = React.useState(Array(dummyPosts.length).fill(''));

  const handleLike = idx => {
    setLiked(liked => liked.map((l, i) => i === idx ? !l : l));
    setLikes(likes => likes.map((l, i) => i === idx ? (liked[idx] ? l - 1 : l + 1) : l));
  };
  const handleShowComments = idx => {
    setShowComments(showComments => showComments.map((c, i) => i === idx ? !c : c));
  };
  const handleCommentInput = (idx, value) => {
    setCommentInputs(inputs => inputs.map((input, i) => i === idx ? value : input));
  };
  const handleAddComment = idx => {
    if (commentInputs[idx].trim() === '') return;
    setComments(comments => comments.map((arr, i) => i === idx ? [...arr, commentInputs[idx]] : arr));
    setCommentInputs(inputs => inputs.map((input, i) => i === idx ? '' : input));
  };
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Post link copied to clipboard!');
  };

  return (
    <Box sx={{ bgcolor: '#fff', minHeight: '100vh', display: 'flex' }}>
      <LeftSidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { sm: '80px' },
          mr: { sm: '300px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Stories/Highlights Bar */}
        <Box sx={{ width: '100%', py: 2, bgcolor: '#fff', borderBottom: '1px solid #e2e8f0' }}>
          <Box sx={{
            maxWidth: '1200px',
            mx: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(64px, 1fr))',
            gap: 3,
            px: 2,
          }}>
            {dummyStories.map((story, idx) => (
              <Box key={idx} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar src={story.avatar} sx={{ width: 56, height: 56, border: '3px solid #38bdf8', mb: 0.5, boxShadow: '0 2px 8px rgba(56,189,248,0.15)' }} />
                <Typography variant="caption" sx={{ fontWeight: 600, fontFamily: 'Inter, sans-serif', color: '#222', textAlign: 'center', maxWidth: 64, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{story.name}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Posts Feed */}
        <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
          <Grid container spacing={3}>
            {dummyPosts.map((post, idx) => (
              <Grid item xs={12} key={idx}>
                <Card sx={{ borderRadius: 4, boxShadow: '0 4px 12px rgba(0,0,0,0.08)', bgcolor: '#ffffff', transition: 'box-shadow 0.3s ease-in-out', '&:hover': { boxShadow: '0 8px 24px rgba(0,0,0,0.12)' } }}>
                  <CardContent sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, width: '100%' }}>
                      <Avatar src={post.profilePic} alt={post.user} sx={{ width: 48, height: 48 }} />
                      <Box>
                        <Typography sx={{ fontWeight: 700, fontFamily: 'Cormorant Garamond, serif', fontSize: 22 }}>{post.user}</Typography>
                        <Typography sx={{ color: '#334155', fontFamily: 'Inter, sans-serif', fontSize: 16 }}>{post.content}</Typography>
                        <Typography variant="caption" sx={{ color: '#94a3b8', fontFamily: 'Inter, sans-serif' }}>{post.time}</Typography>
                      </Box>
                    </Box>
                    {post.media && (
                      <Box mt={2} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <img src={post.media} alt="post media" style={{ maxWidth: '100%', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
                      </Box>
                    )}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
                      <Tooltip title={liked[idx] ? 'Unlike' : 'Like'}>
                        <IconButton onClick={() => handleLike(idx)} color={liked[idx] ? 'error' : 'default'}>
                          {liked[idx] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </IconButton>
                      </Tooltip>
                      <Typography variant="body2">{likes[idx]}</Typography>
                      <Tooltip title="Comment">
                        <IconButton onClick={() => handleShowComments(idx)}>
                          <ChatBubbleOutlineIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Share">
                        <IconButton onClick={handleShare}>
                          <ShareOutlinedIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                    {showComments[idx] && (
                      <Box sx={{ mt: 2, width: '100%' }}>
                        <Box sx={{ mb: 1 }}>
                          {comments[idx].length === 0 && (
                            <Typography variant="body2" color="text.secondary">No comments yet.</Typography>
                          )}
                          {comments[idx].map((c, cidx) => (
                            <Box key={cidx} sx={{ mb: 0.5, pl: 1, borderLeft: '2px solid #e0e0e0' }}>
                              <Typography variant="body2" sx={{ fontWeight: 500 }}>{c}</Typography>
                            </Box>
                          ))}
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <TextField size="small" variant="outlined" placeholder="Add a comment..." value={commentInputs[idx]} onChange={e => handleCommentInput(idx, e.target.value)} sx={{ flex: 1, bgcolor: '#f1f5f9' }} />
                          <Button variant="contained" size="small" onClick={() => handleAddComment(idx)} sx={{ bgcolor: '#38bdf8', color: '#fff', fontWeight: 700, boxShadow: 'none', '&:hover': { bgcolor: '#0ea5e9' } }}>Post</Button>
                        </Box>
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <RightSidebar />
    </Box>
  );
};

export default UserHomePage;
