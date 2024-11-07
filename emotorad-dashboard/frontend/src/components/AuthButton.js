// AuthButton.js
import React from 'react';

const AuthButton = () => {
  const handleLogin = () => {
    window.open(`https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=http://localhost:3000&response_type=token`, '_self');
  };

  return <button onClick={handleLogin}>Login with Google</button>;
};

export default AuthButton;
