import React, { useState } from 'react';
import Header from './Header'; 
import Footer from './Footer'; 
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <Header />
      {showLogin ? (
        <LoginForm onSwitchToSignup={() => setShowLogin(false)} />
      ) : (
        <SignupForm onSwitchToLogin={() => setShowLogin(true)} />
      )}
      <Footer />
    </div>
  );
};

export default LoginPage;
