import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ServiceSelectionPage.css';

const ServiceSelectionPage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div className="service-hero-container">
        <img
          src="/images/bike repair.png"
          alt="Service Banner"
          className="hero-background-img"
        />
        <div className="hero-text-overlay">
          <h1>Our Service Catalogue</h1>
          <p>
            Our wide range of services is sure to <br />
            have the solution you need
          </p>
        </div>
      </div>

      {/* Service Categories */}
      <div className="container mt-5 mb-5">
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h4 style={{ color: '#5A6B52', fontWeight: 'bold' }}>Classic Bike Services</h4>
            <p className="text-muted">
              A subheading for this section, as long or as short as you like
            </p>
            <div className="d-flex gap-2">
              <button className="browse_services-btn">View</button>
              <button
                className="browse_services-btn"
                style={{ backgroundColor: '#f4f4f4', color: '#333', fontWeight: 'bold' }}
                onClick={() => navigate('/contact')}
              >
                Ask a Specialist
              </button>
            </div>
          </Col>
          <Col md={6}>
            <img
              src="/images/learn more about us.png"
              alt="Classic"
              className="img-fluid rounded service-img"
            />
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={6}>
            <img
              src="/images/battery replacement.png"
              alt="E-Bike"
              className="img-fluid rounded service-img"
            />
          </Col>
          <Col md={6}>
            <h4 style={{ color: '#5A6B52', fontWeight: 'bold' }}>E-Bike Services</h4>
            <p className="text-muted">
              A subheading for this section, as long or as short as you like
            </p>
            <div className="d-flex gap-2">
              <button className="browse_services-btn">View</button>
              <button
                className="browse_services-btn"
                style={{ backgroundColor: '#f4f4f4', color: '#333', fontWeight: 'bold' }}
                onClick={() => navigate('/contact')}
              >
                Ask a Specialist
              </button>
            </div>
          </Col>
        </Row>
      </div>

      {/* Most Used Services */}
      <div className="container mb-5">
        <h2 className="mb-4" style={{ color: '#5A6B52', fontWeight: 'bold' }}>
          Our Most Used Services
        </h2>

        <Row className="gx-5">
          {/* Full Bike Tuning */}
          <Col md={6}>
            <img
              src="/images/tune ups.png"
              alt="Full Bike Tuning"
              className="img-fluid rounded mb-2"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
            <h6 className="fw-bold">Full Bike Tuning</h6>
            <p className="text-muted mb-1">Prices may vary depending on bike condition</p>
            <p><strong>Starting at 30$</strong></p>
          </Col>

          {/* Right stacked items */}
          <Col md={6} className="d-flex flex-column gap-4">
            <div>
              <img
                src="/images/battery replacement.png"
                alt="E-Bike Battery Replacement"
                className="img-fluid rounded mb-2"
                style={{ height: '140px', width: '100%', objectFit: 'cover' }}
              />
              <h6 className="fw-bold">E-Bike Battery Replacement</h6>
              <p className="text-muted mb-1">Prices may vary depending on model</p>
              <p><strong>Starting at 200$</strong></p>
            </div>

            <div>
              <img
                src="/images/flat tire.png"
                alt="Tire Replacement"
                className="img-fluid rounded mb-2"
                style={{ height: '140px', width: '100%', objectFit: 'cover' }}
              />
              <h6 className="fw-bold">Tire Replacement</h6>
              <p className="text-muted mb-1">We offer replacements of one or both tires</p>
              <p><strong>From 25–50$</strong></p>
            </div>
          </Col>
        </Row>
        <div className="container mt-5 mb-5">
        <h2 className="mb-4" style={{ color: '#5A6B52', fontWeight: 'bold' }}>
            Why Choose Us?
        </h2>

        <Row className="text-center">
            <Col md={4} className="mb-4">
                <i className="bi bi-lightning-charge" style={{ fontSize: '2rem', color: '#5A6B52' }}></i>
                <h6 className="fw-bold mt-2">Fast Turnaround</h6>
                <p className="text-muted">Same-day service on most repairs to get you back on the road ASAP.</p>
            </Col>

            <Col md={4} className="mb-4">
                <i className="bi bi-shield-check" style={{ fontSize: '2rem', color: '#5A6B52' }}></i>
                <h6 className="fw-bold mt-2">Trusted Expertise</h6>
                <p className="text-muted">Certified mechanics with a passion for precision and reliability.</p>
            </Col>

            <Col md={4} className="mb-4">
                <i className="bi bi-house-door" style={{ fontSize: '2rem', color: '#5A6B52' }}></i>
                <h6 className="fw-bold mt-2">Mobile Service</h6>
                <p className="text-muted">We come to you—whether it’s a flat at home or a roadside issue.</p>
            </Col>
        </Row>
        </div>
      </div>
    </>
  );
};

export default ServiceSelectionPage;