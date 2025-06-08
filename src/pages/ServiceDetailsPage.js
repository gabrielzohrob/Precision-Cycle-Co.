import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ServiceDetailsPage.css'; // Optional: style it as needed

const ServiceDetailsPage = ({ service = 'Brake Repair', price = 'Starting from 40$', image = '/images/brake repair.png' }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Container className="mt-5 mb-5">
      <Row className="mb-4">
        <Col md={6}>
          <img src={image} alt={service} className="img-fluid rounded mb-3" />
        </Col>

        <Col md={6}>
          <h2>{service}</h2>
          <p><em>{price}</em></p>
          <p>Precision brake adjustments and replacements to keep you safe and in control on every ride.</p>

          <Card className="p-3 shadow-sm mb-4">
            <h5>Please fill out the following form</h5>
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="John Doe" required />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="email@example.com" required />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Visit Location</Form.Label>
                <Form.Control type="text" placeholder="Address or neighborhood" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>How can we help you?</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Form.Check
                type="checkbox"
                label="I accept the terms"
                className="mb-3"
                required
              />

              <Form.Group className="mb-3">
                <Form.Label>Select a Date to see Availability</Form.Label><br />
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  showTimeSelect
                  dateFormat="Pp"
                  className="form-control"
                />
              </Form.Group>
            </Form>
          </Card>

          <Card className="p-3 shadow-sm">
            <h6>Add new card</h6>
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Card number</Form.Label>
                <Form.Control type="text" placeholder="•••• •••• •••• ••••" required />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Card owner</Form.Label>
                <Form.Control type="text" placeholder="Full name on card" required />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Label>Expiry date</Form.Label>
                  <Form.Control type="text" placeholder="MM/YY" required />
                </Col>
                <Col>
                  <Form.Label>CVV</Form.Label>
                  <Form.Control type="text" placeholder="•••" required />
                </Col>
              </Row>

              <Form.Check className="mt-3" type="checkbox" label="Set as default" />
              <Form.Check type="checkbox" label="Pay in person" />

              <Button className="browse_services-btn mt-3" type="submit">
                Book Service
              </Button>
              <p className="text-muted mt-2" style={{ fontSize: '0.9rem' }}>
                Prices may vary depending on service and availability.
              </p>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceDetailsPage;
