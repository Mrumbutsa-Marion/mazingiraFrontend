import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <p className="forgot">Forgot?</p>

          <button type="submit">Sign in</button>
          <p>or</p>
          <button className="google-signin">Sign in with Google</button>

         
          <p className="signup-link">
            Already have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
