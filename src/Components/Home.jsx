import React, { useEffect } from 'react';
import elephant from '../assets/elephant.png';
import world from '../assets/world.png';
import energy from '../assets/energy.png';
import farms from '../assets/farms.png';
import logo from '../assets/logo.png';

import '../App.css'
const Home = () => {
  useEffect(() => {
    let slideIndex = 0;
    const showSlides = () => {
      let i;
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      setTimeout(showSlides, 4000); // Change image every 4 seconds
    };
    showSlides();
  }, []);

  return (
    <>
    <div className='home'>
    
      <div className="container1">
        <div className="slideshow-container">
          <div className="mySlides fade">
          <img src={elephant} alt='elephant' style={{ width: "100%" }}/>
          </div>

          <div className="mySlides fade">
          <img src={world} alt='world' style={{ width: "100%" }}/>
          </div>

          <div className="mySlides fade">
          <img src={energy} alt='energy' style={{ width: "100%" }}/>
          </div>

          <div className="mySlides fade">
          <img src={farms} alt='farms' style={{ width: "100%" }}/>
          </div>
        </div>
        <br />

        <div style={{ textAlign: "center" }}>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
      <p>" <h1 style={{
  fontFamily: 'Arial, sans-serif',
  fontSize: '36px',
  fontWeight: 'bold',
  color: '#4CAF50',
  textAlign: 'center',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
}}>
  Welcome to <span style={{ fontStyle: 'italic' }}>Mazingira</span>: Empowering Environmental Champions! 🌿
</h1>


      <br></br>

      "Discover the Power of Green 🌱, Act Locally, Impact Globally 🌎.
       Uniting for a Greener Tomorrow 🌿, Conservation in Action 🦋, Your Planet, Your Responsibility 🌍.
        Join the Green Revolution! 🌳, Transforming Passion into Planet-saving Action 💚.
         Be the Change Nature Needs 🌼, Together, Let's Preserve Paradise! 🌏.
         Eco-conscious Living Starts Here 🌱, Every Step Counts, Every Choice Matters 🌍. 
         Inspiring Eco Warriors Worldwide! 🌎 . 
         Embrace Nature, Embrace Life 🍃. 
          Where Sustainability Meets Community 🌱, Let's Build a Greener Future, Together! 🌿.    
          Nurturing Nature, Nurturing Futures 🌍, Be the Voice Mother Earth Needs 🌎, Eco-Friendly Living Made Easy!  
           Take a Stand for the Planet! 🌍"
<br>
</br>
<br>
</br><br>
</br><br>
</br><br>
</br><br>
</br><br>
</br>
</p>



<h2>
Budgeting for animal provisions (food, shelter, medical care)

plants = sustainable ecosystem 🌱🐾
#SaveAnimals</h2>
<br>
</br><br>
</br>

<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
  <div style={{ backgroundColor: '#cfe2d4', padding: '10px', textAlign: 'center', marginRight: '10px' }}>
    Partners
  </div>
  <img
    className="rectangle-54"
    alt="Rectangle 54"
    src="src/assets/WED_-_Main.png"
    style={{
      width: '319.297px',
      height: '189.317px',
      flexShrink: 0,
      marginRight: '10px' // Adjust the spacing between the images as needed
    }}
  />
  <div style={{ backgroundColor: '#cfe2d4', padding: '10px', textAlign: 'center', marginRight: '10px' }}>
    Permits
  </div>
  <img
    className="rectangle-51"
    alt="Rectangle 51"
    src="src/assets/mqdefault.jpg"
    style={{
      width: '319.297px',
      height: '189.317px',
      flexShrink: 0,
      marginRight: '10px' // Adjust the spacing between the images as needed
    }}
  />
  <div style={{ backgroundColor: '#cfe2d4', padding: '10px', textAlign: 'center' }}>
    Recycle
  </div>
  <img
    className="rectangle-60"
    alt="Rectangle 60"
    src="src/assets/zero-carbon-emmision1.jpg"
    style={{
      width: '319.297px',
      height: '189.317px',
      flexShrink: 0
    }}
  />
</div>











   <br>
   </br>  
   <br>
   </br> <br>
   </br> <br>
   </br> <br>
   </br> <br>
   </br> <br>
   </br> 
   <div className="your-container">
  <h1>Do You Care Our Mother Earth Like We Do?</h1>

  <br></br>
  <br></br>
  <br></br>
  <div style={{ marginLeft: '20px' }}>
    <div style={{ color: '#000', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
      $920,000 FUNDS RAISED BY 1200 PEOPLE
    </div>
    <div style={{ color: '#73B925', fontFamily: 'Inter', fontSize: '40px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
      $920,000
    </div>
    <div style={{ color: '#73B925', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
      FUNDS RAISED BY 1200 PEOPLE
    </div>
  </div>

  
  <img
    className="hands-with-plants"
    alt="Hands with plants"
    src="src/assets/hands-with plants_1280 1.png"
    style={{
      width: '864.43px',
      height: '347.642px',
      flexShrink: 0,
    }}
  />
  <h2>
    Environmental degradation is the disintegration of the earth or deterioration of the environment through the consumption of assets, for example, air, water, and soil; the destruction of environments and the eradication of wildlife. It is characterized as any change or aggravation to nature’s turf seen to be pernicious or undesirable. This process leads to the endangerment of the human race; however, there are limited resources to help combat this at this time.
  </h2>
  
</div>



   <br>
   </br>
   <br>
   </br>



        <div class="bottom-page">
        <ul>
            <li><a href=""> <img src={logo} alt='Logo'/> </a></li>
            <li>A small river named Duden flows by </li>
            <li> place and supplies it with the</li>
            <li>ecessary regelialia.</li>
            
        </ul>
        <ul>
            <li><a href="">Services</a></li>
            <li>Recycling</li>
            <li>Our missions</li>
            <li>Water Refine</li>
            <li>Ecosystem</li>
            <li>Solar Enerfy</li>
        </ul>


        <ul>
            <li><a href="">Policies</a></li>
            <li>Privacy Policy</li>
            <li>FAQS</li>
            <li>Anti-fraud Disclaimer</li>
            <li>Refund Policy</li>
            <li>Payment</li>
        </ul>
        <ul>
            <li><a href="">Have a Question?</a></li>
            <li>Privacy Policy</li>
            <li>FAQS</li>
            <li>Anti-fraud Disclaimer</li>
            <li>Refund Policy</li>
            <li>Payment</li>
        </ul>
        <iframe/>
        
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8413321289895!2d36.8354996759388!3d-1.2679863987199562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f16c483160879%3A0x47be8b9b082e0ab3!2sKCDF%20House!5e0!3m2!1sen!2ske!4v1699301605480!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/> */}
       
    </div>

         <div class="footer">
                <div class="logo">
                    <div class="copyright">
                        <p> Copyright © 2017 All Rights Reserved by Scanfcode_ 2023_Mazingirae_</p>
                    </div>
                   
                </div>

            </div>

    </div>
    </>
  );
};

export default Home;
