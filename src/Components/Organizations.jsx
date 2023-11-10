import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Organizations = () => {
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
      fetch('https://mazingira105api.onrender.com/organizations')
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
              <Link to={`/donate`} className="organization-button">
                Donate
              </Link>
              <Link to={`/beneficiary`} className="help-button">
                Beneficiaries
              </Link>
            </div>
          ))}
        </div>
      </div>
      </>
    );
  }

export default Organizations;

