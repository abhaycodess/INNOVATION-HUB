import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import authService from './services/authService';
import { pingBackend } from './services/pingService';
import HomePage from './pages/HomePage';
import FriendsPage from './pages/FriendsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreatePostPage from './pages/CreatePostPage'; // Changed from SubmitIdeaPage
import LandingPage from './pages/LandingPage';
import UserDashboard from './pages/UserDashboard';
// Placeholder About and Profile pages
const AboutPage = () => <div style={{padding: 40}}><h2>About Us</h2><p>Info about the platform.</p></div>;
const ProfilePage = () => <div style={{padding: 40}}><h2>Your Profile</h2><p>Profile details here.</p></div>;

function App() {
  React.useEffect(() => {
    // On app load, ping backend. If unavailable, log out user.
    (async () => {
      const ok = await pingBackend();
      if (!ok) {
        authService.logout();
      }
    })();
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/feed" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create-post" element={<CreatePostPage />} /> {/* Changed path */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </div>
  )
}

export default App