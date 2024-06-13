import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  userType: 'candidate' | 'recruiter' | null;
  login: (token: string, role: 'candidate' | 'recruiter') => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userType, setUserType] = useState<'candidate' | 'recruiter' | null>(null);

  const login = (token: string, role: 'candidate' | 'recruiter') => {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    setIsAuthenticated(true);
    setUserType(role);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setIsAuthenticated(false);
    setUserType(null);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role') as 'candidate' | 'recruiter';
    if (token && role) {
      setIsAuthenticated(true);
      setUserType(role);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
