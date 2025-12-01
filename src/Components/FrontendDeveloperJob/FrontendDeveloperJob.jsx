import React, { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./FrontendDeveloperJob.css";

const FrontendDeveloper = () => {
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

  const handleFile = (e) => {
    setForm({ ...form, resume: e.target.files[0] });
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
      await axios.post(
        "https://updated-n-technologies-backend.onrender.com/api/application/apply-jobs",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success("Application submitted successfully!");

      // Reset Form
      setForm({
        name: "",
        email: "",
        phone: "",
        about: "",
        resume: null,
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit application. Try again!");
    }

    setLoading(false);
  };

  const handleApplyClick = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <div className="frontend-container">

      {/* Header Section */}
      <div className="frontend-header fade-in">
        <h2>Frontend Developer Job</h2>
        <p>
          Join N-Technologies as a Frontend Developer and build high-quality,
          responsive, and modern user interfaces for real-world projects.
        </p>
      </div>

      {/* About Job */}
      <section className="frontend-section slide-left">
        <h2>About the Role</h2>
        <p>
          We are looking for a skilled Frontend Developer who is passionate about
          UI/UX, modern web technologies, and creating pixel-perfect frontends.
          You will work closely with designers and backend teams to build seamless
          user experiences.
        </p>
      </section>

      {/* Key Responsibilities */}
      <section className="frontend-section slide-right">
        <h2>Roles & Responsibilities</h2>
        <ul>
          <li>Develop responsive UI using HTML, CSS, JavaScript & React</li>
          <li>Convert Figma/PSD designs into clean frontend code</li>
          <li>Optimize web applications for speed & performance</li>
          <li>Work with APIs and integrate backend data</li>
          <li>Write clean, reusable, modular components</li>
          <li>Debug, test, and maintain frontend systems</li>
          <li>Collaborate with designers and backend developers</li>
        </ul>
      </section>

      {/* Required Skills */}
      <section className="frontend-section slide-left">
        <h2>Required Skills</h2>
        <ul>
          <li>Strong skills in HTML5, CSS3, JavaScript</li>
          <li>Good understanding of React.js</li>
          <li>Knowledge of responsive and mobile-first design</li>
          <li>Basic understanding of Git & version control</li>
          <li>Familiarity with APIs & JSON</li>
          <li>Good problem-solving & debugging ability</li>
        </ul>
      </section>

      {/* Eligibility */}
      <section className="frontend-section slide-right">
        <h2>Eligibility</h2>
        <ul>
          <li>0–2 years of experience</li>
          <li>Freshers with strong skills can also apply</li>
          <li>Graduates or students pursuing IT/CS preferred</li>
          <li>Must have completed at least 2 frontend projects</li>
        </ul>
      </section>

      {/* Apply Button */}
      <div className="apply-btn-container fade-in">
        <button className="apply-btn" onClick={handleApplyClick}>
          Apply Now
        </button>
      </div>

      {/* Apply Form */}
      {showForm && (
        <div ref={formRef} className="frontend-form fade-in-up">
          <h3>Apply for Frontend Developer Role</h3>

          <form className="form-box" onSubmit={handleSubmit}>

            <label>Full Name</label>
            <input type="text" name="name" value={form.name} onChange={handleInput} placeholder="Enter your full name" required />

            <label>Email Address</label>
            <input type="email" name="email" value={form.email} onChange={handleInput} placeholder="Enter your email" required />

            <label>Phone Number</label>
            <input type="text" name="phone" value={form.phone} onChange={handleInput} placeholder="Enter your phone number" required />

            <label>Upload Resume</label>
            <input name="resume" onChange={handleFile} type="file" accept=".pdf,.doc,.docx" required />

            <label>Why should we hire you?</label>
            <textarea name="about" value={form.about} onChange={handleInput} placeholder="Tell us about your skills, experience & passion" required/>

             <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? <div className="loader"></div> : "Submit Application"}
            </button>
          </form>
        </div>
      )}

    </div>
  );
};

export default FrontendDeveloper;
