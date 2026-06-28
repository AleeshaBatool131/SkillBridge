import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Services from "../pages/Services"
import SellerProfile from "../pages/SellerProfile";
import ServiceDetails from "../pages/ServiceDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/seller/:id" element={<SellerProfile />}/>
        <Route path="/service/:id" element={<ServiceDetails />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;