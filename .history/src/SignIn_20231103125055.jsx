// SignIn.jsx
import React from "react";
import "./Signin.css";

const Signin = () => {
  return (
    <div className="signin-container">
      <div className="signin-content">
        {/* Add your content here */}
        <h2>Sign In</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button className="action-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
