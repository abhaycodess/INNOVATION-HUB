import { createContext, useState, useEffect } from 'react';
import { getCurrentUser } from '../services/authService';

export const UserContext = createContext();


const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => getCurrentUser());

  useEffect(() => {
    const syncUser = () => {
      const storedUser = getCurrentUser();
      setUser(storedUser);
    };
    window.addEventListener('storage', syncUser);
    syncUser();
    return () => window.removeEventListener('storage', syncUser);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
