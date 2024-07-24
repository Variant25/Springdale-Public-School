import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

import './css/Fablabs.css';

const Academics = () => {
  return (
    <div>
      <NavBar />
      <div className="Fablab-page">
        <div className="header">
          <h1>Academics</h1>
        </div>
        <div className="Fab-container">
          <div className="Fab-text-section">
            <div className="Fab-text-subsection">
              <h6></h6>
              <h3>Curriculum</h3>
              <div className="curriculum">
                <div className="curriculum-section">
                  <h2>Primary (Grades 1-5)</h2>
                  <ul>
                    <li>English</li>
                    <li>Mathematics</li>
                    <li>Science</li>
                    <li>Social Studies</li>
                    <li>Art</li>
                    <li>Physical Education</li>
                  </ul>
                </div>
                <div className="curriculum-section">
                  <h2>Secondary (Grades 6-10)</h2>
                  <ul>
                    <li>English</li>
                    <li>Mathematics</li>
                    <li>Science (Physics, Chemistry, Biology)</li>
                    <li>Social Studies</li>
                    <li>Computer Science</li>
                    <li>Physical Education</li>
                    <li>Art</li>
                  </ul>
                </div>
                <div className="curriculum-section senior-secondary">
                  <h2>Senior Secondary (Grades 11-12)</h2>
                  <h3>Science Stream</h3>
                  <ul>
                    <li>Physics</li>
                    <li>Chemistry</li>
                    <li>Biology</li>
                    <li>Mathematics</li>
                    <li>Computer Science</li>
                    <li>English</li>
                  </ul>
                  <h3>Commerce Stream</h3>
                  <ul>
                    <li>Accountancy</li>
                    <li>Business Studies</li>
                    <li>Economics</li>
                    <li>Mathematics</li>
                    <li>English</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mission-container">

<div className="mission-image-section">

</div>
<div className="mission-text-section">
  <div className="mission-text-subsection">
    <h1>Teaching Methodologies</h1>
    <h6></h6>
    <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.
  
    </p>
    <h1>Educational Resources</h1>
    <h6></h6>
    <p>
    <ul>
                    <li>Digital classrooms</li>
                    <li> Interactive learning modules,</li>
                    <li>Access to online educational platforms</li>
                   
                  </ul>
    </p>
  </div>
</div>


</div>
      <Footer />
    </div>
  );
};

export default Academics;
