import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <Container className="about-page mt-5 mb-5">
      <h1 className="mb-3">Learn More About Us!</h1>
      <p className="text-muted mb-4">
        At Precision Cycle Co., we’re more than just mechanics — we’re passionate riders who believe every bike deserves expert care and every cyclist deserves reliable service. Learn how we got started and what drives us to keep Ottawa rolling.
      </p>

      <img
        src="/images/bike-repair.jpg"
        alt="Working on a bike"
        className="about-main-image mb-4"
      />

      <p>
        Founded in the heart of Ottawa, Precision Cycle Co. was built on the idea that quality repairs and honest service shouldn't be hard to find.
        Whether you're commuting to work, training for a race, or cruising the trails, our mission is to keep your ride smooth, safe, and ready for adventure.
      </p>

      <p>
        Our certified technicians specialize in both classic bikes and e-bikes, offering fast diagnostics, same-day repairs, and mobile roadside assistance.
        We take pride in getting it right the first time, using quality parts and precision tools with every service.
      </p>

      <Row>
          <Col>
            <h2 className="mt-5 mb-3">Our Most Popular Services</h2>
          </Col>
  
          <Col className="justify-content-center mt-5 mb-3">
            <div className="d-flex justify-content-between justify-content-center align-items-center">
              <div></div>
              <button className="browse_services-btn" onClick={() => navigate('/service-catalogue')}>Service Catalogue</button>
            </div>
          </Col>
      </Row>

      <Row className="mb-5">
              <Col md={4}>
                <Card className="mb-3 service-card">
                  <Card.Img variant="top" src="/images/flat-tire.jpg" />
                  <Card.Body>
                    <Card.Title>Flat Tire Repair</Card.Title>
                    <Card.Text>Quick, hassle-free flat fixes to get you back on the road—while you wait!</Card.Text>
                    <Button className="browse_services-btn" onClick={() => navigate('/service/cb-tires')}>Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 service-card">
                  <Card.Img variant="top" src="/images/brake-repair.jpg" />
                  <Card.Body>
                    <Card.Title>Brake Repair</Card.Title>
                    <Card.Text>Precision brake adjustments and replacements to keep you safe and in control on every ride.</Card.Text>
                    <Button className="browse_services-btn" onClick={() => navigate('/service/cb-brakes')}>Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 service-card">
                  <Card.Img variant="top" src="/images/tire-replace.jpg" />
                  <Card.Body>
                    <Card.Title>Full Tune-Ups</Card.Title>
                    <Card.Text>Comprehensive bike tune-ups to boost performance and ensure a smoother, safer ride.</Card.Text>
                    <Button className="browse_services-btn" onClick={() => navigate('/service/cb-tuning')}>Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
    </Container>
  );
};

export default AboutPage;