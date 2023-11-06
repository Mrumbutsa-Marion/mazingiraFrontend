import React, { useState } from 'react';
import './Signin.css';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the submission or validation can be added here
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

                <p className="signup-link">Create account? <span>Sign up</span></p>
            </form>
        </div>
    </div>
);
}

export default Signin;