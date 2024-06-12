import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import MyOpportunities from './MyOpportunities';
import SearchOpportunities from './SearchOpportunities';

const CandidateDashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <nav className="w-60 bg-gray-800 p-6">
        <ul>
          <li className="mb-4">
            <Link to="/candidate/profile" className="text-black">Profile</Link>
          </li>
          <li className="mb-4">
            <Link to="/candidate/my-opportunities" className="text-black">My Opportunities</Link>
          </li>
          <li className="mb-4">
            <Link to="/candidate/search-opportunities" className="text-black">Search Opportunities</Link>
          </li>
        </ul>
      </nav>
      <div className="w-3/4 p-6">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-opportunities" element={<MyOpportunities />} />
          <Route path="/search-opportunities" element={<SearchOpportunities />} />
        </Routes>
      </div>
    </div>
  );
};

export default CandidateDashboard;
