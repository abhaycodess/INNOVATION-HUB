import { Routes, Route } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import Navbar from './components/Navbar';
import { UserContext } from './contexts/UserContext';
import authService from './services/authService';
import axios from './axios';
import HomePage from './pages/HomePage';
import UserHomePage from './pages/UserHomePage';
import { Navigate } from 'react-router-dom';
import FriendsPage from './pages/FriendsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreatePostPage from './pages/CreatePostPage';
import LandingPage from './pages/LandingPage';
import UserDashboard from './pages/UserDashboard';
import ChatPage from './pages/ChatPage';
// Placeholder About and Profile pages
const AboutPage = () => <div style={{padding: 40}}><h2>About Us</h2><p>Info about the platform.</p></div>;
const SettingsPage = () => <div style={{padding: 40}}><h2>Settings</h2><p>Settings details here.</p></div>;

function App() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    const token = authService.getToken();
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, [user]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Navigate to="/user-home" replace /> : <LandingPage />} />
        <Route path="/user-home" element={<UserHomePage />} />
        <Route path="/feed" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  )
}

export default App