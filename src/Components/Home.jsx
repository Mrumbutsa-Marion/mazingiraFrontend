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
      <p>Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Voluptat
        um doloribus minus in numquam asperiores accusa
        ntium corporis quae hic officiis cum vel culpa 
        veritatis, odit ipsa vitae, ut incidunt aliquid eius?
        Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Voluptat
        um doloribus minus in numquam asperiores accusa
        ntium corporis quae hic officiis cum vel culpa 
        veritatis, odit ipsa vitae, ut incidunt aliquid eius?
        Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Voluptat
        um doloribus minus in numquam asperiores accusa
        ntium corporis quae hic officiis cum vel culpa 
        veritatis, odit ipsa vitae, ut incidunt aliquid eius?
        Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Voluptat
        um doloribus minus in numquam asperiores accusa
        ntium corporis quae hic officiis cum vel culpa 
        veritatis, odit ipsa vitae, ut incidunt aliquid eius?
        Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Voluptat
        um doloribus minus in numquam asperiores accusa
        ntium corporis quae hic officiis cum vel culpa 
        veritatis, odit ipsa vitae, ut incidunt aliquid eius?
        Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Voluptat
        um doloribus minus in numquam asperiores accusa
        ntium corporis quae hic officiis cum vel culpa 
        veritatis, odit ipsa vitae, ut incidunt aliquid eius?Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Voluptat
        um doloribus minus in numquam asperiores accusa
        ntium corporis quae hic officiis cum vel culpa 
        veritatis, odit ipsa vitae, ut incidunt aliquid eius?
        Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Voluptat
        um doloribus minus in numquam asperiores accusa
        ntium corporis quae hic officiis cum vel culpa 
        veritatis, odit ipsa vitae, ut incidunt aliquid eius?
        Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Voluptat
        um doloribus minus in numquam asperiores accusa
        ntium corporis quae hic officiis cum vel culpa 
        veritatis, odit ipsa vitae, ut incidunt aliquid eius?</p>
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

