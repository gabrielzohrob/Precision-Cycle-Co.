import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavigationBar = () => {

  const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [showPopup, setShowPopup] = useState(false);
  
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
    
    const handleChange = (e) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const { firstName, lastName, email, message } = formData;
  
      if (!firstName || !lastName || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }
  
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
      }, 2500);
  };

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
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/service-catalogue">Services</Link>
        <Link to="/locations">Location</Link> {/* ✅ Fixed path */}
        
        <button className="browse_services-btn" onClick={handleShow}>Contact us</button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Feel free to ask any questions</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="firstName" className="form-label">First name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          placeholder="Jane"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="lastName" className="form-label">Last name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          placeholder="Smitherton"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="email@janesfakedomain.net"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Your message</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Enter your question or message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="browse_services-btn" onClick={handleClose}>Submit</button>
                  </form>

                  {showPopup && (
                    <div className="submission-popup mt-3">
                      ✅ Your message was submitted!
                    </div>
                  )}
                </Modal.Body>

                <Modal.Footer>
                  
                </Modal.Footer>
                
              </Modal>
        
      </div>
    </nav>
  );
};

export default NavigationBar;
