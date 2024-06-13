import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface PublicRouteProps {
  element: React.ReactElement;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ element }) => {
  const { isAuthenticated, userType } = useAuth();

  if (isAuthenticated) {
    if (userType === 'candidate') {
      return <Navigate to="/candidate/dashboard" />;
    } else if (userType === 'recruiter') {
      return <Navigate to="/recruiter/dashboard" />;
    }
  }

  return element;
};

export default PublicRoute;
