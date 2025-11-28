import React, { useState, useRef } from "react";
import "./DigitalMarketingInternship.css";

const DigitalMarketingInternship = () => {
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
        <h1>Digital Marketing Internship</h1>
        <p>Start your marketing journey and work on real branding & campaign projects at N-Technologies.</p>
      </div>

      {/* About */}
      <section className="internship-about slide-left">
        <h2>About the Internship</h2>
        <p>
          This internship is perfect for students and freshers interested in Digital Marketing.
          You will work on SEO, social media marketing, content creation, Google ads, branding,
          market research, and growth strategies. Learn how real companies generate leads and
          grow online.
        </p>
      </section>

      {/* Features */}
      <section className="internship-section zoom-in">
        <h2>Internship Features</h2>
        <ul className="stagger">
          <li>Learn SEO, SMM, Google Ads & Email Marketing</li>
          <li>Hands-on training with real business projects</li>
          <li>Live campaign setup experience</li>
          <li>Content creation & keyword optimization</li>
          <li>Certificate of Completion from N-Technologies</li>
          <li>Flexible internship environment</li>
          <li>Opportunity to work on branding projects</li>
        </ul>
      </section>

      {/* Responsibilities */}
      <section className="internship-section slide-right">
        <h2>Roles & Responsibilities</h2>
        <ul className="stagger">
          <li>Conduct keyword research & SEO optimization</li>
          <li>Manage social media posts & engagement</li>
          <li>Create marketing content, captions & creatives</li>
          <li>Assist in running ad campaigns</li>
          <li>Analyze website and campaign performance</li>
          <li>Work with marketing tools like Analytics & Search Console</li>
        </ul>
      </section>

      {/* Eligibility */}
      <section className="internship-section slide-left">
        <h2>Eligibility Criteria</h2>
        <ul className="stagger">
          <li>Basic understanding of Digital Marketing concepts</li>
          <li>Knowledge of social media platforms</li>
          <li>Creativity & willingness to learn</li>
          <li>Students, freshers & job seekers can apply</li>
          <li>Good communication & writing skills</li>
          <li>Ability to give 1–2 hours daily</li>
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
          <h3>Apply for Digital Marketing Internship</h3>

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

export default DigitalMarketingInternship;
