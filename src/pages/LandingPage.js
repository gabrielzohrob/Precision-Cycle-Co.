import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Button, Card, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const goToServices = () => {
    navigate('/services');
  };

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
    <Container className="landing mt-5">
      <Row className="mb-4">
        <Col>
          <h1>Welcome to Precision Cycle Co.</h1>
          <p className="lead">
            We offer expert bike repairs, tune-ups, and maintenance. 
            From flat tires to full overhauls, we offer same-day service on most repairs and use only quality parts. 
            Ride in today or schedule your service online — your bike will thank you.
          </p>
          <button className="browse_services-btn" onClick={() => navigate('/service-catalogue')}>
            Browse Services
          </button>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <img src="./Precision-Cycle-Co./images/bike-repair.jpg" alt="Bike Tools" className="img-fluid rounded" />
        </Col>
      </Row>

      <h2 className="mb-4">What we have to offer</h2><hr className="section-divider" />
      <p className="lead">We offer a wide variety of services including but not limited to...</p>
      <Row className="mb-5">
        <Col md={4}>
          <Card className="mb-3 service-card">
            <Card.Img variant="top" src="./Precision-Cycle-Co./images/flat-tire.jpg" />
            <Card.Body>
              <Card.Title>Flat Tire Repair</Card.Title>
              <Card.Text>Quick, hassle-free flat fixes to get you back on the road—while you wait!</Card.Text>
              <Button className="browse_services-btn" onClick={() => navigate('/service/cb-tires')}>Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3 service-card">
            <Card.Img variant="top" src="./Precision-Cycle-Co./images/brake-repair.jpg" />
            <Card.Body>
              <Card.Title>Brake Repair</Card.Title>
              <Card.Text>Precision brake adjustments and replacements to keep you safe and in control on every ride.</Card.Text>
              <Button className="browse_services-btn" onClick={() => navigate('/service/cb-brakes')}>Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3 service-card">
            <Card.Img variant="top" src="./Precision-Cycle-Co./images/tire-replace.jpg" />
            <Card.Body>
              <Card.Title>Full Tune-Ups</Card.Title>
              <Card.Text>Comprehensive bike tune-ups to boost performance and ensure a smoother, safer ride.</Card.Text>
              <Button className="browse_services-btn" onClick={() => navigate('/service/cb-tuning')}>Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className="mb-3 service-card">Where can you find us?</h2>
      <Row>
        <Col md={6}>
          <div>
            <h5><strong>In House</strong></h5>
            <p>
              Bring your bike into our fully equipped shop for expert diagnostics, repairs, and maintenance.
            </p>

            <h5><strong>Roadside Assistance</strong></h5>
            <p>
              Unexpected breakdown? We’ve got your back. Our roadside assistance team is just a call away—ready to help with flat tires, chain issues, or brake problems wherever you are.
            </p>

            <h5><strong>House-Calls</strong></h5>
            <p>
              Convenient bike repair at your doorstep. Our mobile mechanics come to your home with everything needed for tune-ups, adjustments, and minor fixes.
            </p>

            <div className="d-flex gap-3 mt-3">
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

              <button
                onClick={() => navigate('/locations')}
                className="browse_services-btn"
                style={{ backgroundColor: '#f4f4f4', color: '#333' }}
              >
                <strong>See Our Locations</strong>
              </button>
            </div>
          </div>
        </Col>

        <Col md={6} className="d-flex align-items-start">
          <img src="./Precision-Cycle-Co./images/Ottawa map.png" alt="Map" className="img-fluid rounded map-image" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="mt-5 mb-3">We Offer E-Bike Support As Well</h2>
        </Col>

        <Col className="justify-content-center mt-5 mb-3">
          <div className="d-flex justify-content-between justify-content-center align-items-center">
            <div></div>
            <button className="browse_services-btn" onClick={() => navigate('/service-catalogue')}>E-Bike Service Catalogue</button>
          </div>
        </Col>
      </Row>
      

     

      <Row className="mb-5">
        <Col md={6}>
          <img src="./Precision-Cycle-Co./images/battery-replacement.jpg" alt="Battery Replacement" className="img-fluid rounded mb-3" />
          <h5><strong>Battery Replacements</strong></h5>
          <p>
            Keep your ride powered and reliable with our e-bike battery replacement service. We provide expert diagnostics, compatible battery sourcing, and safe installation to ensure optimal performance and range.
          </p>
          <button className="browse_services-btn" onClick={goToServices}>Learn more</button>
        </Col>

        <Col md={6}>
          <img src="./Precision-Cycle-Co./images/ebike-motor-repair.png " alt="Motor Repairs" className="img-fluid rounded mb-3" />
          <h5><strong>Motor Repairs</strong></h5>
          <p>
            Restore your e-bike’s power and performance with our specialized motor repair service. From diagnostics to component replacements, our technicians handle hub and mid-drive motors with precision and care.
          </p>
          <button className="browse_services-btn" onClick={goToServices}>Learn more</button>
        </Col>
      </Row>

      <h2 className="mt-5 mb-4 testimonial-heading">What Our Customers Have To Say...</h2>

      <Row className="mb-5">
        <Col md={4}>
          <div className="testimonial-card">
            <p>“Amazing, high-quality service”</p> <br />
            <div>
              <p className="testimonial-name">Michael Jackson</p>
              <p className="testimonial-desc">Moonwalks up hills faster than your average cyclist rides down.</p>
            </div>
          </div>
        </Col>

        <Col md={4}>
          <div className="testimonial-card">
            <p>“Quickest response time ever. Amazing customer service!”</p>
            <div>
              <p className="testimonial-name">Jon Bon Jovi</p>
              <p className="testimonial-desc">Livin' on a spare — never without a backup tire.</p>
            </div>
          </div>
        </Col>

        <Col md={4}>
          <div className="testimonial-card">
            <p>“Knew exactly what was wrong with my bike, came out new!”</p>
            <div>
              <p className="testimonial-name">Luciano Pavarotti</p>
              <p className="testimonial-desc">Sings to his bike before every ride — says it improves tire pressure.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;