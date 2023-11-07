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
                            <a href="mailto:=marion.mwanje@student.moringaschool.com">mazingira@gmailcom</a>
                         </div>
                         <div class="icons">
                            <img src="" alt="location"/>
                            <a href="mailto:=marion.mwanje@student.moringaschool.com">Ngonglane</a>
                         </div>
                 </div>
                </div>
                <div class="contact_form">
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
         </div>
    </>
  );
};

export default About;

