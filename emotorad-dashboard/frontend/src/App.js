// App.js
import React, { useEffect, useState } from 'react';
import AuthButton from './components/AuthButton';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Code to handle Google OAuth response and fetch user details
  }, []);

  return (
    <div>
      {!user ? <AuthButton /> : <Profile user={user} />}
      <Dashboard />
    </div>
  );
};

export default App;
