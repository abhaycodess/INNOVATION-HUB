import axios from 'axios';

export const pingBackend = async () => {
  try {
    // Use a public endpoint that always exists
    await axios.get('http://localhost:8080/api/auth/login');
    return true;
  } catch {
    return false;
  }
};
