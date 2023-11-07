import React from "react";
import '../App.css';

function AboutUs() {
  return (
    <div className="about-us">
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />
          <img className="hands-with-plants" alt="Hands with plants" src="src/assets/hands-with plants_1280 1.png" />
          <img className="instagram" alt="Instagram" src="src/assets/instagram 1.png" />
          <img className="twitter-sign" alt="Twitter sign" src="src/assets/twitter-sign 1.png" />
          <img className="facebook" alt="Facebook" src="src/assets/facebook 1.png" />
          <div className="group">
            <p className="MAZINGIRA">
              <span className="text-wrapper">MAZI</span>
              <span className="span">NGIRA</span>
            </p>
            <div className="nature">Nature &amp; sustainability</div>
          </div>
          <p className="have-a-question-park">
            <span className="text-wrapper-2">
              Have a Question?
              <br />
            </span>
            <span className="text-wrapper-3">
              Park-Road, Kilimani
              <br />
              +254 721 526852
              <br />
              mazingira.sustain@gmai.org
            </span>
          </p>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <p className="p">Copyright ©2023 All rights reserved |</p>
            </div>
          </div>
          <img className="img" alt="Rectangle" src="src/assets/Rectangle 62.png" />
          <p className="text-wrapper-4">
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
          <p className="services-recycling">
            <span className="text-wrapper-5">
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
            Plan...
          </p>

          {/* Add the remaining images below */}
          <img className="callus" alt="Call us" src="src/assets/callus.png" />
          <img className="email" alt="Email" src="src/assets/Email.png" />
          <img className="group34" alt="Group 34" src="src/assets/Group 34.png" />
          <img className="location" alt="Location" src="src/assets/location'.png" />
          <img className="rectangle108" alt="Rectangle 108" src="src/assets/Rectangle 108.png" />

        </div>
      </div>
    </div>
  );
}

export default AboutUs;

