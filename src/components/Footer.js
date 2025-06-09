import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <hr className="footer-line" />

      <div className="footer-content container">
        {/* Left: Logo + Socials */}
        <div className="footer-left">

          <img src="./images/logo-no-text.png" alt="Logo" className="footer-logo" />

          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        {/* Right: Services + Contact */}
        <div className="footer-columns">
          <div className="footer-column">
            <h6>Services</h6>
            <p>Bike Repair</p>
            <p>E-Bike Repair</p>
            <p>Onsite Service</p>
          </div>

          <div className="footer-column">
            <h6>Contact us</h6>
            <div className="contact-row">
              <span>Email</span>
              <span>pcyco@cycleco.ca</span>
            </div>
            <div className="contact-row">
              <span>Phone Number</span>
              <span>(613) 623-5849</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Precision Cycle Co. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;