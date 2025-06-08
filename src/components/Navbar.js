import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavigationBar = () => {
  return (
    <nav className="custom-navbar">
      <div className="nav-logo">
        <Link to="/" className="navbar-brand">
          <img
            src="/images/logo.png"
            alt="Precision Cycle Co."
            style={{ height: '40px' }}
          />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/locations">Location</Link> {/* ✅ Fixed path */}
        <Link to="/contact">
          <button className="contact-btn">Contact Us</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
