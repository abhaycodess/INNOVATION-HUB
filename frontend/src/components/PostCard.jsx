
import { Card, CardHeader, Avatar, IconButton, CardContent, Typography, Box, CardActions } from '@mui/material';
import { Fade } from "react-awesome-reveal";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ShareIcon from '@mui/icons-material/Share';

const PostCard = ({ post }) => {
  return (
    <Fade bottom triggerOnce>
      <Card sx={{
        mb: 3,
        borderRadius: 4,
        boxShadow: 3,
        background: '#fff',
        maxWidth: 600,
        mx: 'auto',
        p: 1
      }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'primary.main', width: 48, height: 48, fontSize: 22 }} aria-label="user-avatar">
              {post.author ? post.author.username.charAt(0).toUpperCase() : '?'}
            </Avatar>
          }
          action={<IconButton aria-label="share"><ShareIcon /></IconButton>}
          title={<Typography variant="subtitle1" fontWeight={700}>{post.author ? post.author.username : 'Anonymous'}</Typography>}
          subheader={<Typography variant="caption" color="text.secondary">{new Date(post.createdAt).toLocaleString()}</Typography>}
          sx={{ pb: 0 }}
        />
        <CardContent sx={{ pt: 1 }}>
          <Typography variant="body1" color="text.primary" sx={{ mb: 1, fontSize: 18 }}>
            {post.content}
          </Typography>
          {post.imageUrl && (
            <Box sx={{ mt: 2, borderRadius: 3, overflow: 'hidden', border: '1px solid #eee', background: '#fafbfc' }}>
              <img src={post.imageUrl} alt="Post content" style={{ width: '100%', maxHeight: 400, objectFit: 'cover', borderRadius: 16 }} />
            </Box>
          )}
          {post.videoUrl && (
            <Box sx={{ mt: 2, borderRadius: 3, overflow: 'hidden', border: '1px solid #eee', background: '#fafbfc' }}>
              <video src={post.videoUrl} controls style={{ width: '100%', maxHeight: 400, borderRadius: 16 }} />
            </Box>
          )}
        </CardContent>
        <CardActions disableSpacing sx={{ px: 2, pb: 1 }}>
          <IconButton aria-label="like">
            <ThumbUpOutlinedIcon />
          </IconButton>
          <Typography variant="body2" color="text.secondary">{post.likes.length}</Typography>
        </CardActions>
      </Card>
    </Fade>
  );
};

export default PostCard;
