import React from "react";
import "./AboutUs.css";
import logo from "./residential.png";

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <section className="about-section1">
        <div className="about-heading">ABOUT US</div>
        <div className="our-company">OUR COMPANY</div>
        <p>ACREMENTS provides data-driven solutions to help developers navigate real estate projects. From sales and marketing to legal and management, they simplify the investment process. Their expert team drives growth in India's real estate market. ACREMENTS is dedicated to maximizing value for developers.</p>
      </section>
      <img src={logo} alt="About Us" className="about-logo" />
    </div>
  );
};

export default AboutUs;
