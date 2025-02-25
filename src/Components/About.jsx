import React from "react";
import "../App.css";
import { FaClock, FaChartLine } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>We Are People-Centric</h2>
          <p>
            At SynapTek Infotech, we believe that people are the most valuable asset. 
            Our priority is to care for our clients and their technology alike. 
            We specialize in Mobile App Development, Web Development, and UI/UX Design,
            ensuring that businesses thrive in a digital world.
          </p>
          <div className="about-features">
            <div className="feature">
              <FaClock className="feature-icon" />
              <p>
                It’s not enough to keep your systems running. Strategic investment 
                in technology and proper training is crucial.
              </p>
            </div>
            <div className="feature">
              <FaChartLine className="feature-icon" />
              <p>
                SynapTek Infotech helps businesses make the best technology 
                decisions for long-term success.
              </p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src="/Group.jpg" alt="Team Collaboration" className="about-img" />
        </div>
      </div>
    </section>
  );
};

export default About;
