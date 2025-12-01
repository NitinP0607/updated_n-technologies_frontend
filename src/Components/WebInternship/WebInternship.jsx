import React, { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./WebInternship.css";

const WebInternship = () => {
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
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Application submitted successfully!");

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
    <div className="internship-container">
      {/* Header Section */}
      <div className="internship-header fade-in">
        <h2>Web Development Internship</h2>
        <p>
          Kickstart your IT career with N-Technologies. Learn, build, and grow
          with real-world projects.
        </p>
      </div>

      {/* About Internship */}
      <section className="internship-about slide-left">
        <h2>About the Internship</h2>
        <p>
          This internship is designed for students and beginners who want to
          build a strong foundation in web development. You will work on modern
          web technologies including HTML, CSS, JavaScript, React.js, Node.js,
          and databases. Mentors will guide you throughout the internship.
        </p>
      </section>

      {/* Features Section */}
      <section className="internship-section zoom-in">
        <h2>Internship Features</h2>
        <ul className="stagger">
          <li>Real-world project experience with expert guidance</li>
          <li>Hands-on training on MERN stack</li>
          <li>Resume-building live project</li>
          <li>Industry-grade coding standards</li>
          <li>Certificate of Completion from N-Technologies</li>
          <li>Flexible work environment</li>
          <li>Chance to get hired based on performance</li>
        </ul>
      </section>

      {/* Responsibilities */}
      <section className="internship-section slide-right">
        <h2>Roles & Responsibilities</h2>
        <ul className="stagger">
          <li>Develop frontend UI using HTML, CSS, JavaScript & React</li>
          <li>Collaborate with backend developers on API integration</li>
          <li>Write clean, optimized, and reusable code</li>
          <li>Participate in daily progress updates and team meetings</li>
          <li>Debug issues and improve existing project features</li>
          <li>Deploy and test web applications</li>
        </ul>
      </section>

      {/* Eligibility */}
      <section className="internship-section slide-left">
        <h2>Eligibility Criteria</h2>
        <ul className="stagger">
          <li>Basic knowledge of HTML, CSS, and JavaScript</li>
          <li>Familiarity with React.js or Node.js is a plus</li>
          <li>Students, freshers, or job seekers can apply</li>
          <li>Must be able to dedicate 1–2 hours daily</li>
          <li>Strong willingness to learn and build real projects</li>
        </ul>
      </section>

      {/* Apply Button */}
      <div className="apply-btn-container fade-in">
        <button className="apply-btn" onClick={handleApplyClick}>
          Apply Now
        </button>
      </div>

      {/* Internship Form Section */}
      {showForm && (
        <div ref={formRef} className="internship-form form-animation">
          <h3>Apply for Web Development Internship</h3>

          <form className="form-box" onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInput}
              placeholder="Enter your full name"
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={form.value}
              onChange={handleInput}
              placeholder="Enter your email"
              required
            />

            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleInput}
              placeholder="Enter your phone number"
              required
            />

            <label>Upload Resume</label>
            <input
              type="file"
              name="resume"
              onChange={handleFile}
              accept=".pdf,.doc,.docx"
              required
            />

            <label>Why you want to join us .? </label>
            <textarea
              name="about"
              value={form.about}
              onChange={handleInput}
              placeholder="Tell me something more about you"
            ></textarea>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? <div className="loader"></div> : "Submit Application"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default WebInternship;
