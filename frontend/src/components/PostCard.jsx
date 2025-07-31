import { Card, CardHeader, Avatar, IconButton, CardContent, Typography, Box, CardActions } from '@mui/material';
import { Fade } from "react-awesome-reveal";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ShareIcon from '@mui/icons-material/Share';

const PostCard = ({ post }) => {
  return (
    <Fade bottom triggerOnce>
      <Card sx={{ mb: 3 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'primary.main' }} aria-label="user-avatar">
              {post.author ? post.author.username.charAt(0).toUpperCase() : '?'}
            </Avatar>
          }
          action={<IconButton aria-label="share"><ShareIcon /></IconButton>}
          title={post.author ? post.author.username : 'Anonymous'}
          subheader={new Date(post.createdAt).toLocaleString()}
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            {post.content}
          </Typography>
          {post.imageUrl && (
            <Box sx={{ mt: 2, borderRadius: 2, overflow: 'hidden' }}>
              <img src={post.imageUrl} alt="Post content" style={{ maxWidth: '100%', display: 'block' }} />
            </Box>
          )}
        </CardContent>
        <CardActions disableSpacing>
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
