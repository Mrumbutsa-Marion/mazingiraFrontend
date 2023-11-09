import React, { useState, useEffect } from 'react';
import './About.css';
import cors from 'cors';


function Registration() {
  const [orgName, setOrgName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  useEffect(() => {
    fetch('https://mazingira-organizationapi.onrender.com/apply')
      .then((response) => response.json())
      .then((data) => {
        // Code to handle the fetched data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      orgName: orgName,
      contactInfo: contactInfo,
      description: description,
      imageUrl: imageUrl,
    };

    fetch('https://mazingira-organizationapi.onrender.com/apply', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form data submitted successfully:', data);
        setSuccessMessageVisible(true);
        setTimeout(() => {
          setSuccessMessageVisible(false);
          resetForm();
        }, 4000);
      })
      .catch((error) => {
      });
  };

  const resetForm = () => {
    setOrgName('');
    setContactInfo('');
    setDescription('');
    setImageUrl('');
  };

  const handleCancel = () => {
    // Code to navigate back to the home page
    window.location.href = '/';
  };

  return (
    <div className="container">
    <h2>Sustainability Enrollment Form🌏</h2>
    <form id="organizationForm" onSubmit={handleSubmit}>
      <label htmlFor="orgName">Organization Name:</label>
      <input
        type="text"
        id="orgName"
        name="orgName"
        required
        placeholder="Enter Organization Name"
        value={orgName}
        onChange={(event) => setOrgName(event.target.value)}
      />

      <label htmlFor="contactInfo">Contact Information:</label>
      <div className="contact-info-container">
        <select id="countryCode" name="countryCode">
          <option value="+1">+1 (United States)</option>
          <option value="+44">+44 (United Kingdom)</option>
          <option value="+91">+91 (India)</option>
          <option value="+254">+254 (Kenya)</option>
          <option value="+1">+1 (United States)</option>
          <option value="+44">+44 (United Kingdom)</option>    
        </select>
        <input
          type="text"
          id="contactInfo"
          name="contactInfo"
          required
          placeholder="Enter Phone Number"
          value={contactInfo}
          onChange={(event) => setContactInfo(event.target.value)}
        />
      </div>

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        placeholder="Enter Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></textarea>

      <label htmlFor="imageUrl">Image URL:</label>
      <input
        type="url"
        id="imageUrl"
        name="imageUrl"
        placeholder="Enter organization Image URL"
        value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
      />

      <input type="hidden" name="status" value="Pending" />
      <input type="hidden" name="isAdminApproved" value="false" />

      <div className="button-container">
        <input type="submit" value="Submit" />
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </form>

    {successMessageVisible && (
      <div id="successMessage" className="modal">
        <div className="modal-content">
          <div className="circle">
            <div className="tick">&#10003;</div>
          </div>
          <p>Your application has been sent successfully!</p>
        </div>
      </div>
    )}
  </div>
  );
}

export default Registration;