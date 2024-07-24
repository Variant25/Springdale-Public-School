import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Video from '../assets/welcome-video.mp4';
import Sale from './Sale';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import image1 from '../assets/image2.jpg';
import image2 from '../assets/Image1.jpg';


function Scroll() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <div>
      <NavBar/>
     
      <div id="page1" className="bg-video-container">
        <video autoPlay loop muted className="bg-vid">
          <source src={Video} type="video/mp4" />
        </video>
        <div className="content">
          <h1>Springdale Public School</h1>
          <span className="text first-text">
            <h2 className='video-heading'>WELCOME</h2>
          </span>
          <span className="text second-text">
           
            <Link to="/admission" > <button className="join-button">Admission Open</button></Link>
          </span>
          <p></p>
        </div>
      </div>
      <div className="ad-container">
        <div className="text-section">
          <div className="text-subsection">
          
            <h1>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</h1>
            <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students. With a legacy spanning over three decades, the school has consistently maintained high academic standards and fostered a nurturing environment.
            Our experienced faculty, state-of-the-art facilities, and comprehensive curriculum ensure that students receive a well-rounded education. Beyond academics, we emphasize the importance of extracurricular activities, character building, and community service, preparing our students to become responsible and compassionate global citizens.</p>
           
          </div>
        </div>
        <div className="image-section">
         
        </div>
      </div>
      <Carousel data-bs-theme="dark">
          
       
          <Carousel.Item className='amenities-image' interval={2000}>
            <img
              className="d-block w-100"
              src={image2}
              alt="Reception"
            />
          </Carousel.Item>
          <Carousel.Item className='amenities-image' interval={2000}>
            <img
              className="d-block w-100"
              src={image1}
              alt="Co-working space"
            />
          </Carousel.Item>
        </Carousel>
      <div className="container-sale">
        <div className="image-container">
          <img src="https://images.unsplash.com/photo-1490424660416-359912d314b3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Office Setup" />
        </div>
        
        <div className="content">
          <h2 className='h2-heading'>Highlights</h2>
          <p>At Springdale Public School, we provide a nurturing environment that fosters growth, creativity, and academic excellence. Explore our facilities and discover what makes our school a great place for students to learn and grow.</p>
<ul>
            <li>Annual Sports Day - Celebrating Excellence in Sports</li>
            <li>Science Exhibition - Showcasing Student Innovations</li>
            <li>Cultural Fest - Embracing Diversity and Creativity</li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Scroll;


