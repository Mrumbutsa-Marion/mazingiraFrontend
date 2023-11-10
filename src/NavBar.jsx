import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from '../src/assets/logo.png';
import callus from '../src/assets/callus.png';
import Email from '../src/assets/Email.png';
import location from '../src/assets/location.png';

function Navbar() {
  const handleRegistrationClick = () => {
    window.location.href = "/registration";
  };

  return (
    <>
      <div className="nav-container">
        <div className="navbar">
          <div className="image-container">
            <img src={logo} alt='Logo'/>
            <img src={callus} alt='callus'/>
            <img src={Email} alt='Email'/>
            <img src={location} alt='location'/>
           
          </div>
          <button className="Register" onClick={handleRegistrationClick}>
              Register your Environmental Organization
            </button>
        </div>

        <nav className='navigation'>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about">About</Link>
            </li>
            <li className="navbar-item">
              <Link to="/organizations">Organizations</Link>
            </li>
            <li className="navbar-item">
              <Link to="/donate">Donate</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="navbar-item">
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;