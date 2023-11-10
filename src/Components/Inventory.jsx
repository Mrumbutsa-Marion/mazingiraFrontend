import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Inventory = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch('https://mazingira105api.onrender.com/inventory')
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
              <Link to={`/donation`} className="organization-button">
                Donation
              </Link>
              {/* <Link to={`/inventory`} className="donate-button">
                Inventories received
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Inventory;