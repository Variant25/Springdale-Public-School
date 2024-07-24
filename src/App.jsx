import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Scroll from './components/Scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutPage from './components/AboutPage';
import Academics from './components/Academics';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Gallery from './components/Gallery';
import Profiles from './components/Profiles';
import Admission from './components/Admission';
import Students from './components/Students';

function App() {

  return (
    <Router>
        <ScrollToTop />
      <div>
        <Routes>

          <Route path="/" element={<Scroll />} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faculty" element={<Profiles/>} />
          <Route path="/student" element={<Students />} />

          
         
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;


