import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";



const Footer = () => {

   const addressLink = () => {
    window.open(
      "https://www.google.com/maps?q=Near+Metro+Station+62,+B-51+Noida+Sector-62,+Gautam+Budhha+Nagar+201301",
      "_blank"
    );
  };

   const sendMeail = () => {
    window.location.href = "mailto:contact@n-technologies.in";
  };

   const callOwner = () => {
    window.location.href = "tel:+918795946166";
  };

  const openMapLink = () => {
    alert("Office Hours: Mon - Sat, 10:00 AM - 6:00 PM");
  };
    const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Section */}
        <div className="footer-about">
          <h2>n-technologies</h2>
          <p>
            We deliver modern digital solutions—from web development to 
            enterprise-level applications. Our mission is to help businesses 
            grow with reliable, scalable, and high-quality technology.
          </p>

          <div className="footer-social">
            <a href="https://www.facebook.com/100012794568093/"><img src={assets.facebook_icon} alt="facebook" /></a>
            <a href="https://www.instagram.com/frontend_backend_hub"><img src={assets.instagram_icon} alt="instagram" /></a>
            <a href="https://www.linkedin.com/in/n-technologies123/"><img src={assets.linkedin_icon} alt="linkedin" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={()=>navigate('/')}>Home</li>
            <li onClick={()=>navigate('/services')}>Services</li>
            <li onClick={()=>navigate('/careers')}>Careers</li>
            <li onClick={()=>navigate('/contact')}>Contact</li>
            <li onClick={()=>navigate('/about')}>About Us</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-services">
          <h3>Services</h3>
          <ul>
            <li onClick={()=>navigate('/services')}>Web Development</li>
            <li onClick={()=>navigate('/services')}>Backend Development</li>
            <li onClick={()=>navigate('/services')}>App Development</li>
            <li onClick={()=>navigate('/services')}>Digital Marketing</li>
            <li onClick={()=>navigate('/services')}>UI/UX Designing</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p onClick={addressLink}><img src={assets.address_icon} alt="" /> Near Metro 62, B-51 Noida Sector-62</p>
          <p onClick={callOwner}><img src={assets.call_icon} alt="" /> +91-8795946166</p>
          <p onClick={sendMeail}><img src={assets.mail_icon} alt="" /> contact@n-technologies.in</p>
          <p onClick={openMapLink}><img src={assets.available_icon} alt="" /> Mon – Sat : 10 AM – 6 PM</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} N-Technologies. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
