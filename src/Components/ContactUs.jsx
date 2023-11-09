import React from "react";
import contactimage from '../assets/contactimage.png'



function ContactUs(){
  return (
    <div className="contact-us">
      <div className="div">
        <div className="overlap">
          <img className="group" alt="Group" src={contactimage} />
          <div className="group-wrapper">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <img className="rectangle" alt="Rectangle" src="rectangle-44.svg" />
                <div className="group-2">
                  <div className="text-wrapper">Home</div>
                  <div className="text-wrapper-2">About</div>
                  <div className="text-wrapper-3">Organizations</div>
                  <div className="text-wrapper-4">Contact</div>
                </div>
                <img className="img" alt="Rectangle" src="rectangle-45.svg" />
                <div className="text-wrapper-5">Donate</div>
                <div className="group-3">
                  <p className="MAZINGIRA">
                    <span className="span">MAZI</span>
                    <span className="text-wrapper-6">NGIRA</span>
                  </p>
                  <div className="nature">Nature &amp; sustainability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-7">GET IN TOUCH</div>
          <img className="line" alt="Line" src="line-4.svg" />
          <div className="div-wrapper">
            <div className="text-wrapper-8">Your Email</div>
          </div>
          <div className="overlap-3">
            <div className="text-wrapper-9">Your name</div>
          </div>
          <div className="overlap-4">
            <div className="text-wrapper-10">Message</div>
          </div>
          <div className="overlap-5">
            <div className="text-wrapper-11">Send Message</div>
          </div>
        </div>
        <div className="contact-us-have-a-wrapper">
          <p className="contact-us-have-a">
            <span className="text-wrapper-12">
              Contact Us
              <br />
              Have a question, comment, or suggestion? Feel free to reach out to us using the following email addresses:
              <br />
              General Inquiries:{" "}
            </span>
            <a href="mailto:cedric@gmail.com" rel="noopener noreferrer" target="_blank">
              <span className="text-wrapper-13">
                cedric@gmail.com
                <br />
              </span>
            </a>
            <span className="text-wrapper-12">Customer Support: </span>
            <a href="mailto:miriam@gmail.com" rel="noopener noreferrer" target="_blank">
              <span className="text-wrapper-13">
                miriam@gmail.com
                <br />
              </span>
            </a>
            <span className="text-wrapper-12">Business Partnerships: </span>
            <a href="mailto:Victor@gmail.com" rel="noopener noreferrer" target="_blank">
              <span className="text-wrapper-13">
                Victor@gmail.com
                <br />
              </span>
            </a>
            <span className="text-wrapper-12">
              We value your feedback and will do our best to respond to your inquiries as soon as possible.
              <br />
              Address: 123 Main Street, Cityville, State, ZIP Code
              <br />
              Phone: (123) 456-7890
              <br />
              Business Hours: Monday - Friday: 9:00 AM - 5:00 PM
              <br />
              Thank you for reaching out to us!
              <br />
              <br />
            </span>
          </p>
        </div>
        <div className="group-4">
          <div className="overlap-6">
            <div className="rectangle-2" />
            <img className="hands-with-plants" alt="Hands with plants" src="hands-with-plants-1280-1.png" />
            <div className="group-5">
              <img className="instagram" alt="Instagram" src="instagram-1.png" />
              <img className="twitter-sign" alt="Twitter sign" src="twitter-sign-1.png" />
              <img className="facebook" alt="Facebook" src="facebook-1.png" />
            </div>
            <div className="group-6">
              <p className="p">
                <span className="span">MAZI</span>
                <span className="text-wrapper-6">NGIRA</span>
              </p>
              <div className="nature-2">Nature &amp; sustainability</div>
            </div>
            <p className="have-a-question-park">
              <span className="text-wrapper-14">
                Have a Question?
                <br />
              </span>
              <span className="text-wrapper-15">
                Park-Road, Kilimani
                <br />
                +254 721 526852
                <br />
                mazingira.sustain@gmai.org
              </span>
            </p>
            <img className="rectangle-3" alt="Rectangle" src="rectangle-62.png" />
            <p className="text-wrapper-16">
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </p>
            <p className="services-recycling">
              <span className="text-wrapper-17">
                Services
                <br />
                Recycling
                <br />
                Water Refine
                <br />
                Ecosystem
                <br />
                Solar Enerfy
              </span>
            </p>
            <p className="save-animals-plant">
              Save Animals
              <br />
              Plant Ecology
              <br />
              Dynamic Ecology
              <br />
              Tree Planting
            </p>
          </div>
          <div className="overlap-7">
            <p className="text-wrapper-18">Copyright ©2023 All rights reserved |</p>
          </div>
          <div className="overlap-8">
            <img className="hands-with-plants-2" alt="Hands with plants" src="hands-with-plants-1280-2.png" />
            <div className="hands-with-plants-3" />
            <div className="text-wrapper-19">Subscribe For Newsletter</div>
            <div className="rectangle-4" />
            <div className="rectangle-5" />
            <div className="text-wrapper-20">SUBSCRIBE NOW!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;