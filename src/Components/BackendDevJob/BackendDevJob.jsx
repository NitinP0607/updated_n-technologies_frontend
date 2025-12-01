import React, { useState, useRef } from "react";
import axios from "axios";
import "./BackendDev.css";
import { toast } from "react-toastify";

const BackendDevJob = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    about: "",
    resume: null,
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.resume) {
      toast.error("Please upload your resume!");
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("about", form.about);
    formData.append("resume", form.resume);

    try {
      const res = await axios.post(
        "https://updated-n-technologies-backend.onrender.com/api/application/apply-jobs",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(res.data.message || "Application submitted successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        about: "",
        resume: null,
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit application! Please try again.");
    }
    setLoading(false);
  };

  const handleFile = (e) => {
    setForm({ ...form, resume: e.target.files[0] });
  };

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
          backend systems, REST APIs, authentication modules, and database
          logic. You will collaborate with frontend developers and contribute to
          the entire application lifecycle.
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

          <form className="form-box" onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Enter your full name"
              required
              onChange={handleInput}
              />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Enter your email"
              onChange={handleInput}
              required
            />

            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              placeholder="Enter your phone number"
              onChange={handleInput}
              required
            />

            <label>Upload Resume</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFile}
              required
            />

            <label>Why should we hire you?</label>
            <textarea
              name="about"
              value={form.about}
              placeholder="Describe your experience, skills & backend projects"
              onChange={handleInput}
              required
            />

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? <div className="loader"></div> : "Submit Application"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BackendDevJob;
