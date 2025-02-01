import React from "react";
import "./Third.css";

const ThirdSec = () => {
  return (
    <div className="services-section">
      <div className="service-headings">
        <div className="acre-header1">WHAT WE DELIVER</div>
        <div className="acre-header2">Building success with tailored real estate strategies.</div>
      </div>
      <div className="services-one">
        <div className="service">
          <h3>Sales Strategy & Execution</h3>
          <p>Tailored strategies to maximize property value and deliver exceptional project results.</p>
        </div>

        <div className="service">
          <h3>Project Management Support</h3>
          <p>Seamless execution from planning to delivery, ensuring timely completion and efficiency.</p>
        </div>

        <div className="service">
          <h3>Legal, Financial & Market Expertise</h3>
          <p>Expert advice on real estate laws, financial solutions, and data-driven market insights.</p>
        </div>
      </div>

      <div className="services-two">
        <div className="service">
          <h3>Post-Sales CRM</h3>
          <p>Continued support to ensure client satisfaction and foster long-term relationships.</p>
        </div>

        <div className="service">
          <h3>Data & Market Research</h3>
          <p>In-depth market research and data analysis to identify trends and opportunities for growth.</p>
        </div>
      </div>
    </div>

  );
};

export default ThirdSec;
