import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './css/Aboutpage.css';
import { Link } from 'react-router-dom';

const directors = [
  {
    id: 1,
    name: `Principal' message`,
    image: '/images/default.png',
    description: `At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future`
  },
  
];

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <div className="about-page">
        <div className="header">
          <h1>About us</h1>
        </div>
        
        <div className="about-container">
        <div className="about-image-section">
          </div>
          <div className="about-text-section">
            <div className="about-text-subsection">
              
            
                <h1 className='h2-heading'>Our History</h1>

          </div>
              <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students. With a legacy spanning over three decades, the school has consistently maintained high academic standards and fostered a nurturing environment. Our experienced faculty, state-of-the-art facilities, and comprehensive curriculum ensure that students receive a well-rounded education. Beyond academics, we emphasize the importance of extracurricular activities, character building, and community service, preparing our students to become responsible and compassionate global citizens. At Springdale Public School, we believe in nurturing the unique potential of every child and guiding them towards a bright and successful future.</p>
              

            </div>
            

          
        </div>




        <div className="vision-container">

          <div className="vision-image-section">

          </div>
          <div className="vision-text-section">
            <div className="vision-text-subsection">
              <h1>Our Vision</h1>
              <h6>Fueling the next generation!</h6>
              <p>To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>

            </div>
          </div>


        </div>




        <div className="mission-container">

          <div className="mission-image-section">

          </div>
          <div className="mission-text-section">
            <div className="mission-text-subsection">
              <h1>Our Mission</h1>
              
              <p>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>

            </div>
          </div>


        </div>


        <br />

        {/* Directors Section */}
        <div className="directors-section">
       
          {directors.map((director, index) => (
            <div key={director.id} className={`director-item ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
              {index % 2 === 0 ? (
                <>
                  <img src={director.image} alt={director.name} className="director-image" />
                  <div className="director-info">
                    <h3>{director.name}</h3>
                    <p className='h2-heading'>{director.description}</p>
                  </div>
                </>
              ) : (
                <>
                 <img src={director.image} alt={director.name} className="director-image" />
                  <div className="director-info">
                    <h3>{director.name}</h3>
                    <p className='h2-heading'>{director.description}</p>
                  </div>
                 
                </>
              )}
            </div>
          ))}
        </div>



      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;