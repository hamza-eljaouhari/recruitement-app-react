import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../services/api';
import { FaGoogle, FaLinkedin } from 'react-icons/fa';

const RegisterRecruiter: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/register/recruiter', { name, email, password });
      // Handle successful registration
      navigate('/auth/login');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/google';
  };

  const handleLinkedInLogin = () => {
    window.location.href = 'http://localhost:3000/auth/linkedin';
  };

  return (
    <div className="flex items-center justify-center text-gray-800">
      <form onSubmit={handleRegister} className="p-8 rounded w-full max-w-md">
        <p className="text-2xl mb-6 text-center">Join us!</p>
        <div className="mb-4">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full py-2 px-4 bg-white text-gray-800 rounded border-gray-600 border-2"
          >
            <FaGoogle className="mr-2" />
            Continue with Google
          </button>
        </div>
        <div className="mb-4">
          <button
            type="button"
            onClick={handleLinkedInLogin}
            className="flex items-center justify-center w-full py-2 px-4 bg-white text-gray-800 rounded border-gray-600 border-2"
          >
            <FaLinkedin className="mr-2" />
            Continue with LinkedIn
          </button>
        </div>
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-600"></div>
          <span className="flex-shrink px-4 text-gray-800">or enter your details</span>
          <div className="flex-grow h-px bg-gray-600"></div>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-800">Name</label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full bg-white border-gray-600 rounded text-gray-800 p-2 border-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-800">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full bg-white border-gray-600 rounded text-gray-800 p-2 border-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-800">Password</label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full bg-white border-gray-600 rounded text-gray-800 p-2 border-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-gray-800 rounded">Register</button>
        <p className="mt-4 text-center text-gray-800">
          Already have an account? <a href="/auth/login" className="text-blue-400">Sign in</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterRecruiter;
