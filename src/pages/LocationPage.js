import React, { useState } from 'react';
import './LocationPage.css';

const locations = [
  {
    name: 'Bayshore Shopping Centre',
    address: '100 Bayshore Dr, Ottawa, ON K2B 8C1',
   mapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.351947804413!2d-75.79472892422941!3d45.355114940230504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd20df86b7cf1c7%3A0x3361a5de29004cb0!2sBayshore%20Shopping%20Centre!5e0!3m2!1sen!2sca!4v1717775134905!5m2!1sen!2sca'

  },
  {
    name: 'Carleton University',
    address: '1125 Colonel By Dr, Ottawa, ON K1S 5B6',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.264964860946!2d-75.6979772844403!3d45.385531946969735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce06e81a4c02df%3A0x2b2ac528b0218d3c!2sCarleton%20University!5e0!3m2!1sen!2sca!4v1717724700351!5m2!1sen!2sca',
  },
  {
    name: 'Ottawa City Hall',
    address: '110 Laurier Ave W, Ottawa, ON K1P 1J1',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.663002510076!2d-75.69437948444119!3d45.428683943939095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0501c377d1b3%3A0xe7b23e77ec98461!2sOttawa%20City%20Hall!5e0!3m2!1sen!2sca!4v1717724798320!5m2!1sen!2sca',
  },
];

const LocationPage = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [showPopup, setShowPopup] = useState(false);

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
    <div className="location-container container mt-5 mb-5">
      <div className="row align-items-start">
        <div className="col-md-6">
          <h2 className="location-heading">Where are we located?</h2>
          <p className="text-muted mb-3">Click a location to view it on the map:</p>

          <ul className="location-list">
            {locations.map((loc, idx) => (
              <li
                key={idx}
                className={`location-item ${
                  selectedLocation.name === loc.name ? 'active' : ''
                }`}
                onClick={() => setSelectedLocation(loc)}
              >
                <strong>{loc.name}</strong>
                <p className="small mb-1">{loc.address}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-6">
          <div className="map-container">
            <iframe
              title={selectedLocation.name}
              src={selectedLocation.mapUrl}
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="row mt-5">
        <div className="col-md-6">
          <h4>Questions? Feel Free to Contact Us</h4>
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

            <button type="submit" className="browse_services-btn">Submit</button>
          </form>

          {showPopup && (
            <div className="submission-popup mt-3">
              ✅ Your message was submitted!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationPage;