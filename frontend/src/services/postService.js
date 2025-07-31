import axios from 'axios';
import authService from './authService';

// The base URL for all post-related API calls
const API_URL = 'http://localhost:8080/api/posts';

// Function to get all posts
const getAllPosts = () => {
  return axios.get(API_URL);
};

// Function to create a new post
const createPost = (postData) => {
  const user = authService.getCurrentUser();
  const token = user ? user.token : null;

  if (!token) {
    return Promise.reject('You must be logged in to create a post.');
  }

  return axios.post(API_URL, postData, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
};

const postService = {
  getAllPosts,
  createPost,
};

export default postService;