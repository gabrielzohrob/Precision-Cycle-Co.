import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LocationPage from './pages/LocationPage';
import AboutPage from './pages/AboutPage';
import ServiceSelectionPage from './pages/ServiceSelectionPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';

import NavigationBar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/locations" element={<LocationPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServiceSelectionPage />} />
        <Route path="/services/:serviceName" element={<ServiceDetailsPage />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
