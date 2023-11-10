import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Donation = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch('https://mazingira105api.onrender.com/donations')
      .then(response => response.json())
      .then(data => setInventories(data));
  }, []);

  return (
    <>
      <div className="organization-container">
        <div className="organization-list">
          {inventories.map(inventory => (
            <div className="organization-card" key={inventory.id}>
              <h3>{inventory.description}</h3>
              <p>Quantity: {inventory.quantity}</p>
              <p>Date Received: {inventory.date_received}</p>
              <Link to={`/donate`} className="organization-button">
                Donate
              </Link>
              <Link to={`/organizations`} className="help-button">
                Organizations
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Donation;