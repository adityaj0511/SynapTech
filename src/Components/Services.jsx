import React, { useState } from "react";
import "../App.css";

const services = [
  {
    title: "Mobile Application",
    image: "/app.jpg", // public folder se directly access
    description: "We develop intuitive and scalable mobile applications for iOS and Android platforms.",
    moreInfo: "Our mobile apps ensure a seamless user experience, strong security, and efficient performance.",
  },
  {
    title: "Web Development",
    image: "/web.jpg",
    description: "Our team creates modern, high-performance, and responsive websites tailored to your needs.",
    moreInfo: "We use the latest web technologies to build fast, secure, and scalable web applications.",
  },
  {
    title: "Designer",
    image: "/design.jpg",
    description: "We craft visually stunning and user-friendly UI/UX designs to enhance user experiences.",
    moreInfo: "Our design team focuses on user engagement, accessibility, and modern aesthetics.",
  },
];

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="services">
      <div className="container">
        <h2 className="services-title">Our Services</h2>
        <div className="service-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {expandedIndex === index && <p className="more-info">{service.moreInfo}</p>}
                <button className="read-more" onClick={() => handleReadMore(index)}>
                  {expandedIndex === index ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
