import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from '../src/assets/logo.png'; 
import callus from '../src/assets/callus.png'; 
import Email from '../src/assets/Email.png';
import location from '../src/assets/location.png';
function Navbar() {
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
       
      </div>

      <nav className='navigation'>
      {/* <img src={greenwhite} alt='greenwhite'/> */}


        <ul className="navbar-list">
          <a className="navbar-item">
            <Link to="/">Home</Link>
          </a>
          <a className="navbar-item">
            <Link to="/about">About</Link>
          </a>
          <a className="navbar-item">
            <Link to="/Organizations">Organizations</Link>
          </a>
          <a className="navbar-item">
            <Link to="/donate">Donate</Link>
          </a>
          <a className="navbar-item">
            <Link to="/contact">Contact</Link>
          </a>
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