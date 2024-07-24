import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './css/Student.css';
import image from '../assets/default.png';
import image1 from '../assets/3_Meeting_room.jpeg';
const Students = () => {
  return (
    <div>
      <NavBar />
      <div className="students-page">
        <div className="header">
          <h1>Life at Springdale</h1>
        </div>
        <div className="students-content">
        <div className="students-section">
            <h2>Extracurricular Activities</h2>
            <div className="activities">
              <div className="activity-item">
                <img src={image1} alt="Music" className="student-section-image" />
                <p>Music</p>
              </div>
              <div className="activity-item">
                <img src={image1} alt="Dance" className="student-section-image" />
                <p>Dance</p>
              </div>
              <div className="activity-item">
                <img src={image1} alt="Drama" className="student-section-image" />
                <p>Drama</p>
              </div>
              <div className="activity-item">
                <img src={image1} alt="Art" className="student-section-image" />
                <p>Art</p>
              </div>
              <div className="activity-item">
                <img src={image1} alt="Sports" className="student-section-image" />
                <p>Sports</p>
              </div>
              <div className="activity-item">
                <img src={image1} alt="Robotics" className="student-section-image" />
                <p>Robotics</p>
              </div>
              <div className="activity-item">
                <img src={image1} alt="Debate Club" className="student-section-image" />
                <p>Debate Club</p>
              </div>
              <div className="activity-item">
                <img src={image1} alt="Science Club" className="student-section-image" />
                <p>Science Club</p>
              </div>
            </div>
          </div>
          <div className="students-section">
            <h2>Clubs and Societies</h2>
            <div className="clubs">
              <div className="club-item">
                <img src={image1} alt="Literary Society" className="student-section-image" />
                <p>Literary Society</p>
              </div>
              <div className="club-item">
                <img src={image1} alt="Environmental Club" className="student-section-image" />
                <p>Environmental Club</p>
              </div>
              <div className="club-item">
                <img src={image1} alt="Astronomy Club" className="student-section-image" />
                <p>Astronomy Club</p>
              </div>
              <div className="club-item">
                <img src={image1} alt="Coding Club" className="student-section-image" />
                <p>Coding Club</p>
              </div>
            </div>
          </div>
          <div className="students-section">
            <h2>Achievements</h2>
            <div className="achievements">
              <div className="achievement-item">
                <img src={image} alt="John Smith" className="profile-pic" />
                <h4>John Smith </h4><p>   National Level Math Olympiad Winner</p>
              </div>
              <div className="achievement-item">
                <img src={image} alt="Sarah Lee" className="profile-pic" />
                <h4>Sarah Lee </h4><p>  Gold Medalist in State Swimming Championship</p>
              </div>
              <div className="achievement-item">
                <img src={image} alt="Tech Innovators Club" className="profile-pic" />
                <h4>Tech Innovators Club </h4><p>   Winners of Inter-School Robotics Competition</p>
              </div>
            </div>
          </div>
          <div className="students-section">
            <h2>Student Council</h2>
            <div className="student-council">
              <div className="council-member">
                <img src={image} alt="Amy Parker" className="profile-pic" />
                <h4>President</h4>
                <p> Amy Parker</p><p>  Grade 12</p>
              </div>
              <div className="council-member">
                <img src={image} alt="Rajiv Mehta" className="profile-pic" />
                <h4>Vice President</h4>
                <p>Rajiv Mehta</p><p> Grade 11</p>
              </div>
              <div className="council-member">
                <img src={image} alt="Lisa Wong" className="profile-pic" />
                <h4>Secretary</h4>
                <p>  Lisa Wong</p><p>  Grade 10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Students;
