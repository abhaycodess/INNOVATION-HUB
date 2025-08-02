import { Card, CardHeader, Avatar, IconButton, CardContent, Typography, Box, CardActions } from '@mui/material';
import { motion } from 'framer-motion';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ShareIcon from '@mui/icons-material/Share';

const PostCard = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card sx={{
        mb: 3,
        borderRadius: 4,
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        background: '#ffffff',
        maxWidth: 600,
        mx: 'auto',
        p: 1,
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
        }
      }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'primary.main', width: 48, height: 48, fontSize: 22 }} aria-label="user-avatar">
              {post.author ? post.author.username.charAt(0).toUpperCase() : '?'}
            </Avatar>
          }
          action={<IconButton aria-label="share"><ShareIcon /></IconButton>}
          title={<Typography variant="subtitle1" sx={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: 20 }}>{post.author ? post.author.username : 'Anonymous'}</Typography>}
          subheader={<Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'Inter, sans-serif' }}>{new Date(post.createdAt).toLocaleString()}</Typography>}
          sx={{ pb: 0 }}
        />
        <CardContent sx={{ pt: 1 }}>
          <Typography variant="body1" color="text.primary" sx={{ mb: 1, fontFamily: 'Inter, sans-serif', fontSize: 16 }}>
            {post.content}
          </Typography>
          {post.imageUrl && (
            <Box sx={{ mt: 2, borderRadius: 3, overflow: 'hidden' }}>
              <img src={post.imageUrl} alt="Post content" style={{ width: '100%', maxHeight: 400, objectFit: 'cover', borderRadius: 16 }} />
            </Box>
          )}
          {post.videoUrl && (
            <Box sx={{ mt: 2, borderRadius: 3, overflow: 'hidden' }}>
              <video src={post.videoUrl} controls style={{ width: '100%', maxHeight: 400, borderRadius: 16 }} />
            </Box>
          )}
        </CardContent>
        <CardActions disableSpacing sx={{ px: 2, pb: 1 }}>
          <IconButton aria-label="like">
            <ThumbUpOutlinedIcon />
          </IconButton>
          <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Inter, sans-serif' }}>{post.likes.length}</Typography>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default PostCard;
