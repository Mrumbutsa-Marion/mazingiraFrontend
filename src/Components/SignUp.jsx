import './SignIn.css';
import React, { useState } from 'react';

function SignupForm({ handleSignup, handleLoginForm }) {
  const [user_name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateName = (user_name) => {
    return /^[a-zA-Z\s]+$/.test(user_name);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = () => {
    if (validateEmail(email) && validatePassword(password)) {
      // calling the handleSignup prop function with the form data
      handleSignup({ user_name, email, password });
    } else {
      let errorMessage = '';

    
      if (!validateEmail(email)) {
        errorMessage += 'Please enter a valid email address.\n';
      }

      if (!validatePassword(password)) {
        errorMessage += 'Password should be at least 6 characters long.\n';
      }

      alert(errorMessage.trim());
    }
  };

  return (
    <><div className="signin-container">
      <div className="signin-box">
      <h2>Join Us</h2>
      {/* Signup form JSX */}
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="user_name" value={user_name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>

      <button onClick={handleSubmit}>Sign up</button>
      <p>
        Already have an account? <button onClick={handleLoginForm}>Login</button>
      </p>
      </div>
      </div>
    </>
  );
}

function LoginForm({ handleLogin, handleSignupForm }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Call handleLogin prop function with the form data
    handleLogin({ email, password });
  };

  return (
    <>
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>

      <button onClick={handleSubmit}>Login</button>
      <p>
        Don't have an account? <button onClick={handleSignupForm}>Sign up</button>
      </p>
    </>
  );
}

function SignUp() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleSignup = (formData) => {
    fetch('http://127.0.0.1:5001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          
          alert('You have successfully signed up!');
          window.location.href = '/'; // Redirect to the home page or any other desired page
        } else {
          
          throw new Error('Signup failed'); // Throw a specific error message for signup failure
        }
      })
      .catch((error) => {
        
        alert('Signup failed. Please check your inputs and try again.'); 
      });
  };
  
  
  
  
  
  

  const handleLogin = (formData) => {
    fetch('http://127.0.0.1:5001/com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          // Use this to redirect to success page or perform any other actions upon successful login
          alert('You have successfully logged in!');
          window.location.href = '/';
        } else {
          throw new Error('Login failed');
        }
      })
      .catch((error) => {
        alert('An error occurred while logging in. Please try again.');
      });
  };

  const handleLoginForm = () => {
    setShowLoginForm(true);
  };

  const handleSignupForm = () => {
    setShowLoginForm(false);
  };

  return (
    <div className="signup-container">
      {showLoginForm ? (
        <LoginForm handleLogin={handleLogin} handleSignupForm={handleSignupForm} />
      ) : (
        <SignupForm handleSignup={handleSignup} handleLoginForm={handleLoginForm} />
      )}

      <button onClick={() => window.history.back()}>Back</button>
    </div>
    
  );
}

export default SignUp;

