import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface PrivateRouteProps {
  role: 'candidate' | 'recruiter';
  element: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ role, element }) => {
  const { isAuthenticated } = useAuth();
  const userRole = localStorage.getItem('role');

  if (!isAuthenticated || userRole !== role) {
    return <Navigate to="/auth/login" />;
  }

  return element;
};

export default PrivateRoute;
