import React from 'react';
import { Row, Col, Container, Button, Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import './ServiceCatalogue.css';

function ServiceCatalogue(){

    const navigate = useNavigate();

    return(
    <>
        <div class="service-hero-container">
            <img

                src="./images/gear-repair.jpg"

                alt="Service Banner"
                className="hero-background-img"
            />
            <div className="hero-text-overlay">
                <h1>Our Service Catalogue</h1>
                <p>Our wide range of service is sure to <br /> have the solution you need</p>
            </div>

        </div>

        <Container class="service-catalogue-carousel">
            <h1 class="mb-4 caroussel-title">Expert Bicycle & E-Bike Repair Services You Can Trust</h1>
            <p style={{
                padding: "3vh 10vw",
                textAlign: 'center'
            }}>At our shop, we pride ourselves on delivering high-quality, precision bicycle and e-bike repairs backed 
                by years of experience and a passion for cycling. Whether you’re commuting daily, 
                training hard, or riding for fun, your bike deserves the best care—and that’s exactly what we provide.</p>

            <p style={{
                padding: "1vh 10vw",
                textAlign: 'center'
            }}>From simple tune-ups to complex e-bike diagnostics, every service is performed with meticulous attention to detail, 
                using the right tools, premium parts, and proven techniques. 
                We take the time to inspect, explain, and ensure that your bike 
                leaves our shop running smoothly and safely.</p>
        </Container>

        <Container class = "service-catalogue-carousel">
            <h1 class="mb-4 caroussel-title">Check out our Classic Bicycle Services</h1>
            <Carousel controls="true" ride={true} interval={12000}>
                <Carousel.Item>
                    <Row class = "cards-wrapper">
                        <Col>
                            <Card style={{ width: '18rem' }}>

                                <Card.Img variant="top" src="./images/tuning.jpg" />

                                <Card.Body>
                                    <Card.Title>Classic Tuning</Card.Title>
                                    <Card.Text>
                                        Comprehensive maintenance options ranging from basic adjustments to full overhauls that make your bike good as new.
                                    </Card.Text>
                                    <Button variant="primary" className="browse_services-btn" style={{
                                        color: 'white',
                                        fontWeight: 'bold' }}
                                        onClick={() => navigate('/service/cb-tuning')}>Book Now</Button>
                                </Card.Body>
                            </Card>
                            
                        </Col>

                        <Col>
                            <Card style={{ width: '18rem' }}>

                                <Card.Img variant="top"  src="./images/gear-repair.jpg" />

                                <Card.Body>
                                    <Card.Title>Drivetrain Services</Card.Title>
                                    <Card.Text>
                                        Focus on components like the chain, crankset, bottom bracket, and cassette to ensure smooth and efficient pedaling and shifting.
                                    </Card.Text>

                                    <Button variant="primary" className="browse_services-btn" style={{
                                        color: 'white',
                                        fontWeight: 'bold' }}
                                        onClick={() => navigate('/service/cb-drivetrain')}>Book Now</Button>

                                </Card.Body>
                            </Card>
                        
                        </Col>

                        <Col>
                            <Card style={{ width: '18rem' }}>

                                <Card.Img variant="top" src="./images/brake-repair.jpg" />

                                <Card.Body>
                                    <Card.Title>Brake Services</Card.Title>
                                    <Card.Text>
                                        Maintenance and repair of braking systems—rim or disc—ensuring safe and responsive stopping power.
                                    </Card.Text>
                                    <Button variant="primary" className="browse_services-btn" style={{
                                        color: 'white',
                                        fontWeight: 'bold' }}
                                        onClick={() => navigate('/service/cb-brakes')}>Book Now</Button>
                                </Card.Body>
                            </Card>
                        
                        </Col>
                    </Row>

                </Carousel.Item>

                <Carousel.Item>
                    <Row class = "cards-wrapper">
                        <Col>
                            <Card style={{ width: '18rem' }}>

                                <Card.Img variant="top" src="./images/tire-replace.jpg" />

                                <Card.Body>
                                    <Card.Title>Wheel + Tire Care</Card.Title>
                                    <Card.Text>
                                        Covers everything from flat fixes and tire replacements to wheel truing and spoke repair for a smooth, balanced ride.
                                    </Card.Text>
                                    <Button variant="primary" className="browse_services-btn" style={{
                                        color: 'white',
                                        fontWeight: 'bold' }}
                                        onClick={() => navigate('/service/cb-tires')}>Book Now</Button>
                                </Card.Body>
                            </Card>
                            
                        </Col>

                        <Col>
                            <Card style={{ width: '18rem' }}>

                                <Card.Img variant="top" src="./images/shifter-repair.jpg" />

                                <Card.Body>
                                    <Card.Title>Gearshift Services</Card.Title>
                                    <Card.Text>
                                        Adjustments and part replacements to ensure accurate and responsive gear changes while riding.
                                    </Card.Text>
                                    <Button variant="primary" className="browse_services-btn" style={{
                                        color: 'white',
                                        fontWeight: 'bold' }}
                                        onClick={() => navigate('/service/cb-shift')}>Book Now</Button>
                                </Card.Body>
                            </Card>
                        
                        </Col>

                        <Col>
                            <Card style={{ width: '18rem' }}>

                                <Card.Img variant="top" src="./images/gear-repair.jpg" />

                                <Card.Body>
                                    <Card.Title>Headset + Suspension Services</Card.Title>
                                    <Card.Text>
                                        Service for the steering and front suspension components, maintaining control and comfort.
                                    </Card.Text>
                                    <Button variant="primary" className="browse_services-btn" style={{
                                        color: 'white',
                                        fontWeight: 'bold' }}
                                        onClick={() => navigate('/service/cb-suspension')}>Book Now</Button>
                                </Card.Body>
                            </Card>
                        
                        </Col>
                    </Row>

                </Carousel.Item>

            </Carousel>
        </Container>

        <Container class = "service-catalogue-carousel">
            <h1 class="mb-4 caroussel-title">We Offer E-Bike Support As Well</h1>
            <Carousel controls="true" ride={true} interval={12000}>
                <Carousel.Item>
                    <Row class = "cards-wrapper">
                        <Col>
                            <Card style={{ width: '18rem' }}>

                                <Card.Img variant="top" src="./images/ebike-diag.jpg" />

                                <Card.Body>
                                    <Card.Title>E-Bike Diagnostics</Card.Title>
                                    <Card.Text>
                                        Electronic system checks to identify issues with the motor, sensors, and controller.<br></br><br></br>
                                    </Card.Text>
                                    <Button variant="primary" className="browse_services-btn" style={{
                                        color: 'white',
                                        fontWeight: 'bold' }}
                                        onClick={() => navigate('/service/eb-diagnostic')}>Book Now</Button>
                                </Card.Body>
                            </Card>
                            
                        </Col>

                        <Col>
                            <Card style={{ width: '18rem' }}>

                                <Card.Img variant="top" src="./images/battery-replacement.jpg" />

                                <Card.Body>
                                    <Card.Title>Battery & Charging</Card.Title>
                                    <Card.Text>
                                        Testing, installation, and replacement of batteries to maintain power delivery and safety.<br></br><br></br>
                                    </Card.Text>

                                    <Button variant="primary" className="browse_services-btn" style={{
                                        color: 'white',
                                        fontWeight: 'bold' }}
                                        onClick={() => navigate('/service/eb-battery')}>Book Now</Button>

                                </Card.Body>
                            </Card>
                        
                        </Col>

                        <Col>
                            <Card style={{ width: '18rem' }}>

                                <Card.Img variant="top" src="./images/ebike-motor-repair.png" />

                                <Card.Body>
                                    <Card.Title>Electrical System Services</Card.Title>
                                    <Card.Text>
                                        Inspection and repair of wiring, displays, and speed sensors—ensuring proper communication between components.
                                    </Card.Text>
                                    <Button variant="primary" className="browse_services-btn" style={{
                                        color: 'white',
                                        fontWeight: 'bold' }}
                                        onClick={() => navigate('/service/eb-system')}>Book Now</Button>
                                </Card.Body>
                            </Card>
                        
                        </Col>
                    </Row>

                </Carousel.Item>

                <Carousel.Item>
                    <Row class = "cards-wrapper">
                        <Col>
                            <Card style={{ width: '18rem' }}>

                                <Card.Img variant="top" src="./images/software.jpg" />

                                <Card.Body>
                                    <Card.Title>Firmware/Software Services</Card.Title>
                                    <Card.Text>
                                        Updates and configuration of the e-bike’s onboard system, usually required for newer, brand-specific models.
                                    </Card.Text>
                                    <Button variant="primary" className="browse_services-btn" style={{
                                        color: 'white',
                                        fontWeight: 'bold' }}
                                        onClick={() => navigate('/service/eb-software')}>Book Now</Button>
                                </Card.Body>
                            </Card>
                            
                        </Col>

                    </Row>

                </Carousel.Item>

            </Carousel>
        </Container>
        
        <Container class="extra-info" >
                <div style={{textAlign: 'center', marginTop: "15vh"}}>
                    <h2 className="mb-4" style={{ color: '#5A6B52', fontWeight: 'bold'}}>
                        Why Choose Us?
                    </h2>
                </div>
        
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
        </Container>



    </>
    );


}

export default ServiceCatalogue;