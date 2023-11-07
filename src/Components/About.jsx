import React, { useEffect } from 'react';
import ourabout from '../assets/ourabout.png';
import pepleuni from '../assets/pepleuni.png';
import '../App.css'
const About = () => {


return (
    <>
    <div class="header-two">
    <img src={pepleuni} alt='contactmmm' className='aboutclass' style={{ width: "100%" ,  height: "auto" }}/>


</div>

<div class="about-container">

   <div class="about">

      <div class="left">
         <h1>Who We Are</h1>
         <hr/>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      </div>
      <div class="right">
         <img src="https://res-console.cloudinary.com/dqnofyo7r/thumbnails/v1/image/upload/v1699305818/c2FtcGxlcy9sYW5kc2NhcGVzL25hdHVyZS1tb3VudGFpbnM=/as_is"/>
      </div>
      <div class="clear"></div>
   </div>

<div class="mission">

  <div class="left">
     <img src="https://res-console.cloudinary.com/dqnofyo7r/thumbnails/v1/image/upload/v1699305814/c2FtcGxlcy9sYW5kc2NhcGVzL2JlYWNoLWJvYXQ=/as_is"/>
  </div>
  <div class="right">
    <h1>Mission Statement</h1>
    <hr/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

  </div>
<div class="clear"></div>

</div>
<div class="team">
      <h1> Our Team
         <hr/>
      </h1>

      


   </div>

    /</div>
    </>
  );
};

export default About;

