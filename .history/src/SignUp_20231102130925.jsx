// SignUp.jsx

import React from 'react';

const SignUp = () => {
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form className="form">
        <input className="input" type="text" placeholder="Full Name" />
        <input className="input" type="email" placeholder="Email" />
        <input className="input" type="password" placeholder="Password" />
        <button className="button" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
