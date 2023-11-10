import React, { useState } from 'react';
import './About.css';

function Registration() {
  const [orgName, setOrgName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

// Corrected formData keys to match the server-side expectation
const formData = {
  name: orgName, // Key changed from orgName to name
  contact_information: contactInfo, // Key changed from contactInfo to contact_information
  description: description, // Key is already correct
  image_url: imageUrl, // Key changed from imageUrl to image_url
};

fetch('https://mazingira-organizationapi.onrender.com/apply', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})
.then((response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
})
.then((data) => {
  console.log('Form data submitted successfully:', data);
  setSuccessMessageVisible(true);
  setTimeout(() => {
    setSuccessMessageVisible(false);
    resetForm();
  }, 4000);
})
.catch((error) => {
  console.error('Form submission error:', error);
});
  };

  const resetForm = () => {
    setOrgName('');
    setContactInfo('');
    setDescription('');
    setImageUrl('');
  };

  const handleCancel = () => {
    window.location.href = '/';
  };

  return (
    <div className="container">
      <h2>Sustainability Enrollment Form</h2>
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
    <input
      type="text"
      id="contactInfo"
      name="contactInfo"
      required
      placeholder="Enter Contact Information"
      value={contactInfo}
      onChange={(event) => setContactInfo(event.target.value)}
    />

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
      placeholder="Enter Organization Image URL"
      value={imageUrl}
      onChange={(event) => setImageUrl(event.target.value)}
    />

    <div className="button-container">
      <input type="submit" value="Submit" />
      <button type="button" onClick={handleCancel}>Cancel</button>
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