import React, { useState } from 'react';
import Switch from 'react-switch';
import LoginCandidate from './LoginCandidate';
import LoginRecruiter from './LoginRecruiter';
import RegisterCandidate from './RegisterCandidate';
import RegisterRecruiter from './RegisterRecruiter';

const AuthPage: React.FC<{ mode: 'login' | 'register' }> = ({ mode }) => {
  const [isRecruiter, setIsRecruiter] = useState(false);

  const handleToggle = () => {
    setIsRecruiter(!isRecruiter);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded shadow-md">

        <div className="w-full max-w-md flex items-center justify-start mx-16">
          <label className="text-black">
            Candidate
          </label>
          <Switch
            checked={isRecruiter}
            onChange={handleToggle}
            offColor="#888"
            onColor="#4CAF50"
            checkedIcon={<i></i>}
            uncheckedIcon={<i></i>}
            className="m-2"
          />
          <label className="text-black">
            Recruiter
          </label>
        </div>
        {mode === 'login' ? (
          isRecruiter ? <LoginRecruiter /> : <LoginCandidate />
        ) : (
          isRecruiter ? <RegisterRecruiter /> : <RegisterCandidate />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
