import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

// Save user and token to localStorage after successful login
export const saveUser = (user, token) => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', token);
};

// Remove user and token from localStorage on logout
export const clearUser = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

// Get the user object from localStorage
export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

// Get token from localStorage
export const getToken = () => {
  return localStorage.getItem('token');
};

const register = (username, email, password) => {
  return axios.post(API_URL + 'register', {
    username,
    email,
    password,
  });
};

const login = async (username, password) => {
  const response = await axios.post(API_URL + 'login', { username, password });
  if (response.data.token) {
    const user = {
      id: response.data.id,
      username: response.data.username,
      email: response.data.email,
      profilePic: response.data.profilePic,
    };
    saveUser(user, response.data.token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
  }
  return response.data;
};

const logout = () => {
  clearUser();
  delete axios.defaults.headers.common['Authorization'];
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
  getToken,
};

export default authService;