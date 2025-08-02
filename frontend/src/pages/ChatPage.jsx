import React, { useState } from 'react';
import { Box, Typography, Avatar, TextField, Button, Paper, List, ListItem, ListItemAvatar, ListItemText, Fade, Slide } from '@mui/material';
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
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#f7f9fc', fontFamily: 'Roboto, sans-serif', pt: { xs: 8, md: 10 } }}>
      {/* Sidebar */}
      <Paper elevation={0} sx={{ width: 320, bgcolor: '#fff', borderRight: '1px solid #e0e0e0', display: { xs: 'none', md: 'block' }, minHeight: 'calc(100vh - 64px)', mt: '64px', position: 'fixed', left: 0, top: 0, zIndex: 1200 }}>
        <Box sx={{ p: 2, borderBottom: '1px solid #e0e0e0' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#333' }}>Chats</Typography>
        </Box>
        <List>
          {dummyUsers.map((user, idx) => (
            <Slide direction="right" in={true} timeout={300 + idx * 50} key={user.name} mountOnEnter unmountOnExit>
              <ListItem button selected={selectedUser.name === user.name} onClick={() => setSelectedUser(user)} sx={{ m: 1, borderRadius: 1.5, '&.Mui-selected': { bgcolor: '#e3f2fd', '&:hover': { bgcolor: '#dcf0ff' } } }}>
                <ListItemAvatar>
                  <BadgeDot online={user.online}>
                    <Avatar src={user.avatar} sx={{ width: 48, height: 48 }} />
                  </BadgeDot>
                </ListItemAvatar>
                <ListItemText primary={<Typography sx={{ fontWeight: 600 }}>{user.name}</Typography>} secondary={user.lastMsg} />
              </ListItem>
            </Slide>
          ))}
        </List>
      </Paper>
      {/* Chat Area */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh', ml: { md: '320px' }, bgcolor: '#f7f9fc' }}>
        {/* Chat Header */}
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', borderBottom: '1px solid #e0e0e0', bgcolor: '#fff' }}>
          <Avatar src={selectedUser.avatar} sx={{ width: 52, height: 52, mr: 2 }} />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#333' }}>{selectedUser.name}</Typography>
            <Typography variant="caption" sx={{ color: selectedUser.online ? '#4caf50' : '#9e9e9e', fontWeight: 500 }}>{selectedUser.online ? 'Online' : 'Offline'}</Typography>
          </Box>
        </Box>
        {/* Messages */}
        <Box sx={{ flex: 1, overflowY: 'auto', p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {messages.map((msg, idx) => (
            <Fade in={true} timeout={300 + idx * 70} key={idx}>
              <Box sx={{ display: 'flex', justifyContent: msg.self ? 'flex-end' : 'flex-start' }}>
                <Box sx={{
                  maxWidth: 360,
                  bgcolor: msg.self ? '#1976d2' : '#fff',
                  color: msg.self ? '#fff' : '#333',
                  borderRadius: msg.self ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                  p: 1.5,
                  boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                }}>
                  <Typography variant="body1">{msg.text}</Typography>
                  <Typography variant="caption" sx={{ display: 'block', mt: 0.5, color: msg.self ? '#bbdefb' : '#9e9e9e', textAlign: 'right' }}>{msg.time}</Typography>
                </Box>
              </Box>
            </Fade>
          ))}
        </Box>
        {/* Input */}
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', borderTop: '1px solid #e0e0e0', bgcolor: '#fff' }}>
          <TextField
            fullWidth
            placeholder="Type your message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
                bgcolor: '#f1f3f4',
                '& fieldset': {
                  border: 'none',
                },
                '&:hover fieldset': {
                  border: 'none',
                },
                '&.Mui-focused fieldset': {
                  border: 'none',
                },
              },
            }}
            onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
          />
          <Button variant="contained" sx={{ ml: 2, borderRadius: '50%', width: 52, height: 52, minWidth: 52, boxShadow: 'none', '&:hover': { bgcolor: '#1565c0' } }} onClick={handleSend}>
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
        bgcolor: online ? '#4caf50' : '#e0e0e0',
        border: '2px solid #fff',
      }} />
    </Box>
  );
}

export default ChatPage;
