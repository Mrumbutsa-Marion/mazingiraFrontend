import React, { useEffect } from 'react';
import contactmmm from '../assets/contactmmm.png';
import world from '../assets/world.png';
import energy from '../assets/energy.png';
import farms from '../assets/farms.png';
import logo from '../assets/logo.png';
import '../App.css'
const About = () => {

    return (  
    <>
         <div className="contact">
         <img src={contactmmm} alt='contactmmm' style={{ width: "100%" }}/>

         <div class="contactme" id="Contact">
            {/* <div class="heading">
                <h1>Contact Us </h1>
            </div> */}
            <div class="contactmeinfo">
                <div class="message-me">
                    <div class="socialmedia">
                        <h2>Drop In a Message</h2>
                    <h4>Feel free to leave in a comment in the comment section <br/>
                    and get to interact with me more.</h4>
                         <div class="icons">
                            <img src="./src/image/square-phone-solid.svg" alt="phone"/>
                            <a href="tel:+254 721 526 852">+254 721 526 852</a>
                         </div>
                         <div class="icons">
                            <img src="" alt="email"/>
                            <i class="fas fa-mobile-alt"></i>

                            <a href="mailto:=marion.mwanje@student.moringaschool.com">mazingira@gmailcom</a>
                         </div>
                         <div class="icons">
                            <img src="" alt="location"/>
                            <a href="mailto:=marion.mwanje@student.moringaschool.com">Ngonglane</a>
                         </div>
                 </div>
                </div>
                <div class="contact-form">
                    <div class="firstrow">
                        <div class="insertinfo">
                        <input type="text" placeholder="Marion"/>
                    </div>
                    </div>

                    <div class="firstrow">
                        <div class="insertinfo">
                        <input type="text" placeholder="blueoceans@gmail.com"/>
                    </div>
                    </div>
                    
                    <div class="firstrow">
                        <div class="insertinfo">
                         <textarea placeholder="write your message here"></textarea>
                         </div>
                    </div>
                    <div class="submit">
                        <button> <a href="">Send</a></button>
                    </div>

                </div>

            </div>
         </div>
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

export default About;

