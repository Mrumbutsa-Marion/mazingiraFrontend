import React, { useState } from 'react';
import './About.css';

function Registration() {
  const [name, setname] = useState('');
  const [contact_information, setcontact_information] = useState('');
  const [description, setDescription] = useState('');
  const [image_url, setimage_url] = useState('');
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();


const formData = {
  name: name, 
  contact_information: contact_information, 
  description: description, 
  image_url: image_url, 
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
    setname('');
    setcontact_information('');
    setDescription('');
    setimage_url('');
  };

  const handleCancel = () => {
    window.location.href = '/';
  };

  return (
    <div className="container">
      <h2>Sustainability Enrollment Form</h2>
      <form id="organizationForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Organization Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Enter Organization Name"
          value={name}
          onChange={(event) => setname(event.target.value)}
        />

    <label htmlFor="contact_information">Contact Information:</label>
    <input
      type="text"
      id="contact_information"
      name="contact_information"
      required
      placeholder="Enter Contact Information"
      value={contact_information}
      onChange={(event) => setcontact_information(event.target.value)}
    />

    <label htmlFor="description">Description:</label>
    <textarea
      id="description"
      name="description"
      placeholder="Enter Description"
      value={description}
      onChange={(event) => setDescription(event.target.value)}
    ></textarea>

    <label htmlFor="image_url" id='imagess' style={{ width: '200px', height: '30px' }}>Image URL:</label>
    <input
      type="url"
      id="image_url"
      name="image_url"
      placeholder="Enter Organization Image URL"
      value={image_url}
      onChange={(event) => setimage_url(event.target.value)}
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