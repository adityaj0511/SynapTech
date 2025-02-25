import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import '../App.css';

const LFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Section - Brand Info */}
        <div className="footer-brand">
          <h2 className="footer-logo">
            <span className="blue">S</span>YNAPTEK <span className="small-text">INFOTECH</span>
          </h2>
          <p>
           SYNAPTEK INFOTECH will partner with you to help make the best technology decisions 
            for your business and keep you up and running for the long haul.
          </p>
          <div className="social-icons">
            
          <a href="https://x.com/synap_tech_info"> <FaTwitter/></a>
           <a href="https://www.linkedin.com/in/fenish-patel-31287b2a8/"> <FaLinkedinIn /></a>
            <a href="https://www.instagram.com/i_am_fenish_01/?next=%2F"><FaInstagram/></a>
          </div>
        </div>

        {/* Middle Section - Get In Touch */}
        <div className="footer-contact">
          <h3>Get In Touch</h3>
          
          <p><FaEnvelope /> synaptekinfotech@gmail.com</p>
          <p><FaPhoneAlt /> +91 63536 00958</p>
        </div>

        {/* Right Section - Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
           
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>&copy; 2025 SynapTech Infotech. All Rights Reserved.</p>
        <div className="footer-policy">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default LFooter;
