import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './css/NavBar.css'; 

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav" data-bs-theme="dark" sticky="top">
      <Container>
      <Link to="/"> <img src={logo} alt="Logo" height="60" width="60" className='logo-img'/></Link>
         
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
             
           
              <>
              <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/academics" className="nav-link">Academics</Link>
                <Link to="/admission" className="nav-link">Admission</Link>
                <Link to="/gallery" className="nav-link">Gallery</Link>
                <Link to="/faculty" className="nav-link">Faculty</Link>
                <Link to="/student" className="nav-link">Student</Link>
               
              </>
          
          </Nav>
          <Nav>
         
          
              <Link to="/contact" className="nav-link">Contact Us</Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
