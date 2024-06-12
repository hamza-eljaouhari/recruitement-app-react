import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-gray-800 px-96 py-4 text-white flex justify-between">
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          {isAuthenticated && (
            <>
              <li><Link to="/candidate/dashboard">Dashboard</Link></li>
            </>
          )}
        </ul>
      </nav>
      {!isAuthenticated ? (
        <div>
          <Link to="/auth/login" className="mr-4">Login</Link>
          <Link to="/auth/register">Register</Link>
        </div>
      ): (
        <div>
          <li><button onClick={logout}>Logout</button></li>
        </div>
      )}
    </header>
  );
};

export default Header;
