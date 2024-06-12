import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../services/api';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/register', { name, email, password });
      // Handle the response if necessary
      console.log(response.data);
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="mt-1 block w-full border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;
