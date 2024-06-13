import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { decodeToken } from './utils/decodeToken';
import AuthPage from './pages/AuthPage';
import CandidateDashboard from './pages/CandidateDashboard';
import RecruiterDashboard from './pages/RecruiterDashboard';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Header from './components/Header';
import { useAuth } from './context/AuthContext';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      const decoded = decodeToken(token);
      login(token, decoded.type);
      if (decoded.type === 'candidate') {
        navigate('/candidate/dashboard');
      } else {
        navigate('/recruiter/dashboard');
      }
    }
  }, [location, login, navigate]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/auth/login" element={<AuthPage mode="login" />} />
        <Route path="/auth/register" element={<AuthPage mode="register" />} />
        <Route path="/candidate/dashboard" element={<PrivateRoute role="candidate" element={<CandidateDashboard />} />} />
        <Route path="/recruiter/dashboard" element={<PrivateRoute role="recruiter" element={<RecruiterDashboard />} />} />
        <Route path="/" element={<PublicRoute element={<HomePage />} />} />
      </Routes>
    </div>
  );
};

export default App;
