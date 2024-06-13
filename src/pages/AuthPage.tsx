import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { decodeToken } from '../utils/decodeToken';
import LoginCandidate from './LoginCandidate';
import LoginRecruiter from './LoginRecruiter';
import RegisterCandidate from './RegisterCandidate';
import RegisterRecruiter from './RegisterRecruiter';
import { useAuth } from '../context/AuthContext';

interface AuthPageProps {
  mode: 'login' | 'register';
}

const AuthPage: React.FC<AuthPageProps> = ({ mode }) => {
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

  const [isCandidate, setIsCandidate] = React.useState(true);

  const handleToggle = () => {
    setIsCandidate(!isCandidate);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <div className="w-full max-w-md p-6 rounded shadow-md bg-gray-800">
        <div className="w-full max-w-md mb-4 flex items-center justify-center">
          <button
            onClick={handleToggle}
            className="bg-white text-gray-800 py-2 px-4 rounded"
          >
            {isCandidate ? 'Switch to Recruiter' : 'Switch to Candidate'}
          </button>
        </div>
        {mode === 'login' ? (
          isCandidate ? <LoginCandidate /> : <LoginRecruiter />
        ) : (
          isCandidate ? <RegisterCandidate /> : <RegisterRecruiter />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
