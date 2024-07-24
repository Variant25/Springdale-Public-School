import React from 'react';
import './Gallery.css';
import NavBar from './NavBar';
import Footer from './Footer';
const Gallery = () => {
  const images = [
    'images/Image1.jpg',
    'images/Image1.jpg',
    'images/Image1.jpg',
    'images/Image1.jpg',
    'images/Image1.jpg',
    'images/Image1.jpg',
    'images/Image1.jpg',
    'images/Image1.jpg',
    'images/Image1.jpg',
    'images/Image1.jpg',
    'images/Image1.jpg',
    'images/Image1.jpg',
   
  ];

  const videos = [
    { src: 'images/video1.mp4', type: 'video/mp4' },
    { src: 'images/video2.mp4', type: 'video/mp4' },
  ];

  return (
    <>
     <NavBar/>
     <div className="about-page">
        <div className="header">
          <h1>Gallery</h1>
        </div>
    <div className="gallery">
       
      {videos.map((video, index) => (
        <video key={index} controls className="gallery-item">
          <source src={video.src} type={video.type} />
          Your browser does not support the video tag.
        </video>
      ))}
     
     
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery image ${index + 1}`}
          loading="lazy"
          className="gallery-item"
        />
      ))}
     
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Gallery;
