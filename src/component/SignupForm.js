import React, { useState } from 'react';

const SignupForm = ({ toggleForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || email.trim() === '') {
      setError('Please fill in all fields.');
      setSuccessMessage('');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setSuccessMessage('');
      return;
    }
    // Implement signup logic here
    // Assuming signup logic is successful
    setSuccessMessage('Signup is successful.');
    setError('');
    // Clear form fields after successful signup
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
      <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <button type="submit">Signup</button><br />
      <button type="button" onClick={toggleForm}>Switch to Login</button>
    </form>
  );
};

export default SignupForm;
