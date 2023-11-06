import React from 'react';
import Signin from './Signin'; // Update the import statement for Signin
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './NavBar';
import Home from './Components/Home';
import Donate from './Components/Donate';
import Organization from './Components/Organization';
import About from './Components/About';
import ContactUs from './Components/ContactUs';

function App() {
  return (

    <div>
      <Signin />
    </div>
  );
=======
    <>
     <BrowserRouter>
     <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/About" element={<About />} />
        <Route path="/Organization" element={<Organization />} />
        <Route path="/ContactUs" element={<ContactUs />} />

      </Routes>
     </div>
      </BrowserRouter>
    </>

}

export default App;
