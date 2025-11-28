import React, { useState, useRef } from "react";
import "./BackendInternship.css";

const BackendInternship = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handleApplyClick = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <div className="internship-container">

      {/* Header */}
      <div className="internship-header fade-in">
        <h1>Backend Development Internship</h1>
        <p>Grow your backend engineering skills with real-world server-side projects at N-Technologies.</p>
      </div>

      {/* About */}
      <section className="internship-about slide-left">
        <h2>About the Internship</h2>
        <p>
          This internship is designed for individuals who want to specialize in backend development.
          You will work with Node.js, Express.js, MongoDB, REST APIs, authentication systems, and
          backend logic used in real industry-level projects. Mentors will guide you through
          building secure, scalable, and high-performance server-side applications.
        </p>
      </section>

      {/* Features */}
      <section className="internship-section zoom-in">
        <h2>Internship Features</h2>
        <ul className="stagger">
          <li>Hands-on experience with Node.js & Express.js</li>
          <li>Real API development and integration</li>
          <li>Work with MongoDB & database modeling</li>
          <li>Learn authentication (JWT, bcrypt, cookies)</li>
          <li>Build production-level backend systems</li>
          <li>Certificate of Completion from N-Technologies</li>
          <li>Live project added to your resume</li>
        </ul>
      </section>

      {/* Responsibilities */}
      <section className="internship-section slide-right">
        <h2>Roles & Responsibilities</h2>
        <ul className="stagger">
          <li>Develop REST APIs using Node.js & Express.js</li>
          <li>Design MongoDB schemas & manage databases</li>
          <li>Integrate APIs with frontend applications</li>
          <li>Implement middleware & authentication systems</li>
          <li>Optimize backend performance</li>
          <li>Debug and resolve server-side issues</li>
          <li>Work with Git & GitHub for code management</li>
        </ul>
      </section>

      {/* Eligibility */}
      <section className="internship-section slide-left">
        <h2>Eligibility Criteria</h2>
        <ul className="stagger">
          <li>Basic knowledge of JavaScript</li>
          <li>Understanding of Node.js is a plus</li>
          <li>Knowledge of APIs or databases is helpful</li>
          <li>Students, freshers, & job seekers can apply</li>
          <li>Ability to give 1–2 hours daily</li>
          <li>Strong passion for backend development</li>
        </ul>
      </section>

      {/* Apply Button */}
      <div className="apply-btn-container fade-in">
        <button className="apply-btn" onClick={handleApplyClick}>
          Apply Now
        </button>
      </div>

      {/* Application Form */}
      {showForm && (
        <div ref={formRef} className="internship-form form-animation">
          <h3>Apply for Backend Development Internship</h3>

          <form className="form-box">

            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />

            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Phone Number</label>
            <input type="text" placeholder="Enter your phone number" required />

            <label>Upload Resume</label>
            <input type="file" accept=".pdf,.doc,.docx" required />

            <label>Why you want to join us .?</label>
            <textarea placeholder="Tell me something more about you"></textarea>

            <button type="submit" className="submit-btn">Submit Application</button>
          </form>
        </div>
      )}

    </div>
  );
};

export default BackendInternship;
