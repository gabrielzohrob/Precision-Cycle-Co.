import NavigationBar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { HashRouter, Routes, Route} from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import LocationPage from '../pages/LocationPage';
import AboutPage from '../pages/AboutPage';
import ServiceDetails from '../pages/ServiceDetails';
import ServiceCatalogue from '../pages/ServiceCatalogue';

export default function Router(){
    const Layout = () => {
        return(
            <>
                <NavigationBar />
                <Outlet />
                <Footer />
            </>
        )
    }

    const BrowserRoutes = () => {

        return(
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/locations" element={<LocationPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/service-catalogue" element={<ServiceCatalogue />} />
                        <Route path="/service/:serviceId" element={<ServiceDetails />} />
                    </Route>
                </Routes>
            </HashRouter>
        )
    }

    return(
        <BrowserRoutes />
    )
}