import React from 'react';
import './css/Profiles.css';
import NavBar from './NavBar';
import Footer from './Footer';
const Profiles = () => {
  const staff = [
    {
      name: 'John Doe',
      position: 'Principal',
      qualifications: 'M.Ed',
      experience: ' 20 years of experience in educational administration',
      image: '/images/default.png'
    },
    {
      name: 'Jane Smith',
      position: 'Vice Principal',
      qualifications: 'M.Sc. in Physics',
      experience: '15 years of teaching experience',
      image: '/images/default.png'
    },
    {
      name: 'Emily Johnson',
      position: 'English Teacher',
      qualifications: 'M.A. in English',
      experience: '10 years of teaching experience',
      image: '/images/default.png'
    },
    {
      name: 'Michael Brown',
      position: 'Mathematics Teacher',
      qualifications: 'M.Sc. in Mathematics',
      experience: '8 years of teaching experience',
      image: '/images/default.png'
    },
    {
      name: 'Sophia Davis',
      position: 'Science Teacher',
      qualifications: 'M.Sc. in Chemistry',
      experience: ' 12 years of teaching experience',
      image:'/images/default.png'
    },
    {
      name: 'David Wilson',
      position: 'Computer Science Teacher',
      qualifications: 'B.Tech in Computer Science',
      experience: '5 years of teaching experience',
      image: '/images/default.png'
    }
  ];

  return (
  <>
  <NavBar/>
  <div className="profiles-page">
  <div className="header">
        <h1>Faculty</h1>
   
      </div>
    <div className="profiles-container">
      {staff.map((member, index) => (
        <div key={index} className="profile-card">
          <img src={member.image} alt={`${member.name}'s profile`} className="profile-pic" />
          <h3>{member.position}</h3>
          <h2>{member.name}</h2>
         
          <p>Qualification: {member.qualifications}</p>
          <p>Experience: {member.experience} </p>
        </div>
      ))}
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Profiles;
