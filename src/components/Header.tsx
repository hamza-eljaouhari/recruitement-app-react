import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
const logo = require('../assets/logo.png');

const Header: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white shadow-md px-96 py-2 text-black border-b flex justify-between  items-center">
      <div><img src={logo} alt="logo" width={64}></img></div>
      {!isAuthenticated ? (
        <div>
          <Link to="/auth/login" className="mr-4">Login</Link>
          <Link to="/auth/register"  className="mr-4">Register</Link>
        </div>
      ): (
        <div>
          <Link to="/candidate/dashboard"  className="mr-4">Dashboard</Link>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </header>
  );
};

export default Header;
