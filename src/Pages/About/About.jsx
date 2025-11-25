import React, { useEffect, useRef } from "react";
import "./About.css";
import { assets } from "../../assets/assets";



const About = () => {
    // Refs for animations
    const introRef = useRef(null);
    const specializeTitleRef = useRef(null);
    const specializeCardsRef = useRef([]);   // ✅ YOU MISSED THIS
    const missionRef = useRef(null);
    const visionRef = useRef(null);
    const quotesRef = useRef(null);
    const teamCardsRef = useRef([]);

    useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("visible");
            });
        },
        { threshold: 0.2 }
    );

    if (introRef.current) observer.observe(introRef.current);
    if (specializeTitleRef.current) observer.observe(specializeTitleRef.current);
    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);
    if (quotesRef.current) observer.observe(quotesRef.current);

    // Specialize cards
    specializeCardsRef.current.forEach((card) => card && observer.observe(card));

    // Team cards
    teamCardsRef.current.forEach((card) => card && observer.observe(card));
}, []);


    return (
        <div className="about">
            <div className="who-we-are">
                <section className="intro fade-up" ref={introRef}>
                    <h1>Who We Are</h1>
                    <p>
                        At <strong>N-Technologies</strong>, we are a team of passionate innovators, developers,
                        and digital experts dedicated to building solutions that drive real impact.
                        We specialize in creating high-quality <strong>e-commerce platforms, food delivery websites, hotel booking systems, and doctor appointment booking applications</strong>. Our goal is to turn your ideas into powerful, user-friendly digital products that help your business grow.
                    </p>
                </section>
                <section className="specialize-info">
                    <h2 className="fade-up" ref={specializeTitleRef}>We Specialize In</h2>
                    <div className="specialize-info-container">
                        <div className="specialize-card fade-up" ref={(el) => (specializeCardsRef.current[0] = el)}>
                            <img src={assets.ecommerce_1} alt="E-commerce Website" />
                            <h3>E-Commerce Websites</h3>
                            <p>
                                We design powerful online stores with smooth checkout systems and
                                responsive layouts to boost your online sales.
                            </p>
                        </div>

                        <div className="specialize-card fade-up" ref={(el) => (specializeCardsRef.current[1] = el)}>
                            <img src={assets.foodDel_1} alt="Food Delivery Website" />
                            <h3>Food Delivery Websites</h3>
                            <p>
                                Build modern food ordering and delivery platforms with real-time order
                                tracking and easy restaurant management.
                            </p>
                        </div>

                        <div className="specialize-card fade-up" ref={(el) => (specializeCardsRef.current[2] = el)}>
                            <img src={assets.vacationrental_1} alt="Hotel Booking Website" />
                            <h3>Hotel Booking Websites</h3>
                            <p>
                                Create elegant hotel booking systems with room availability, online
                                payments, and seamless customer experience.
                            </p>
                        </div>

                        <div className="specialize-card fade-up" ref={(el) => (specializeCardsRef.current[3] = el)}>
                            <img src={assets.doctor_1} alt="Doctor Appointment Website" />
                            <h3>Doctor Appointment Websites</h3>
                            <p>
                                Build appointment booking platforms for clinics and hospitals with
                                schedule management and patient reminders.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mission-vision">
                    <div className="mission slide-left" ref={missionRef}>
                        <h2>Our Mission</h2>
                        <p>
                            To empower businesses and individuals through innovative
                            technology and design solutions that inspire, connect, and grow.
                        </p>
                    </div>
                    <div className="vision slide-right" ref={visionRef}>
                        <h2>Our Vision</h2>
                        <p>
                            To be a trusted global partner in digital transformation,
                            delivering excellence in every line of code and design.
                        </p>
                    </div>
                </section>

                <section className="quotes fade-up" ref={quotesRef}>
                    <h2>What Drives Us</h2>
                    <blockquote>
                        "Technology is best when it brings people together." <br />– Matt
                        Mullenweg
                    </blockquote>
                    <blockquote>
                        "Design is not just what it looks like and feels like. Design is how
                        it works." <br />– Steve Jobs
                    </blockquote>
                    <blockquote>
                        "Great things in business are never done by one person. They're done
                        by a team of people." <br />– Steve Jobs
                    </blockquote>
                </section>
            </div>
            <h1>Our Team</h1>
            <div className="about-section">
                <h3 className="fade-up">
                    We have teams who are expert in build your ideas and transform those
                    ideas into a real life bussiness
                </h3>
                <div className="teams">
                    <div className="team fade-up" ref={(el) => (teamCardsRef.current[0] = el)}>
                        <h3>Prakriti Singh</h3>
                        <h4>Senior Manager</h4>
                        <hr />
                        <div className="personal-team">
                            <img src={assets.prakki_image} alt="" />
                            <p>
                                As the driving force behind our project execution, Prakriti
                                Singh leads the team at N-Technologies with a perfect blend of
                                technical expertise, leadership, and client-focused strategy.
                                With over 5 years of experience in managing web development,
                                UI/UX, and software solutions, they ensure every project runs
                                smoothly from idea to launch.
                            </p>
                        </div>
                    </div>
                    <div className="team fade-up" ref={(el) => (teamCardsRef.current[1] = el)}>
                        <h3>Ankit Rajput</h3>
                        <h4>Senior Software Developer</h4>
                        <hr />
                        <div className="personal-team">
                            <img src={assets.ankit_image} alt="" />
                            <p>
                                With deep expertise in both frontend and backend technologies,
                                Ankit Rajput brings innovative solutions and clean code to every
                                project at N-Technologies. Proficient in modern stacks like
                                React.js, Node.js, MongoDB, and Express.js, they specialize in
                                building scalable, secure, and user-friendly applications.
                            </p>
                        </div>
                    </div>
                    <div className="team fade-up" ref={(el) => (teamCardsRef.current[2] = el)}>
                        <h3>Sharad Rajput</h3>
                        <h4>Skilled Backend Developer</h4>
                        <hr />
                        <div className="personal-team">
                            <img src={assets.sharad_image} alt="" />
                            <p>
                                Sharad Rajput is a passionate backend developer at
                                N-Technologies, specializing in building robust, scalable, and
                                secure server-side applications. With strong command over
                                technologies like Node.js, Express.js, MongoDB, MySQL, and
                                RESTful APIs, they ensure that every project runs smoothly
                                behind the scenes.
                            </p>
                        </div>
                    </div>
                    <div className="team fade-up" ref={(el) => (teamCardsRef.current[3] = el)}>
                        <h3>Akash Kumar</h3>
                        <h4>Social Media Manager</h4>
                        <hr />
                        <div className="personal-team">
                            <img src={assets.akash_image} alt="" />
                            <p>
                                Akash Kumar Social Media Manager with 3+ years of experience
                                building brand presence across Instagram, LinkedIn, Facebook,
                                and YouTube. I specialize in content strategy, performance
                                analytics, paid ads, and community engagement.
                            </p>
                        </div>
                    </div>
                    <div className="team fade-up" ref={(el) => (teamCardsRef.current[4] = el)}>
                        <h3>Ashish Diwakar</h3>
                        <h4>Digital Marketing Executive</h4>
                        <hr />
                        <div className="personal-team">
                            <img src={assets.ashish_image} alt="" />
                            <p>
                                Ashish is the creative force behind our digital presence. With a
                                strong background in SEO, content strategy, and social media
                                marketing, he helps ensure our brand connects with the right
                                audience. His data-driven mindset and innovative campaigns have
                                boosted engagement and delivered measurable results for our
                                clients.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
