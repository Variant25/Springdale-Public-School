import React from 'react';
import './css/Contact.css';
import NavBar from './NavBar';
import Footer from './Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  return (
    <>
      <NavBar/>
      <div className="about-page">
        <div className="header">
          <h1>Contact Us</h1>
        </div>
        <div className="contact-container">
          <div className="contact-image-section">
           
          </div>
          <div className="contact-text-section">
            <div className="contact-text-subsection">
              <h6>Have Questions? Get in Touch!</h6>
              <br/>
              <p>We are here to assist you with any inquiries you may have. Whether you need information about our programs, admissions, or any other details, feel free to reach out to us.</p>
              <div className="contact-info">
                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
                </div>
                <div className="info-item">
                  <i className="fas fa-phone"></i>
                  <p>+1 (123) 456-7890</p>
                </div>
                <div className="info-item">
                  <i className="fas fa-envelope"></i>
                  <p>info@springdale.edu</p>
                </div>
              </div>
              <div className="contact-form">
          
                <form>
                  <label>
                    Name:
                    <input type="text" name="name" required />
                  </label>
                  <label>
                    Email:
                    <input type="email" name="email" required />
                  </label>
                  <label>
                    Message:
                    <textarea name="message" required></textarea>
                  </label>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <iframe 
          style={{ width: '100%', height: '400px', border: '0', padding: '0' }} 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773148.758973777!2d61.038339638127134!3d19.69184213650082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1721845241770!5m2!1sen!2sin"
          allowFullScreen 
          loading="lazy"
        ></iframe>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
