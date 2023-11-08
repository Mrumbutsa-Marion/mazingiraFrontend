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
         <p>🌿 Welcome to Mazingira – Where Passion Meets Purpose in the Heart of Environmental Conservation! 🌍

At Mazingira, we are more than just a group; we are a vibrant community of dedicated individuals united by a common goal – safeguarding our planet for future generations. 

With unwavering commitment and boundless enthusiasm, we lead the charge in environmental conservation and sustainable practices.

Imagine a world where lush forests thrive 🌳, oceans teem with life 🐠, and every living being coexists harmoniously 🌏.

 This vision fuels our every endeavor, propelling us to take meaningful actions that resonate across the globe.

  Our mission is clear: to protect, preserve, and rejuvenate the environment, one initiative at a time.

What sets us apart is not just our passion for the environment, but our innovative approach to conservation. 

Through groundbreaking research 📚, community engagement 👥, and hands-on projects 🌱, we tackle environmental challenges head-on.

 From reforestation efforts and wildlife preservation 🦁 to advocating for eco-friendly policies 🌿, we are the driving force behind positive change.

Join us on this exhilarating journey toward a greener, cleaner planet. Together, we can turn the tide and create a world where nature thrives and humanity lives in harmony with the Earth.

 Explore, learn, and collaborate with us at Mazingira – because when it comes to environmental conservation, every action counts.
 
 Together, let's make a difference that will be felt for generations to come. 🌎✨"</p>

         

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
    <p>🌱 At Mazingira, our mission is to champion the cause of environmental conservation with unwavering dedication, innovative solutions, and inclusive community engagement. We strive to protect and preserve the Earth's ecosystems, biodiversity, and natural resources, fostering a sustainable future for all.

🌍 Through education, advocacy, and hands-on initiatives, we empower individuals and communities to embrace eco-friendly practices, reduce their ecological footprint, and actively participate in the preservation of our planet. We are committed to researching, implementing, and promoting sustainable solutions that address pressing environmental issues, ensuring the well-being of current and future generations.

🌿 With a deep sense of responsibility, we work tirelessly to raise awareness about environmental challenges and inspire collective action. By fostering a sense of environmental stewardship, we aim to create a world where the delicate balance between humanity and nature is respected, allowing both to thrive harmoniously.

🌏 Join us in our mission to safeguard the environment, promote sustainability, and create a lasting legacy of conservation. Together, we can make a meaningful impact and pave the way for a greener, healthier planet for all. 🌎✨".</p>

    

  </div>
<div class="clear"></div>

</div>
<div class="team">
<div className="team" style={{ backgroundImage: 'url("src/assets/hands-with plants_1280 1.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100%', height: 'auto', color: 'white' }}>
    {/* Your content here */}
</div>

      <h1> Our Team
         <hr/>
      </h1>
      <h2>
         


Cedrick:

Email: cedrick@mazingira.com
Phone Number: 07023456788
Location: ngong,Nairobi
<br>
</br>
Nashon:

Email: nashon@mazingira.com
Phone Number: 012345678
Location:ngong,Nairobi
<br>
</br>
Miriam:

Email: miriam@mazingira.com
Phone Number: 07456890754
Location: ngong,Nairobi
<br>
</br>

Marion:

Email: marion@mazingira.com
Phone Number: 07689009456
<br>
</br>
Location: ngong,Nairobi
<br>
</br>
Victor:

Email: victor@mazingira.com
Phone Number: 0768945683
<br>
</br>
Location: ngong,Nairobi

</h2>
     

      


   </div>

    /</div>
    </>
  );
};

export default About;
