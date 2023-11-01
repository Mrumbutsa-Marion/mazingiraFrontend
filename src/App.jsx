import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Home from './Components/Home';
import Donate from './Components/Donate';
import Organization from './Components/Organization';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Signin from './Signin'; // Import the Signin component

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/about" element={<About />} />
            <Route path="/organization" element={<Organization />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/signin" element={<Signin />} /> {/* Add Signin route */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
