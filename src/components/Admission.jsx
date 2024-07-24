import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './Admission.css';

const Admission = () => {
  // Path to the admission form
  const formUrl = '/assets/admission-form.pdf'; // Ensure this path matches your actual file path

  return (
    <div>
      <NavBar />
      <div className="admission-page">
        <div className="header">
          <h1>Admission Information</h1>
        </div>
        <div className="admission-content">
          <div className="admission-section">
            <h2>Process</h2>
            <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
            <a href={formUrl} download className="download-button">Download Admission Form</a>
          </div>
          <div className="admission-section">
            <h2>Criteria</h2>
            <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
          </div>
          <div className="admission-section">
            <h2>Important Dates</h2>
            <ul>
              <li>Admission Form Availability: March 1st</li>
              <li>Last Date for Submission: March 31st</li>
              <li>Entrance Test: April 15th</li>
              <li>Announcement of Results: April 30th</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admission;
