import React, { useEffect, useRef } from 'react'
import "./Home.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Home = () => {

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const topLeftRef = useRef(null);
  const topRightRef = useRef(null);


useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe top hero left & right sections
    if (topLeftRef.current) observer.observe(topLeftRef.current);
    if (topRightRef.current) observer.observe(topRightRef.current);

    // Observe "What We Provide" section
    if (sectionRef.current) observer.observe(sectionRef.current);

    // Observe each service card
    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

  }, []);
  return (
    <div className="home">
      <div className="home-section">
        <div className="left-home-section" ref={topLeftRef}>
          <h1>Top Services</h1> <br />
          <span>N-Technologies</span>
          <p>
            We Provide Best Quality Product and Services <br /> Innovating the
            Future, One Line of Code at a Time.
            <br /> <span style={{ color: "#233b4bff" }}>Your Vision, Our Code.</span>
          </p>
          <marquee behavior="right" direction="alternate" scrollamount="">
            <span>Behind every successful business is a strong digital backbone, and we are here to help you build it</span>
          </marquee>
          <Link to="/contact">Contact us</Link>
        </div>
        <div className="right-home-section" ref={topRightRef}>
          <img src={assets.herotech_image} alt="img not found" />
        </div>
      </div>

      <div className="home-bottom-section" ref={sectionRef}>
        <h2>What We Provide.. ?</h2>
        <div className="contents">
          <div className="content" ref={(el) => cardsRef.current[0] = el}>
            <h3>Website Design</h3>
            <p>
              Our developers provide exceptional web designs that will seize the
              attention of the visitors and ensure to provide maximum leads.
            </p>
          </div>
          <div className="content" ref={(el) => cardsRef.current[1] = el}>
            <h3>Digital Marketing</h3>
            <p>
              Our digital marketing services ensure that your business and the
              services are gaining maximum engagement.
            </p>
          </div>
          <div className="content" ref={(el) => cardsRef.current[2] = el}>
            <h3>Website Development</h3>
            <p>
              With us you will get the unparalleled web development services, as
              we utilize the knowledge of the latest technologies and give you a
              tailored website.
            </p>
          </div>
          <div className="content" ref={(el) => cardsRef.current[3] = el}>
            <h3>E-commerce Development</h3>
            <p>
              Being your Ecommerce Website Development Company, we help to
              create an impeccable online store with single vendor and
              multi-vendor capabilities.
            </p>
          </div>
          <div className="content" ref={(el) => cardsRef.current[4] = el}>
            <h3>Graphic Designing</h3>
            <p>
              Graphic is the skin of your website, with extensive experience in
              the domain, we as your Graphic Designing Company provide the best
              UI and UX for your website with engaging and responsive designs.
            </p>
          </div>
          <div className="content" ref={(el) => cardsRef.current[5] = el}>
            <h3>Content Writing</h3>
            <p>
              Content is the king and we are the kingmakers. Our content writing
              services will help your business rank higher in Google search
              results making us the Best SEO Company.
            </p>
          </div>
          <div className="content" ref={(el) => cardsRef.current[6] = el}>
            <h3>Software Development</h3>
            <p>
              Our developers provide exceptional Softwares that will that will
              help you to make your ideas in real life bussiness.
            </p>
          </div>
          <div className="content" ref={(el) => cardsRef.current[7] = el}>
            <h3>UI/UX Design</h3>
            <p>
              User experience is everything. It always has been, but it's still
              undervalued and underinvested in. <br />
              The details are not the details. They make the design.
            </p>
          </div>
        </div>
      </div>
      <div className="nTech-banner">
        <img src={assets.banner} alt="" />
      </div>
    </div>
  )
}

export default Home
