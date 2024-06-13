import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface PrivateRouteProps {
  role: 'candidate' | 'recruiter';
  element: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ role, element }) => {
  const { isAuthenticated, userType } = useAuth();

  if (!isAuthenticated || userType !== role) {
    return <Navigate to="/auth/login" />;
  }

  return element;
};

export default PrivateRoute;
