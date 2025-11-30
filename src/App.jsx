import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import About from "./Pages/About/About";
import Careers from "./Pages/Career/Careers";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import ScrollToTop from "./Pages/StartTopPage/ScrollToTop";
import WebInternship from "./Components/WebInternship/WebInternship";
import BackendInternship from "./Components/BackendInternship/BackendInternship";
import DigitalMarketingInternship from "./Components/DigitalMraketingInternship/DigitalMarketingInternship";
import FrontendDeveloper from "./Components/FrontendDeveloperJob/FrontendDeveloperJob";
import BackendDevJob from "./Components/BackendDevJob/BackendDevJob";
import NoVacancy from "./Components/NoVacancy/NoVacancy";

const App = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers/web-internship" element={<WebInternship />} />
        <Route path="/careers/backend-internship" element={<BackendInternship />} />
        <Route path="/careers/digital-marketing-internship" element={<DigitalMarketingInternship />} />
        <Route path="/careers/frontend-job" element={<FrontendDeveloper />} />
        <Route path="/careers/backend-job" element={<BackendDevJob />} />
        <Route path="/careers/no-vacancy" element={<NoVacancy />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
