import React from 'react';
import forest from '../assets/forest.jpeg';
import sea from '../assets/sea.jpeg';
import logo from '../assets/logo.png';
import aboutgroup from '../assets/aboutgroup.png';
import '../App.css';
import './About.css';

const About = () => {
  return (
    <>
      <div class="header-two">
        <img src={aboutgroup} alt="aboutgroup" className="aboutclass" style={{ width: "100%", height: "auto" }} />
      </div>
      <div class="about-container">
        <div class="about">
          <div class="left">
            <h1>Who We Are</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class="right">
            <img src={forest} alt="forest" />
          </div>
          <div class="clear"></div>
        </div>

        <div class="mission">
          <div class="left">
            <img src={sea} alt="sea" />
          </div>
          <div class="right">
            <h1>Mission Statement</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class="clear"></div>
        </div>
        <div class="team">
          <h1>Our Team</h1>
          <hr />
          <div class="content cntrflex">
            <div class="our teams">
              <div class="aboutimg">
                <div class="show">
                <div class="reveal" style={{ backgroundImage: `url(https://img.freepik.com/free-photo/african-botanist-woman-looking-genetic-test-sample-biological-experiment_482257-4085.jpg?w=1480&t=st=1699393165~exp=1699393765~hmac=9fcba8406ad74e6143ef886b1c091459d23b5d686420d2e84386b50e08aa02d0)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                   </div>
                    <div class="mask">
                    <h2>Aisha Nkrumah</h2>
                    <p>Environmental Scientist</p>
                  </div>
                </div>
              </div>
              <div class="aboutimg">
                <div class="show">
                <div class="reveal" style={{ backgroundImage: `url(https://img.freepik.com/free-photo/male-scientist-carefully-studies-his-data_1153-5134.jpg?w=740&t=st=1699393440~exp=1699394040~hmac=2e5fdd9c6db6e8b31af1d87442a1adf9601ca834eb2a836d42294b31c2a829d0)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                   </div>
                    <div class="mask">
                    <h2>Michael Lee</h2>
                    <p>Conservation Biologist</p>
                  </div>
                </div>
              </div>

              <div class="aboutimg">
                <div class="show">
                <div class="reveal" style={{ backgroundImage: `url(https://img.freepik.com/free-photo/female-working-environment-projects_23-2148829290.jpg?w=740&t=st=1699393631~exp=1699394231~hmac=2023cf18b1d45323bdaa0aaeae584349934cdeae6fbaa6c7dfa851dba38e7279)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                   </div>
                    <div class="mask">
                    <h2>Jennifer Patel</h2>
                    <p> Sustainability Coordinator</p>
                  </div>
                </div>
              </div>
              <div class="aboutimg">
                <div class="show">
                <div class="reveal" style={{ backgroundImage: `url(https://img.freepik.com/free-photo/medium-shot-smiley-engineer-holding-tablet_23-2149353969.jpg?w=740&t=st=1699393732~exp=1699394332~hmac=243878c9ef52ef706b0211517678d17855565630242a024053d5d7eb6d1826e9)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                   </div>
                    <div class="mask">
                    <h2>Robert Johnson</h2>
                    <p>Climate Policy Analyst</p>
                  </div>
                </div>
              </div>
              <div class="aboutimg">
                <div class="show">
                <div class="reveal" style={{ backgroundImage: `url(https://img.freepik.com/free-photo/medium-shot-smiley-man-wearing-binoculars_23-2149557254.jpg?w=1380&t=st=1699393911~exp=1699394511~hmac=005a833baf026eda9d7ff0e8af03245c5df00edc6d65d157443351b1c4d79f6c)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                   </div>
                    <div class="mask">
                    <h2>Adebayo Osei</h2>
                    <p> Wildlife Conservation Specialist</p>
                  </div>
                </div>
              </div>
              <div class="aboutimg">
                <div class="show">
                <div class="reveal" style={{ backgroundImage: `url(https://img.freepik.com/free-photo/medium-shot-smiley-engineer-wearing-helmet_23-2149352272.jpg?w=1380&t=st=1699394026~exp=1699394626~hmac=06c23e3f74a80485564e81f7b767e6e693e0a74508ae39608e3c16150e5fb47a)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                   </div>
                    <div class="mask">
                    <h2>Emily Chen</h2>
                    <p>Renewable Energy Engineer</p>
                  </div>
                </div>
              </div>
              <div class="aboutimg">
                <div class="show">
                <div class="reveal" style={{ backgroundImage: `url(https://img.freepik.com/free-photo/close-up-man-smiling-nature_23-2150771075.jpg?t=st=1699394639~exp=1699398239~hmac=382a2817c145ce2e04ad6f72e8f5fd3468b4b88641b55e75eb36f4a5929b179c&w=740)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                   </div>
                    <div class="mask">
                    <h2>Nala Ekwueme</h2>
                    <p>Environmental Educator</p>
                  </div>
                </div>
              </div>
              <div class="aboutimg">
                <div class="show">
                <div class="reveal" style={{ backgroundImage: `url(https://img.freepik.com/free-photo/designer-fashion_1098-15866.jpg?w=1380&t=st=1699394282~exp=1699394882~hmac=af9af58a7aa7ee75f93d1ef724036f26c28438e1823ede868af893897090d36c)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                   </div>
                    <div class="mask">
                    <h2>Sefu Kamau</h2>
                    <p>Green Technology Researcher</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="bottom-page">
        <ul>
          <li>
            <a href=""> <img src={logo} alt="Logo" /> </a>
          </li>
          <li>A small river named Duden flows by</li>
          <li>place and supplies it with the</li>
          <li>necessary regelialia.</li>
        </ul>
        <ul>
          <li>
            <a href="">Services</a>
          </li>
          <li>Recycling</li>
          <li>Our missions</li>
          <li>Water Refine</li>
          <li>Ecosystem</li>
          <li>Solar Enerfy</li>
        </ul>
        <ul>
          <li>
            <a href="">Policies</a>
          </li>
          <li>Privacy Policy</li>
          <li>FAQS</li>
          <li>Anti-fraud Disclaimer</li>
          <li>Refund Policy</li>
          <li>Payment</li>
        </ul>
        <ul>
          <li>
            <a href="">Have a Question?</a>
          </li>
          <li>Privacy Policy</li>
          <li>FAQS</li>
          <li>Anti-fraud Disclaimer</li>
          <li>Refund Policy</li>
          <li>Payment</li>
        </ul>
        <iframe />
      </div>

      <div class="footer">
        <div class="logo">
          <div class="copyright">
            <p> Copyright © 2017 All Rights Reserved by Scanfcode_ 2023_Mazingirae_</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
