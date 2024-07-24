
import './css/Footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
  
  };

  return (
    <footer className="new_footer_area bg_color">
      <div className="new_footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget company_widget wow fadeInLeft"
                data-wow-delay="0.2s"
                style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}
              >
                <h3 className="f-title f_600 t_color f_size_18">Springdale Public School
                </h3>
                <p>Welcome to Springdale Public School, where we nurture young minds for a brighter future</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget about-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.4s"
                style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft' }}
              >
                <h3 className="f-title f_600 t_color f_size_18">Quick Links</h3>
                <ul className="list-unstyled f_list">
                  <li>
                  <Link to="/about" >About</Link>
                  </li>
                  <li>
                  <Link to="/academics" >Academics</Link>
                  </li>
                  <li>
                  <Link to="/admission" >Admission</Link>
                  </li>
                  <li>
                  <Link to="/gallery" >Gallery</Link>
                  </li>
                  <li>
                  <Link to="/faculty" >Faculty</Link>
                  </li>
                  <li>
                  <Link to="/student" >Student</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget about-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.6s"
                style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}
              >
                
                <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                <ul className="list-unstyled f_list">
                 
                  <li>
                  
                    <a href="#">+1 (123) 456-7890</a>
                  </li>
                  <li>
                    <a href="#">info@springdale.edu</a>
                  </li>
                  <li>
                    <a href="#">
                    Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget social-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.8s"
                style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft' }}
              >
                <h3 className="f-title f_600 t_color f_size_18">Socials</h3>
                <div className="f_social_icon">
                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
     
      
    </footer>
  );
};

export default Footer;