import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Organizations = () => {
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
      fetch('http://127.0.0.1:5001/organizations')
        .then(response => response.json())
        .then(data => setOrganizations(data));
    }, []);
  
    return (
      <>
      
    
      <div className="organization-container">
        <div className="organization-list">
          {organizations.map(organization => (
            <div className="organization-card" key={organization.id}>
              <img src={organization.image_url} alt={organization.name} />
              <h3>{organization.name}</h3>
              <p>{organization.description}</p>
              <p>Contact Information: {organization.contact_information}</p>
              <p>Status: {organization.status}</p>
              {organization.isAdminApproved && <p>Admin Approved</p>}
              <Link to={`/donate`} className="donate-button">
                Donate
              </Link>
            </div>
          ))}
        </div>
      </div>
      </>
    );
  }

export default Organizations;

