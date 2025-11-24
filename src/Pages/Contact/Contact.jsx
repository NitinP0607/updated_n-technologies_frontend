import React from 'react'
import "./Contact.css"
import { assets } from '../../assets/assets'

const Contact = () => {

  const addressLink = () => {
    window.open(
      "https://www.google.com/maps?q=Near+Metro+Station+62,+B-51+Noida+Sector-62,+Gautam+Budhha+Nagar+201301",
      "_blank"
    );
  };

  // Email → open default email app
  const sendMeail = () => {
    window.location.href = "mailto:contact@n-technologies.in";
  };

  // Phone → Dialer open
  const callOwner = () => {
    window.location.href = "tel:+918795946166";
  };

  // Office hours → optional (calendar or just show alert)
  const openMapLink = () => {
    alert("Office Hours: Mon - Sat, 10:00 AM - 6:00 PM");
  };
  return (
    <div className="contact-wrapper">
      <div className="header">
        <h1>Contact Us</h1>
        <p>
          Welcome to <span>N-Technologies </span>
          We provide innovative web solutions to help businesses grow.
          Whether you have a question, need support, or want to discuss a project,
          we’re here to listen.
        </p>
      </div>
      <div className="contact-header">
        <h1>More About us</h1>
        <div className="contact-header-info">
          <p>We are currently operating from Noida, where our team works with dedication 
            to deliver high-quality digital solutions to clients across India as well as in the United States. 
            As part of our expansion plan, we are now constructing a new office in Kannauj. 
            This upcoming facility will help us extend our capabilities, strengthen our workforce, 
            and support more businesses with reliable and innovative technology services.

            At N-Technologies, we believe that impactful results come from strong partnerships. 
            Your ideas, vision, and business goals form the foundation of our work. 
            When combined with our technical expertise, modern development practices, and commitment to 
            excellence, they create powerful solutions that drive real growth.

            Whether you are a startup, a growing company, or an established enterprise in India or the US, 
            our mission is to turn your vision into reality. 
            Your idea and our technology together create a pathway to innovation, efficiency, 
            and long-term success.</p>
          <img src={assets.contact_image} alt="not loading" />
        </div>
      </div>
      <div className="contact-main">
        <div className="contact-info">
          <h2>N-Technologies</h2>
          <p onClick={addressLink}><img src={assets.address_icon} alt="" /> Near Metro station 62, B-51 Noida sector-62 , Gautam Bhuddha Nagar , 201301</p>
          <hr />
          <p onClick={sendMeail}><img src={assets.mail_icon} alt="" />contact@n-technologies.in</p>
          <hr />
          <p onClick={callOwner}><img src={assets.call_icon} alt="" /> +91-8795946166</p>
          <hr />
          <p onClick={openMapLink}><img src={assets.available_icon} alt="" /> Mon - Sat, 10:00 AM - 6:00 PM</p>
        </div>

        <div className="contact-map">
          <iframe
            title="N-Technologies Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.761089265838!2d79.68270817576511!3d26.942787458796918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e0d6ad42bea1b%3A0xf30dda011fb5403e!2sN-technologies!5e0!3m2!1sen!2sin!4v1753317388138!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
