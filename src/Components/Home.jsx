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
      {/* Your other code... */}
      {/* <div className="container1">
      <div className="mySlides fade">
        <div className="numbertext">1 / 4</div>
        <img src="https://i.pinimg.com/564x/a9/9e/8f/a99e8f7e149281a0d09507a6cdce2b5d.jpg" style={{ width: "100%" }} />
        <div className="text">Your text here</div>
        <button>Click Me</button>
        <img src="" /> */}
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
            <li><a href="">Support</a></li>
            <li>Online Payments</li>
            <li>Delivery</li>
            <li>Customer Service</li>
            <li>Shipping</li>
            <li>Donate</li>
        </ul>
        <ul>
            <li><a href="">About Us</a></li>
            <li>Who we are</li>
            <li>Our missions</li>
            <li>Partners</li>
            <li>Teams</li>
            <li>Vision</li>
        </ul>
        <ul>
            <li><a href="">Policies</a></li>
            <li>Privacy Policy</li>
            <li>FAQS</li>
            <li>Anti-fraud Disclaimer</li>
            <li>Refund Policy</li>
            <li>Payment</li>
        </ul>
       
    </div>

    </div>
    </>
  );
};

export default Home;

