import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Beneficiary = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => {
    fetch('https://mazingira105api.onrender.com/beneficiaries')
      .then(response => response.json())
      .then(data => setBeneficiaries(data));
  }, []);

  return (
    <>
      <div className="benefeciary-container">
        <div className="organization-list">
          {beneficiaries.map(beneficiary => (
            <div className="organization-card" key={beneficiary.id}>
              <img src={beneficiary.image_url} alt={beneficiary.name} />
              <h3>{beneficiary.name}</h3>
              <p>{beneficiary.description}</p>
              <p>Inventory Received: {beneficiary.inventory_received}</p>
              <Link to={`/donate`} className="organization-button">
                Donate
              </Link>
              <Link to={`/inventory`} className="help-button">
                Inventories received
              </Link>
            </div>
          ))}
        </div>
       
      
       
</div>
  
    </>
  );
}

export default Beneficiary;