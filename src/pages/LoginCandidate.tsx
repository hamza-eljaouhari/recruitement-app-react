import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../services/api';
import { useAuth } from '../context/AuthContext';

const LoginCandidate: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', { email, password });
      login(response.data.token, 'candidate');
      navigate('/candidate/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4 p-16 ">
      <h2 className="text-2xl mb-4">Candidate Login</h2>
      <div className="mb-4">
        <label className="block text-black">Email</label>
        <input
          type="email"
          className="mt-1 block w-full border-1 bg-gray-100 border-gray-600 rounded text-black p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-black">Password</label>
        <input
          type="password"
          className="mt-1 block w-full border-1 bg-gray-100 border-gray-600 rounded text-black p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="bg-blue-300 text-black py-2 px-4 rounded">Login</button>
    </form>
  );
};

export default LoginCandidate;
