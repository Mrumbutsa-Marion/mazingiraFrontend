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
      setTimeout(showSlides, 4000); 
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
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{
  fontFamily: 'black',
  fontSize: '36px',
  fontWeight: 'bold',
  color: 'black',
  textAlign: 'center',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' 
}}>
  Welcome to Mazingira<br></br> Empowering Environmental Champions! 🌿
</h1>

  <br>
  </br>
  <br>
  </br>
  <br>
  </br>

 


</div>





<h2 style={{
  fontSize: '24px',
  fontWeight: 'bold',
  color: 'black',
  textAlign: 'center',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', 
  whiteSpace: 'nowrap', 
  overflow: 'hidden', 
  textOverflow: 'ellipsis' 
}}>
 
</h2>

<br>
</br><br>
</br>
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', justifyContent: 'space-evenly', alignItems: 'center', textAlign: 'center' }}>
<div style={{ position: 'relative' }}>
  <div style={{ position: 'absolute', top: '-35px', left: '0', right: '0', backgroundColor: '#73B925', padding: '10px', width: '319.297px', margin: '0 auto' }}>
      Partners
    </div>
    <img
      className="rectangle-54"
      alt="Rectangle 54"
      src="src/assets/WED_-_Main.png"
      style={{
        width: '319.297px',
        height: '239.476px', 
      }}
    />
       <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        Engage with environmental organizations and businesses for a greener future. 
        <span role="img" aria-label="earth">🌍</span>
        <span role="img" aria-label="seedling">🌱</span>
        <span role="img" aria-label="sunflower">🌻</span>
      </p>
  </div>
  <div style={{ position: 'relative' }}>
  <div style={{ position: 'absolute', top: '-35px', left: '0', right: '0', backgroundColor: '#73B925', padding: '10px', width: '319.297px', margin: '0 auto' }}>
      Permits
    </div>
    <img
      className="rectangle-51"
      alt="Rectangle 51"
      src="src/assets/mqdefault.jpg"
      style={{
        width: '319.297px',
        height: '239.476px', 
      }}
    />
    <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        Explore eco-friendly permits and regulations for sustainable practices. 
        <span role="img" aria-label="seedling">🌱</span>
        <span role="img" aria-label="recycle">♻️</span>
        <span role="img" aria-label="earth">🌍</span>
      </p>
  </div>
  <div style={{ position: 'relative' }}>
  <div style={{ position: 'absolute', top: '-35px', left: '0', right: '0', backgroundColor: '#73B925', padding: '10px', width: '319.297px', margin: '0 auto' }}>
      Recycle
    </div>
    <img
      className="rectangle-60"
      alt="Rectangle 60"
      src="src/assets/zero-carbon-emmision1.jpg"
      style={{
        width: '319.297px',
        height: '239.476px', 
      }}
    />
     <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        Learn about recycling programs and how to reduce your carbon footprint.
        <span role="img" aria-label="recycle">♻️</span>
        <span role="img" aria-label="seedling">🌱</span>
        <span role="img" aria-label="footprint">👣</span>
      </p>
  </div>
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
   <h1 style={{
  fontSize: '36px',
  fontWeight: 'bold',
  color: 'black',
  textAlign: 'center',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', 
  whiteSpace: 'nowrap',
  overflow: 'hidden', 
  textOverflow: 'ellipsis' 
}}>
  Hi Yes You !!!!  Did You Know That ?
</h1>
<br></br>
<br></br>
<br></br>
<h2 style={{
  fontFamily: 'Arial, sans-serif', 
  fontSize: '20px', 
  fontWeight: 'normal', 
  color: '#333',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', 
  lineHeight: '1.5', 
  textAlign: 'center'
}}>
   Environmental degradation is the disintegration of the earth or deterioration of the environment<br />
  through the consumption of assets, for example, air, water, and soil; the destruction of environments<br />
  and the eradication of wildlife. It is characterized as any change or aggravation to nature’s turf seen<br />
  to be pernicious or undesirable. This process leads to the endangerment of the human race; however, there<br />
  are limited resources to help combat this at this time. 
</h2>




  <br></br>
  <br></br>
  <br></br>
  

<div style={{ display: 'flex' }}>
  <img
    className="hands-with-plants"
    alt="Hands with plants"
    src="src/assets/save-earth-day-poster-environment-day-nature-green-ai-generative-glossy-background-images-tree-and-water-free-photo 1.png"
    style={{
      width: '662px',
      height: '349px',
      flexShrink: 0,
      marginLeft:'40px'
    }}  
  />
  <div style={{ marginLeft: '20px' }}>
    <h1 style={{ color: 'BLACK', fontFamily: 'Inter', fontSize: '36px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
      Yes You A Kind Hearted ONE<br></br>
      Your Donations Is Worth !
    </h1>
    <div style={{ color: '#73B925', fontFamily: 'Inter', fontSize: '20px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
     * $920,000 FUNDS RAISED BY 1200 PEOPLE
    </div>
    <div style={{ color: '#73B925', fontFamily: 'Inter', fontSize: '20px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
     
    ***********  $920,000 *********
    </div>
    <div style={{ color: 'black', fontFamily: 'Inter', fontSize: '20px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' ,textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'}}>
      FUNDS RAISED BY 1200 PEOPLE !!!! <br></br>
      #  Make Earth Habitable..
    </div>
  </div>
</div>




  
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
