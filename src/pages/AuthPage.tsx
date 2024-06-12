import React, { useState } from 'react';
import Switch from 'react-switch';
import LoginCandidate from './LoginCandidate';
import LoginRecruiter from './LoginRecruiter';
import RegisterCandidate from './RegisterCandidate';
import RegisterRecruiter from './RegisterRecruiter';

const AuthPage: React.FC<{ mode: 'login' | 'register' }> = ({ mode }) => {
  const [isCandidate, setIsCandidate] = useState(true);

  const handleToggle = () => {
    setIsCandidate(!isCandidate);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 text-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded shadow-md" style={{ marginTop: '50px', marginBottom: '50px' }}>
        <div className="w-full max-w-md mb-4 flex items-center justify-center">
          <Switch
            checked={isCandidate}
            onChange={handleToggle}
            offColor="#888"
            onColor="#4CAF50"
            checkedIcon={<div className="flex items-center justify-center h-full text-sm text-white">Candidate</div>}
            uncheckedIcon={<div className="flex items-center justify-center h-full text-sm text-white">Recruiter</div>}
          />
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
