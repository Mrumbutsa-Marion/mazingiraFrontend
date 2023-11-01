import React from "react";
import aboutus from "../assets/aboutus.jpg"
import green from "../assets/green.webp"

function AboutUs(){
  return (
    
    <div className="about-us">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="about-us-banner-orig" alt="About us banner orig" src={aboutus} />
          <img className="element" alt="Element" src="960x0-2.png" />
          <div className="rectangle" />
          <div className="div" />
          <p className="environmental">
            🌍🔥 Environmental Degradation: The deterioration of our planet and its delicate ecosystems poses a grave
            threat to all life forms. 😔⚠️ Finding effective solutions to combat this crisis is essential, but resources
            are limited. That&#39;s why we need your help! Join us at Mazingira as we tackle this urgent challenge
            head-on. Together, we can make a positive impact! 💪🌱
          </p>
          <div className="rectangle-2" />
          <p className="text-wrapper">
            Introducing our automated donation platform! 💫🌟 Simplify your giving and make a lasting impact. With our
            innovative product, you can set up regular contributions, like monthly donations of any amount. Join us in
            working towards our goals effectively by effortlessly supporting our cause. Start making a difference today!
            🌍🤝💚
          </p>
          <img className="img" alt="Rectangle" src="rectangle-111.svg" />
          <div className="div-2">
            <div className="overlap-group">
              <div className="rectangle-3" />
              <img className="hands-with-plants" alt="Hands with plants" src="hands-with-plants-1280-1.png" />
              <img className="instagram" alt="Instagram" src="instagram-1.png" />
              <img className="twitter-sign" alt="Twitter sign" src="twitter-sign-1.png" />
              <img className="facebook" alt="Facebook" src="facebook-1.png" />
              <div className="group">
                <p className="MAZINGIRA">
                  <span className="span">MAZI</span>
                  <span className="text-wrapper-2">NGIRA</span>
                </p>
                <div className="nature">Nature &amp; sustainability</div>
              </div>
              <p className="have-a-question-park">
                <span className="text-wrapper-3">
                  Have a Question?
                  <br />
                </span>
                <span className="text-wrapper-4">
                  Park-Road, Kilimani
                  <br />
                  +254 721 526852
                  <br />
                  mazingira.sustain@gmai.org
                </span>
              </p>
              <img className="rectangle-4" alt="Rectangle" src={green} />
              <p className="p">Copyright ©2023 All rights reserved |</p>
              <img className="rectangle-5" alt="Rectangle" src="rectangle-62.png" />
              <p className="text-wrapper-5">
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </p>
              <p className="services-recycling">
                <span className="text-wrapper-6">
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
            <div className="overlap-2">
              <img className="hands-with-plants-2" alt="Hands with plants" src="hands-with-plants-1280-2.png" />
              <div className="hands-with-plants-3" />
              <div className="text-wrapper-7">Subscribe For Newsletter</div>
              <div className="rectangle-6" />
              <div className="rectangle-7" />
              <div className="text-wrapper-8">SUBSCRIBE NOW!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default AboutUs;