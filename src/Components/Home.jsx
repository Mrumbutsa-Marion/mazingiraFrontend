import React, { useEffect } from 'react';
import soloelephant from '../assets/soloelephant.png';
import worldgreen from '../assets/worldgreen.png';
import reusablenergy from '../assets/reusablenergy.png';
import saveplants from '../assets/saveplants.png';
import logo from '../assets/logo.png';

import '../App.css'
import './Home.css'
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
      setTimeout(showSlides, 6000); 
    };
    showSlides();
  }, []);

  return (
    <>
    <div className='home'>
    
      <div className="container1">
        <div className="slideshow-container">
          <div className="mySlides fade">
          <img src={soloelephant} alt='soloelephant' style={{ width: "100%" }}/>
          </div>

          <div className="mySlides fade">
          <img src={worldgreen} alt='worldgreen' style={{ width: "100%" }}/>
          </div>

          <div className="mySlides fade">
          <img src={reusablenergy} alt='reusablenergy' style={{ width: "100%" }}/>
          </div>

          <div className="mySlides fade">
          <img src={saveplants} alt='saveplants' style={{ width: "100%" }}/>
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
  fontFamily: 'black',
  fontSize: '36px',
  fontWeight: 'bold',
  color: 'black',
  textAlign: 'center',
  marginBottom: '200px' ,
  marginTop: '200px'
  


}}>
  Welcome to Mazingira<br></br> Empowering Environmental Champions! 🌿
</h1>


</div>

<h2 style={{
  fontSize: '284px',
  marginBottom: '70px' ,

  fontSize: '30px',
  fontWeight: 'bold',
  color: 'black',
  textAlign: 'center',
  
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
  <div style={{ position: 'absolute', top: '-65px', left: '0', right: '0', backgroundColor: '#73B925', padding: '10px', width: '319.297px', margin: '0 auto', fontSize: '20px' }}>
      Partners
    </div>
    <img
      className="rectangle-54"
      alt="Rectangle 54"
      src="src/assets/WED_-_Main.png"
      style={{
        marginTop:'-15px',
        width: '85%',
        height: '239.476px', 
      }}
    />
       <p style={{ textAlign: 'center',width:'319.297px',margin :'o auto',marginLeft:'10%', fontSize: '20px'}}>
        Engage with environmental organizations and businesses for a greener future. 
      🌍🌱🌻
      </p>
  </div>
  <div style={{ position: 'relative' }}>
  <div style={{ position: 'absolute', top: '-65px', left: '0', right: '0', backgroundColor: '#73B925', padding: '10px', width: '319.297px', margin: '0 auto' ,fontsize:'20px'}}>
      Permits
    </div>
    <img
      className="rectangle-51"
      alt="Rectangle 51"
      src="src/assets/mqdefault.jpg"
      style={{
        marginTop:'-15px',
        width: '85%',
        height: '239.476px', 
      }}
    />
    <p style={{ textAlign: 'justify', width: '319.297px', margin: '0 auto', marginLeft: '10%', fontSize: '20px' }}>
  Explore eco-friendly permits and regulations for sustainable practices. 
  🌱♻️🌍
</p>

  </div>
  <div style={{ position: 'relative' }}>
  <div style={{ position: 'absolute', 
  top: '-95px', left: '0',
   right: '0', backgroundColor: '#73B925', 
   padding: '10px', width: '319.297px', margin: '0 auto', fontSize: '20px' , }}>
      Recycle
    </div>
    
    <img
      className="rectangle-60"
      alt="Rectangle 60"
      src="src/assets/zero-carbon-emmision1.jpg"
      style={{
        marginTop:'-45px',
        width: '85%',
        height: '239.476px', 
      }}
    />
     
     <p style={{ textAlign: 'center'
     ,width:'319.297px',
     margin :'o auto',marginLeft:'10%',fontsize:'20px'}}>
        Learn about recycling programs and how to reduce your carbon footprint.
        ♻️ 🌱👣
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
    <h1 style={{ color: 'BLACK', fontFamily: 'Inter', fontSize: '36px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
      Yes  You  A  Kind Hearted ONE<br></br>
      Your Donations Is Worth !
    </h1>
    <div style={{ color: '#73B925', fontFamily: 'Inter', fontSize: '20px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
     * $920,000 FUNDS RAISED BY 1200 PEOPLE
    </div>
    <div style={{ color: '#73B925', fontFamily: 'Inter', fontSize: '20px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal'}}>
     
    ***********  $920,000 *********
    </div>
    <div style={{ color: 'black', fontFamily: 'Inter', fontSize: '20px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal'}}>
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
