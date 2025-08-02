import React, { useState } from 'react';
import { Box, Typography, Avatar, IconButton, TextField, Button, Paper, List, ListItem, ListItemAvatar, ListItemText, Divider, Fade, Slide } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

// Dummy users for sidebar
const dummyUsers = [
  { name: 'Priya', avatar: 'https://avatar.iran.liara.run/public/girl?username=priya', lastMsg: 'See you at 5pm!', online: true },
  { name: 'Rahul', avatar: 'https://avatar.iran.liara.run/public/boy?username=rahul', lastMsg: 'Let’s start the project', online: false },
  { name: 'Aisha', avatar: 'https://avatar.iran.liara.run/public/girl?username=aisha', lastMsg: 'Thanks for the docs!', online: true },
  { name: 'Siddharth', avatar: 'https://avatar.iran.liara.run/public/boy?username=siddharth', lastMsg: 'Ping me when free', online: false },
  { name: 'Megha', avatar: 'https://avatar.iran.liara.run/public/girl?username=megha', lastMsg: 'Awesome work!', online: true },
  { name: 'Arjun', avatar: 'https://avatar.iran.liara.run/public/boy?username=arjun', lastMsg: 'Let’s catch up', online: false },
];

// Dummy chat messages per user
const dummyMessagesMap = {
  'Priya': [
    { from: 'Priya', text: 'Hey! Are you joining the hackathon team call?', time: '09:30', self: false },
    { from: 'me', text: 'Yes, I’ll be there in 5 minutes!', time: '09:31', self: true },
    { from: 'Priya', text: 'Great! See you soon 😊', time: '09:32', self: false },
    { from: 'me', text: '👍', time: '09:33', self: true },
  ],
  'Rahul': [
    { from: 'Rahul', text: 'Let’s start the project', time: '10:00', self: false },
    { from: 'me', text: 'Sure, I am ready!', time: '10:01', self: true },
    { from: 'Rahul', text: 'I will share the repo link.', time: '10:02', self: false },
  ],
  'Aisha': [
    { from: 'Aisha', text: 'Thanks for the docs!', time: '11:00', self: false },
    { from: 'me', text: 'No problem!', time: '11:01', self: true },
  ],
  'Siddharth': [
    { from: 'Siddharth', text: 'Ping me when free', time: '12:00', self: false },
    { from: 'me', text: 'Will do!', time: '12:01', self: true },
  ],
  'Megha': [
    { from: 'Megha', text: 'Awesome work!', time: '13:00', self: false },
    { from: 'me', text: 'Thank you!', time: '13:01', self: true },
  ],
  'Arjun': [
    { from: 'Arjun', text: 'Let’s catch up', time: '14:00', self: false },
    { from: 'me', text: 'Sure, let me know when!', time: '14:01', self: true },
  ],
};


