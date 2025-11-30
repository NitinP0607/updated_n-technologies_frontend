import React, { useState, useRef } from "react";
import "./BackendDev.css";

const BackendDevJob = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handleApplyClick = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <div className="backend-container">

      {/* Header */}
      <div className="backend-header fade-in">
        <h2>Backend Developer Job</h2>
        <p>
          Join N-Technologies as a Backend Developer and help build powerful,
          scalable, and secure server-side applications and APIs.
        </p>
      </div>

      {/* About Job */}
      <section className="backend-section backend-slide-left">
        <h2>About the Role</h2>
        <p>
          We are seeking a skilled Backend Developer who can build robust
          backend systems, REST APIs, authentication modules, and database logic.
          You will collaborate with frontend developers and contribute to the
          entire application lifecycle.
        </p>
      </section>

      {/* Responsibilities */}
      <section className="backend-section backend-slide-right">
        <h2>Roles & Responsibilities</h2>
        <ul>
          <li>Develop RESTful APIs using Node.js / Express</li>
          <li>Design and manage databases (MongoDB, MySQL, PostgreSQL)</li>
          <li>Implement authentication (JWT, OAuth, Session-Based)</li>
          <li>Work closely with frontend developers for API integration</li>
          <li>Write clean, scalable, and optimized code</li>
          <li>Handle server deployment and cloud hosting</li>
          <li>Troubleshoot, debug, and upgrade backend logic</li>
        </ul>
      </section>

      {/* Required Skills */}
      <section className="backend-section backend-slide-left">
        <h2>Required Skills</h2>
        <ul>
          <li>Strong understanding of Node.js & Express.js</li>
          <li>Knowledge of MongoDB or SQL Database</li>
          <li>Understanding of API architecture & MVC pattern</li>
          <li>Basic DevOps understanding (deployment, servers, hosting)</li>
          <li>Familiarity with Git & version control</li>
          <li>Strong debugging and problem-solving skills</li>
        </ul>
      </section>

      {/* Eligibility */}
      <section className="backend-section backend-slide-right">
        <h2>Eligibility</h2>
        <ul>
          <li>0–2 years of experience (Freshers may also apply)</li>
          <li>Degree in CS/IT or related fields preferred</li>
          <li>Should have built at least 1–2 backend projects</li>
          <li>Good understanding of APIs, database & server concepts</li>
        </ul>
      </section>

      {/* Apply Button */}
      <div className="backend-apply-btn-container fade-in">
        <button className="backend-apply-btn" onClick={handleApplyClick}>
          Apply Now
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div ref={formRef} className="backend-form fade-in-up">
          <h3>Apply for Backend Developer Role</h3>

          <form className="form-box">

            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />

            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Phone Number</label>
            <input type="text" placeholder="Enter your phone number" required />

            <label>Upload Resume</label>
            <input type="file" accept=".pdf,.doc,.docx" required />

            <label>Why should we hire you?</label>
            <textarea placeholder="Describe your experience, skills & backend projects" />

            <button type="submit" className="submit-btn">Submit Application</button>
          </form>
        </div>
      )}

    </div>
  );
};

export default BackendDevJob;
