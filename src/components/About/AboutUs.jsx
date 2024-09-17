import React from 'react';
import './AboutUs.css'; // Ensure you have this CSS file or adapt the styles accordingly

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-content">
        <h1 className="about-us-heading">Who We Are</h1>
        <div className="about-us-image">
          <img src="../../assets/person-using-laptop.jpeg" alt="Person using laptop" />
        </div>
        <div className="about-us-description">
          <p>
            Legacy Redefined is a consulting "one-stop" house for existing and upcoming small micro and medium enterprises (SMMEs). Legacy Redefined was founded in 2022 by Lesego Khoele, a passionate young lady who was raised in a business-oriented family. Having first-hand exposure to the SMME sector as well as observing the various struggles these types of businesses endure due to lack of defined processes, risk management, and internal controls ushered the birth of Legacy Redefined. The one-stop consulting house is a platform that assists SMMEs to improve their business knowledge and processes through the integration of risk into their core business processes and the implementation of key controls. We also provide risk-based business development programs and training on key business concepts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
