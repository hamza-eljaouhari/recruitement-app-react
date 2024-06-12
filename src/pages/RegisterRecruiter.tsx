import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../services/api';

const RegisterRecruiter: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', { name, email, password, type: 'recruiter' });
      navigate('/auth/login');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4 p-16">
      <h2 className="text-2xl mb-4">Recruiter Register</h2>
      <div className="mb-4">
        <label className="block text-black">Name</label>
        <input
          type="text"
          className="mt-1 block w-full border-1 bg-gray-100 border-gray-600 rounded text-black p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
      <button type="submit" className="bg-blue-300 text-black py-2 px-4 rounded">Register</button>
    </form>
  );
};

export default RegisterRecruiter;
