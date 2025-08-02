import { createContext, useState } from 'react';
import { getCurrentUser } from '../services/authService';

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => getCurrentUser());

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
