import React from 'react';
import './SignUp.css'; // Make sure to import your CSS file

function SignUp() {
  return (
    <div className="page">
      <form className="centered-form">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="action-button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