const ChatPage = () => {
  const [selectedUser, setSelectedUser] = useState(dummyUsers[0]);
  const [messagesMap, setMessagesMap] = useState(() => ({ ...dummyMessagesMap }));
  const [input, setInput] = useState('');

  const messages = messagesMap[selectedUser.name] || [];

  const handleSend = () => {
    if (input.trim() === '') return;
    const newMsg = { from: 'me', text: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), self: true };
    setMessagesMap(prev => ({
      ...prev,
      [selectedUser.name]: [...(prev[selectedUser.name] || []), newMsg],
    }));
    setInput('');
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'linear-gradient(135deg, #f1f5f9 60%, #38bdf8 100%)', fontFamily: 'Inter, sans-serif', pt: { xs: 8, md: 10 }, transition: 'padding-top 0.4s cubic-bezier(.4,0,.2,1)' }}>
      {/* Sidebar */}
      <Paper elevation={3} sx={{ width: 320, bgcolor: 'linear-gradient(135deg, #fff 80%, #e0f2fe 100%)', borderRadius: '24px 0 0 24px', borderRight: '2px solid #38bdf8', display: { xs: 'none', md: 'block' }, minHeight: 'calc(100vh - 64px)', mt: '64px', position: 'fixed', left: 0, top: 0, zIndex: 1200, boxShadow: '0 8px 32px 0 rgba(56,189,248,0.10)' }}>
        <Box sx={{ p: 3, pb: 2, borderBottom: '2px solid #38bdf8', display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 10, height: 32, borderRadius: 2, bgcolor: '#38bdf8', mr: 1 }} />
          <Typography variant="h6" sx={{ fontWeight: 900, color: '#111', fontFamily: 'Cormorant Garamond, serif', letterSpacing: 1 }}>Chats</Typography>
        </Box>
        <List>
          {dummyUsers.map((user, idx) => (
            <Slide direction="right" in={true} timeout={400 + idx * 60} key={user.name} mountOnEnter unmountOnExit>
              <ListItem button selected={selectedUser.name === user.name} onClick={() => setSelectedUser(user)} sx={{ borderRadius: 2, mb: 1, bgcolor: selectedUser.name === user.name ? 'linear-gradient(90deg, #38bdf8 60%, #0ea5e9 100%)' : 'transparent', color: '#111', transition: 'background 0.3s, color 0.3s', cursor: 'pointer', boxShadow: selectedUser.name === user.name ? '0 2px 8px #38bdf833' : 'none' }}>
                <ListItemAvatar>
                  <BadgeDot online={user.online}>
                    <Avatar src={user.avatar} sx={{ width: 44, height: 44, border: selectedUser.name === user.name ? '2px solid #fff' : '2px solid #38bdf8', transition: 'box-shadow 0.3s, border 0.3s' }} />
                  </BadgeDot>
                </ListItemAvatar>
                <ListItemText primary={<Typography sx={{ fontWeight: 700, color: '#111' }}>{user.name}</Typography>} secondary={<Typography sx={{ color: '#111', fontSize: 13 }}>{user.lastMsg}</Typography>} />
              </ListItem>
            </Slide>
          ))}
        </List>
      </Paper>
      {/* Chat Area */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh', ml: { md: 40 }, bgcolor: 'transparent', transition: 'margin-left 0.4s cubic-bezier(.4,0,.2,1)', borderRadius: '0 32px 32px 0', overflow: 'hidden' }}>
        {/* Chat Header */}
        <Box sx={{ p: 3, display: 'flex', alignItems: 'center', borderBottom: '2px solid #38bdf8', bgcolor: 'linear-gradient(90deg, #fff 80%, #e0f2fe 100%)', boxShadow: '0 2px 8px #38bdf822', borderTopRightRadius: 32 }}>
          <Avatar src={selectedUser.avatar} sx={{ width: 52, height: 52, border: '2.5px solid #38bdf8', mr: 2, boxShadow: '0 2px 8px #38bdf822', borderRadius: 3 }} />
          <Box>
            <Typography sx={{ fontWeight: 700, color: '#111', fontSize: 20 }}>{selectedUser.name}</Typography>
            <Typography variant="caption" sx={{ color: selectedUser.online ? '#00e676' : '#888', fontWeight: 600 }}>{selectedUser.online ? 'Online' : 'Offline'}</Typography>
          </Box>
        </Box>
        {/* Messages */}
        <Box sx={{ flex: 1, overflowY: 'auto', p: 4, display: 'flex', flexDirection: 'column', gap: 2, bgcolor: 'transparent', background: 'linear-gradient(135deg, #f1f5f9 80%, #e0f2fe 100%)', borderBottomRightRadius: 32 }}>
          {messages.map((msg, idx) => (
            <Fade in={true} timeout={400 + idx * 80} key={idx}>
              <Box sx={{ display: 'flex', justifyContent: msg.self ? 'flex-end' : 'flex-start' }}>
                <Box sx={{
                  maxWidth: 340,
                  bgcolor: msg.self ? 'linear-gradient(90deg, #38bdf8 70%, #0ea5e9 100%)' : '#fff',
                  color: msg.self ? '#fff' : '#222',
                  borderRadius: msg.self ? '22px 22px 8px 22px' : '22px 22px 22px 8px',
                  p: 2.2,
                  mb: 0.5,
                  boxShadow: msg.self ? '0 2px 12px #38bdf833' : '0 2px 8px #e0e0e044',
                  fontWeight: 500,
                  fontSize: 16,
                  position: 'relative',
                  transition: 'background 0.3s, color 0.3s',
                  border: msg.self ? '1.5px solid #38bdf8' : '1.5px solid #e0e0e0',
                  // Ensure sent messages are always visible
                  background: msg.self ? 'linear-gradient(90deg, #38bdf8 70%, #0ea5e9 100%)' : '#fff',
                  color: msg.self ? '#fff' : '#222',
                }}>
                  {msg.text}
                  <Typography variant="caption" sx={{ display: 'block', mt: 0.5, color: msg.self ? '#fff' : '#38bdf8', fontSize: 12, textAlign: msg.self ? 'right' : 'left', fontWeight: 600 }}>{msg.time}</Typography>
                </Box>
              </Box>
            </Fade>
          ))}
        </Box>
        {/* Input */}
        <Box sx={{ p: 3, display: 'flex', alignItems: 'center', borderTop: '2px solid #38bdf8', bgcolor: 'linear-gradient(90deg, #fff 80%, #e0f2fe 100%)', boxShadow: '0 -2px 8px #38bdf822', borderBottomRightRadius: 32 }}>
          <TextField
            fullWidth
            placeholder="Type your message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            sx={{ bgcolor: '#f8fafc', borderRadius: 4, mr: 2, '& .MuiInputBase-root': { color: '#111', fontWeight: 500, borderRadius: 4 }, '& .MuiOutlinedInput-notchedOutline': { borderColor: '#38bdf8', borderRadius: 4 }, '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#0ea5e9' }, boxShadow: '0 2px 8px #38bdf822' }}
            onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
          />
          <Button variant="contained" sx={{ bgcolor: 'linear-gradient(90deg, #38bdf8 70%, #0ea5e9 100%)', color: '#fff', borderRadius: 4, minWidth: 52, minHeight: 52, boxShadow: '0 2px 8px #38bdf822', '&:hover': { bgcolor: '#0ea5e9' } }} onClick={handleSend}>
            <SendIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

// BadgeDot for online status
function BadgeDot({ online, children }) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-block' }}>
      {children}
      <Box sx={{
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 12,
        height: 12,
        borderRadius: '50%',
        bgcolor: online ? '#22c55e' : '#e0e0e0',
        border: '2px solid #fff',
        boxShadow: '0 0 0 2px #f1f5f9',
      }} />
    </Box>
  );
}

export default ChatPage;
