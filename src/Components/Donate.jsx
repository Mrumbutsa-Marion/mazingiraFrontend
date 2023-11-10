// import React from "react";
// import '../App.css'
// import donate from '../assets/donate.png';
// // import donate from '../assets/donage.png';

// const Donate = () => {
//   return (
//    <>
//    <div className="donate-container">
//     <div className="greenpart">
//       <h1>DONATE WHERE IT'S MOST NEEDED: ENVIRONMENT </h1>
//       <p>Help conserve the environment and protect our planet for future generations. Every gift you give helps plant trees, protect endangered species, and reduce pollution.</p>
//     </div>
//     <div className="donate-list">
//       <div className="donate-card">
//         <img src={donate} alt="pic" />
//         <p>A CRS program in Indonesia plants trees to restore a rain forest. Your compassion helps protect the planet.Every gift you give helps conserve the environment, protect ecosystems, and fight climate change. When you give, you help plant trees to absorb carbon dioxide and restore forests. You help protect endangered species and their habitats. You help reduce pollution and promote clean energy.
//        When you give, communities around the world learn sustainable practices to protect their environment and natural resources. Farmers learn how to farm in a way that protects the soil and water. Communities learn how to manage their waste sustainably. And people learn how to live more sustainably in their everyday lives.

// You can make an immediate difference in the fight against climate change and help conserve the planet for future generations.

// For 80 years, CRS has been providing expertise and compassion to our brothers and sisters in more than 100 countries. And it's because of you.
//      We can't do this lifesaving work without your help. 
//     Please make a generous gift today and fill out the secure form to make a one-time donation.</p>
//       </div>
//     </div>
//    </div>
//     {/* <div className="bg-[#f1f1f1] flex flex-row justify-center w-full">
      
//     </div> */}
//    </>
//   );
// };
// export default Donate;
import React from "react";
import '../App.css'
import donate from '../assets/donate.png';
import { Link } from 'react-router-dom'; // Import the Link component

const Donate = () => {
  return (
    <>
      <div className="donate-container">
        <div className="greenpart">
          <h1>DONATE WHERE IT'S MOST NEEDED: ENVIRONMENT </h1>
          <p>Help conserve the environment and protect our planet for future generations. Every gift you give helps plant trees, protect endangered species, and reduce pollution.</p>
        </div>
        <div className="donate-list">
          <div className="donate-card">
            <img src={donate} alt="pic" />
            <p>A CRS program in Indonesia plants trees to restore a rain forest. Your compassion helps protect the planet.Every gift you give helps conserve the environment, protect ecosystems, and fight climate change. When you give, you help plant trees to absorb carbon dioxide and restore forests. You help protect endangered species and their habitats. You help reduce pollution and promote clean energy.
              When you give, communities around the world learn sustainable practices to protect their environment and natural resources. Farmers learn how to farm in a way that protects the soil and water. Communities learn how to manage their waste sustainably. And people learn how to live more sustainably in their everyday lives.

            You can make an immediate difference in the fight against climate change and help conserve the planet for future generations.

            For 80 years, CRS has been providing expertise and compassion to our brothers and sisters in more than 100 countries. And it's because of you.
            We can't do this lifesaving work without your help.
            Please make a generous gift today and fill out the secure form to make a one-time donation.</p>
            <Link to="/payment">
                <button className="donate-button">Donate Now</button>
           </Link>
          </div>
        </div>
      </div>
      
      
    </>
  );
};

export default Donate;