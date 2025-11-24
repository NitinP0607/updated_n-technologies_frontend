import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Services = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

    const servicesSectionRef = useRef(null);
  const serviceCardsRef = useRef([]);
  const bottomLeftRef = useRef(null);
  const bottomRightRef = useRef(null);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (servicesSectionRef.current) observer.observe(servicesSectionRef.current);

    serviceCardsRef.current.forEach((card) => card && observer.observe(card));

    if (bottomLeftRef.current) observer.observe(bottomLeftRef.current);
    if (bottomRightRef.current) observer.observe(bottomRightRef.current);
  }, []);


  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Example: you can connect this to your backend later
      console.log("Form Data Submitted:", formData);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      alert("Your request has been submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="services-main">
      {/* FULL SCREEN LOADER */}
      {loading && (
        <div className="overlay">
          <div className="loader"></div>
        </div>
      )}
      <h1>Our Top Web Services</h1>
      <div className="services-section" ref={servicesSectionRef}>
        <div className="service" ref={(el) => (serviceCardsRef.current[0] = el)}>
          <img src={assets.frontend_image} alt="frontend_deelopment" />
          <span className="frontend-service">Frontend Development</span>
          <p>
            We are top frontend team who helps to build your ideas in practical
            way
          </p>
          <Link to={"/services/frontend-read-more"}>Read More</Link>
        </div>
        <div className="service" ref={(el) => (serviceCardsRef.current[1] = el)}>
          <img src={assets.backend_image} alt="backend_development" />
          <span className="frontend-service">Backend Development</span>
          <p>
            We have the team who have skills and experience in Backend
            developers.
          </p>
          <Link to={"/services/backend-read-more"}>Read More</Link>
        </div>
        <div className="service" ref={(el) => (serviceCardsRef.current[2] = el)}>
          <img src={assets.appdevelopment_image} alt="frontend_deelopment" />
          <span className="frontend-service">App Development</span>
          <p>Teams who are expert in App Development</p>
          <Link to={"/services/appdevelopment-read-more"}>Read More</Link>
        </div>
        <div className="service" ref={(el) => (serviceCardsRef.current[3] = el)}>
          <img src={assets.digitalmarketing_image} alt="frontend_deelopment" />
          <span className="frontend-service">Digital Marketing</span>
          <p>Digital Marketing Team helps you to grow your business</p>
          <Link to={"/services/digital-marketing-read-more"}>Read More</Link>
        </div>
        <div className="service" ref={(el) => (serviceCardsRef.current[4] = el)}>
          <img src={assets.uiux_image} alt="frontend_deelopment" />
          <span className="frontend-service">UI/UX Design</span>
          <p>
            UX/UI Design are according to your needs and provide better
            expereince
          </p>
          <Link to={"/services/ui-ux-read-more"}>Read More</Link>
        </div>
        <div className="service" ref={(el) => (serviceCardsRef.current[5] = el)}>
          <img src={assets.softwaredevelopement_image} alt="frontend_deelopment" />
          <span className="frontend-service">Software Development</span>
          <p>Helps you to build your software, which have your ideas</p>
          <Link to={"/services/software-read-more"}>Read More</Link>
        </div>
      </div>
      <hr />
      <div className="service-bottom-part" >
        <div className="service-bottom-part-left" ref={bottomLeftRef}>
          <p>At N-Technologies, we are committed to delivering modern, 
            reliable, and fully customized web services that help businesses build a strong digital presence. 
            Our expert team specializes in website development, responsive design, UI/UX enhancement, 
            SEO optimization, and full-stack solutions tailored to meet your unique business needs. 
            Whether you want to create a new website, redesign an existing one, or develop a complete 
            web application, we combine creativity with advanced technology to deliver fast, secure, 
            and user-friendly results.
            If you need assistance with any web-related project, simply fill out our Request a Service form. 
            Share your requirements, and our team will promptly connect with you, discuss your needs, 
            and guide you toward the best solution to help your business grow online.</p>
        </div>
        <div className="service-form-container" ref={bottomRightRef}>
          <h2>Request a Service</h2>
          <form className="service-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a Service</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="App Development">App Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Software Development">Software Development</option>
            </select>
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Services;
