import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaBars, FaTimes } from 'react-icons/fa';
const logo = require('../assets/logo.png');

const Header: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md px-4 md:px-96 py-2 text-black border-b flex justify-between items-center">
      <Link to="/">
        <img src={logo} alt="logo" className="h-16" />
      </Link>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`flex-col md:flex-row md:flex md:items-center ${menuOpen ? 'flex' : 'hidden'} md:block`}>
        {!isAuthenticated ? (
          <>
            <Link to="/auth/login" className="mr-4">Login</Link>
            <Link to="/auth/register" className="mr-4">Register</Link>
          </>
        ) : (
          <>
            <Link to="/candidate/dashboard" className="mr-4">Dashboard</Link>
            <button onClick={logout} className="mr-4">Logout</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
