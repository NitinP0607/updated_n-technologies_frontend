import React,{useRef,useEffect} from "react";
import "./Careers.css";
import { Link } from "react-router-dom";

const Careers = () => {

   // Refs for animations
  const headerRef = useRef(null);
  const sectionRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) observer.observe(headerRef.current);

    sectionRefs.current.forEach((sec) => sec && observer.observe(sec));

    cardRefs.current.forEach((card) => card && observer.observe(card));
  }, []);

  return (
    <div className="careers-container">
      <div className="careers-header fade-up" ref={headerRef}>
        <h1>Join N-Technologies</h1>
        <p>
          Build your future with us. We’re looking for passionate talent to grow
          with our company.
        </p>
      </div>

      <section className="careers-section fade-up" ref={(el) => (sectionRefs.current[0] = el)}>
        <h2>🔹 Tech Internships</h2>
        <div className="careers">
          <div className="career-card fade-up" ref={(el) => (cardRefs.current[0] = el)}>
            <h3>Web Development Intern</h3>
            <p>
              <strong>Location:</strong> Remote
            </p>
            <p>
              <strong>Duration:</strong> 3 months
            </p>
            <p>
              <strong>Stipend:</strong> ₹1000 + Certificate
            </p>
            <p>
              <strong>Skills Required:</strong> HTML, CSS, JavaScript, React
            </p>
            <Link to={"/careers/web-internship"} className="apply-btn">
              Apply Now
            </Link>
            <hr />
          </div>
          <div className="career-card" ref={(el) => (cardRefs.current[1] = el)}>
            <h3>Backend Developer</h3>
            <p>
              <strong>Location:</strong> Remote
            </p>
            <p>
              <strong>Duration:</strong> 3 months
            </p>
            <p>
              <strong>Stipend:</strong> ₹1000 + Certificate
            </p>
            <p>
              <strong>Skills Required:</strong> Java, Python, C/C++, SQL/MONGO
              DB
            </p>
            <Link to={"/careers/backend-internship"} className="apply-btn">
              Apply Now
            </Link>
             <hr />
          </div>

          <div className="career-card" ref={(el) => (cardRefs.current[2] = el)}>
            <h3>Digital Marketing Intern</h3>
            <p>
              <strong>Location:</strong> Remote
            </p>
            <p>
              <strong>Duration:</strong> 3 month
            </p>
            <p>
              <strong>Stipend:</strong> ₹1000 Certificate Only
            </p>
            <p>
              <strong>Skills Required:</strong> Canva, SEO, Instagram, LinkedIn
            </p>
            <Link
              to={"/careers/digital-marketing-internship"}
              className="apply-btn"
            >
              Apply Now
            </Link>
             <hr />
          </div>
        </div>
      </section>

      <section className="careers-section fade-up" ref={(el) => (sectionRefs.current[1] = el)}>
        <h2>🔹 Tech Job Openings</h2>
        <div className="careers">
          <div className="career-card fade-up" ref={(el) => (cardRefs.current[3] = el)}>
            <h3>Frontend Developer (React)</h3>
            <p>
              <strong>Location:</strong> Hybrid - Kanpur / Remote
            </p>
            <p>
              <strong>Experience:</strong> 4–6 Years
            </p>
            <p>
              <strong>CTC:</strong> ₹3 - ₹4.5 LPA
            </p>
            <p>
              <strong>Requirements:</strong> ReactJS, Tailwind, Git, APIs
            </p>
            <Link to={"/careers/dev-mode"} className="apply-btn">
              Apply Now
            </Link>
             <hr />
          </div>

          <div className="career-card fade-up" ref={(el) => (cardRefs.current[4] = el)}>
            <h3>Backend Developer (Node.js)</h3>
            <p>
              <strong>Location:</strong> Remote
            </p>
            <p>
              <strong>Experience:</strong> 4–6 Years
            </p>
            <p>
              <strong>CTC:</strong> ₹4 - ₹6 LPA
            </p>
            <p>
              <strong>Requirements:</strong> Node.js, MongoDB, Express, REST
              APIs
            </p>
            <Link to={"/careers/dev-mode"} className="apply-btn">
              Apply Now
            </Link>
             <hr />
          </div>
          <div className="career-card fade-up" ref={(el) => (cardRefs.current[5] = el)}>
            <h3>Software Developer </h3>
            <p>
              <strong>Location:</strong> Remote
            </p>
            <p>
              <strong>Experience:</strong> 4–6 Years
            </p>
            <p>
              <strong>CTC:</strong> ₹4 - ₹6 LPA
            </p>
            <p>
              <strong>Requirements:</strong> Software Development, Git, APIs
            </p>
            <Link to={"/careers/dev-mode"} className="apply-btn">
              Apply Now
            </Link>
             <hr />
          </div>
        </div>
      </section>
      <section className="careers-section fade-up" ref={(el) => (sectionRefs.current[2] = el)}>
        <h2>🔹 BPO Job Openings</h2> 
        <div className="careers">
          <div className="career-card fade-up" ref={(el) => (cardRefs.current[6] = el)}>
            <h3>Customer Support Executive</h3> 
            <p>
              <strong>Location:</strong> On-site – Noida
            </p>
            <p>
              <strong>Experience:</strong> 0–2 Years
            </p>
            <p>
              <strong>CTC:</strong> ₹1.8 - ₹2.4 LPA
            </p>
            <p>
              <strong>Requirements:</strong> Good verbal communication,
              English/Hindi fluency, Basic computer skills
            </p>
            <Link to={"/careers/customer-support-voice"} className="apply-btn">
              Apply Now
            </Link>
             <hr />
          </div>

          <div className="career-card fade-up" ref={(el) => (cardRefs.current[7] = el)}>
            <h3>Technical Support Executive</h3>
            <p>
              <strong>Location:</strong> On-site – Noida
            </p>
            <p>
              <strong>Experience:</strong> 0–2 Years
            </p>
            <p>
              <strong>CTC:</strong> ₹2 - ₹3 LPA
            </p>
            <p>
              <strong>Requirements:</strong> Basic tech knowledge, Good verbal
              communication, Troubleshooting skills
            </p>
            <Link to={"/careers/tech-support-voice"} className="apply-btn">
              Apply Now
            </Link>
             <hr />
          </div>

          <div className="career-card" ref={(el) => (cardRefs.current[8] = el)}>
             <hr />
            <h3>Customer Support Executive – Non-Voice</h3>
            <p>
              <strong>Location:</strong> On-site – Noida
            </p>
            <p>
              <strong>Experience:</strong> 0–2 Years
            </p>
            <p>
              <strong>CTC:</strong> ₹1.5 - ₹2.2 LPA
            </p>
            <p>
              <strong>Requirements:</strong> Typing skills, Email/chat
              communication
            </p>
            <Link
              to={"/careers/customer-support-non-voice"}
              className="apply-btn"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
