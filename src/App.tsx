import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import CandidateDashboard from './pages/CandidateDashboard';
import RecruiterDashboard from './pages/RecruiterDashboard';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/auth/login" element={<AuthPage mode="login" />} />
        <Route path="/auth/register" element={<AuthPage mode="register" />} />
        <Route path="/candidate/dashboard" element={<PrivateRoute role="candidate" element={CandidateDashboard} />} />
        <Route path="/recruiter/dashboard" element={<PrivateRoute role="recruiter" element={RecruiterDashboard} />} />
        <Route path="/" element={<Navigate to="/auth/login" />} />
      </Routes>
    </div>
  );
};

export default App;
