import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from '../src/assets/logo.png'; 
import callus from '../src/assets/callus.png'; 
import Email from '../src/assets/Email.png';
import greenwhite from '../src/assets/greenwhite.png';
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="image-container">
          <img src={logo} alt='Logo'/>
          <img src={callus} alt='callus'/>
          <img src={Email} alt='Email'/>

        </div>
        <li className="navbar-item">
            <Link to="/signup">Signup</Link>
          </li>
      </div>

      <nav className='navigation'>
      <img src={greenwhite} alt='greenwhite'/>


        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/organization">Organization</Link>
          </li>
          <li className="navbar-item">
            <Link to="/donate">Donate</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="navbar-item">
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
        <a href="">Donate</a>
      </nav>
      
    </>
  );
}

export default Navbar;
