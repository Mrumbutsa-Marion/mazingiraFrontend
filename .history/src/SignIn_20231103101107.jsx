import React from "react";
import "./Signin.css"; // Make sure the path is correct

const Signin = () => {
  return (
    <div className="signin-container">
      <div className="signin-content">
        <div className="background-image"></div>
        <div className="form">
          <h2>Sign In</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
