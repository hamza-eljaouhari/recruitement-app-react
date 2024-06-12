import React, { useState, useEffect } from 'react';
import axios from '../services/api';

const Profile: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState('');
  const [training, setTraining] = useState('');
  const [skills, setSkills] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Calculate profile completion progress
    let completedFields = 0;
    const totalFields = 4;

    if (name) completedFields++;
    if (email) completedFields++;
    if (experience) completedFields++;
    if (training) completedFields++;

    setProgress((completedFields / totalFields) * 100);
  }, [name, email, experience, training]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/candidate/profile', { name, email, experience, training, skills }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
          <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl mb-4">Profile</h2>
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
            <label className="block text-gray-700">Experience</label>
            <textarea
              className="mt-1 block w-full border-gray-300 rounded"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Training</label>
            <textarea
              className="mt-1 block w-full border-gray-300 rounded"
              value={training}
              onChange={(e) => setTraining(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Skills</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Save Profile</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
