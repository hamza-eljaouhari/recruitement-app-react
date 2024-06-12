import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface PrivateRouteProps {
  role: 'candidate' | 'recruiter';
  element: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element: Component, role, ...rest }) => {
  const { isAuthenticated } = useAuth();
  const userRole = localStorage.getItem('role');

  if (!isAuthenticated || userRole !== role) {
    return <Navigate to="/auth/login" />;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
