import React, { useState } from 'react';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ServiceDetails.css'; // Optional: style it as needed
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(setHours(setMinutes(new Date(), 30), 17));

  const params = useParams();

  const currentService = params.serviceId;

  let serviceData = {
    "cb-tuning": ["Classic Bike Tuning", "50-80", './Precision-Cycle-Co./images/tuning.jpg', "A thorough tune-up service that restores your bike’s performance and extends its lifespan. This includes precise adjustments to brakes and gears, tire pressure optimization, chain lubrication, and bolt torque checks across the frame. We also inspect wear points like the drivetrain and cables, ensuring everything is operating smoothly. Ideal for seasonal maintenance or getting a neglected bike road-ready again."],
    "cb-drivetrain": ["Classic Bike Drivetrain Repair", "25-50", './Precision-Cycle-Co./images/gear-repair.jpg', "Focused on the heart of your bike’s pedaling system, this service addresses issues with the chain, cassette/freewheel, crankset, and bottom bracket. Whether you’re experiencing slipping gears, chain drops, or grinding sounds, we inspect, clean, and replace worn components to restore efficient power transfer. Essential for bikes that have seen heavy mileage or inconsistent shifting."],
    "cb-brakes": ["Classic Bike Brake Repair", "25-30", './Precision-Cycle-Co./images/brake-repair.jpg', "Safety starts with reliable brakes. This service includes brake pad inspection and replacement, cable or hose adjustment, and realignment of rim or disc calipers. If your stopping power feels weak or noisy, we’ll get your system properly balanced and responsive again—whether you use mechanical or hydraulic brakes."],
    "cb-tires": ["Classic Bike Tire Repair", "15-20$", './Precision-Cycle-Co./images/tire-replace.jpg', "We repair punctured inner tubes, replace worn or damaged tires, and ensure your wheels are properly seated and inflated. Our techs inspect the tread, rim tape, and valve integrity to help prevent future flats. It’s a quick but crucial service that ensures your bike rolls safely and efficiently."],
    "cb-shift": ["Classic Bike Gearshift Repair", "60-80", './Precision-Cycle-Co./images/shifter-repair.jpg', "When gears hesitate, skip, or grind, it’s time for a precision shifter service. We check cable tension, realign derailleurs, fine-tune indexing, and replace cables or housing if needed. We also inspect the shifters themselves for wear or malfunction. Perfect for bikes struggling with gear changes, especially under load or during climbs."],
    "cb-suspension": ["Classic Bike Suspension Repair", "25-30", './Precision-Cycle-Co./images/suspension-repair.jpg', "A smooth ride starts with responsive suspension. We inspect and service front forks and rear shocks (if applicable), checking for seal damage, oil leaks, or travel inconsistencies. Services include basic maintenance like cleaning and lubrication, or more advanced teardown and rebuilds for suspension systems depending on brand and age."],
    "eb-diagnostic": ["Electric Bike General Diagnostic", "30-80", './Precision-Cycle-Co./images/ebike-diag.jpg', "If your e-bike is acting up—loss of power, error codes, sensor issues—this diagnostic service identifies the root cause. Using brand-specific tools and procedures, we check the motor, controller, sensors, wiring, and battery integration. You’ll receive a full report with recommendations for repairs or upgrades. Ideal for troubleshooting unknown issues."],
    "eb-battery": ["Electric Bike Battery Repair", "60-120", './Precision-Cycle-Co./images/battery-replacement.jpg', "This service involves testing and restoring your battery’s performance. We evaluate voltage output, charge/discharge cycles, and physical integrity. If needed, we can replace battery cells, rewire terminals, or recommend OEM-compatible replacements. Ensures your ride doesn’t lose power prematurely or unexpectedly."],
    "eb-system": ["Electric Bike System Services", "45-80", './Precision-Cycle-Co./images/ebike-motor-repair.jpg', "We inspect and repair the motor, controller, torque sensors, and wiring harness. Whether it’s a hub-drive or mid-drive system, we ensure the electrical and mechanical integration is functioning correctly. Includes cleaning contacts, replacing damaged wiring, and correcting assist level inconsistencies."],
    "eb-software": ["Electric Bike Software Services", "30-100", './Precision-Cycle-Co./images/software.jpg', "This includes updating firmware, resetting error codes, customizing pedal assist levels, and performing brand-specific system diagnostics (e.g., Bosch, Shimano, Bafang). Many modern e-bikes rely on software for motor behavior and battery management, and we ensure yours is up-to-date and configured for your riding style."]
  };

  

  const currentVars = serviceData[currentService];

  const service =  currentVars[0];
  const price = "Starting from $" + currentVars[1];
  const image = currentVars[2];
  const desc = currentVars[3];

  return (
    <Container className="mt-5 mb-5">
      <Row className="mb-4">
        <Col md={6}>
          <img src={image} alt={service} className="img-fluid rounded mb-3" />
        </Col>

        <Col md={6}>
          <h2>{service}</h2>
          <p><em>{price}</em></p>
          <p>{desc}</p>

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
                  selected={selectedDateTime}
                  onChange={(date) => setSelectedDateTime(date)}
                  showTimeSelect
                  minTime={setHours(setMinutes(new Date(), 0), 10)}
                  maxTime={setHours(setMinutes(new Date(), 30), 16)}
                  dateFormat="MMMM d, yyyy h:mm aa"
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

export default ServiceDetails;
