import React from "react";
import "./Courses.css"; // Assuming courses.css is in the same directory

const Courses = () => {
  return (
    <div className="courses">
      <div className="background-image animated fadeIn">
        {/* Background content or image */}
      </div>

      <div className="content">
        <h1 className="heading animated bounceIn">Courses</h1>
        <div className="workshop-grid">
          <article className="workshop-item">
            <h4>Basic Accounting</h4>
            <img
              src="https://clipart-library.com/newhp/29-298131_accounting-clipart-icon-accounting.png"
              alt="Basic Accounting Workshop"
              width="100px"
              height="100px"
            />
          </article>
          <article className="workshop-item">
            <h4>Business and personal finance</h4>
            <img
              src="https://worksheets.clipart-library.com/images2/budgeting-graphs/budgeting-graphs-8.png"
              alt="Business and Personal Finance Workshop"
              width="100px"
              height="100px"
            />
          </article>
          <article className="workshop-item">
            <h4>Data-led and digital business marketing</h4>
            <img
              src="https://clipart-library.com/2023/Group-197-3.png"
              alt="Data-led and Digital Business Marketing Workshop"
              width="100px"
              height="100px"
            />
          </article>
          <article className="workshop-item">
            <h4>Effective business communication</h4>
            <img
              src="https://clipart-library.com/2023/effective-communication-personality-development-communication-skills-communications-training-21st-century-skills-business-english-soft-skills-business-communication-effective-interpersonal.png"
              alt="Effective Business Communication Workshop"
              width="100px"
              height="100px"
            />
          </article>
          <article className="workshop-item">
            <h4>Business management and process risk management</h4>
            <img
              src="https://clipart-library.com/image_gallery/n1316759.jpg"
              alt="Business Management and Process Risk Management Workshop"
              width="100px"
              height="100px"
            />
          </article>
          <article className="workshop-item">
            <h4>Fraud risk management</h4>
            <img
              src="https://img.clipart-library.com/2/clip-economic-competitions/clip-economic-competitions-15.jpg"
              alt="Fraud Risk Management Workshop"
              width="100px"
              height="100px"
            />
          </article>
          <article className="workshop-item">
            <h4>Cyber security management</h4>
            <img
              src="https://clipart-library.com/2023/computer-network-computer-security-managed-security-service-data-loss-prevention-software-data-watercolor-paint-wet-ink-system-firewall-vulnerability-cyber-threat-intelligence-png-clipart.jpg"
              alt="Cyber Security Management Workshop"
              width="100px"
              height="100px"
            />
          </article>
        </div>
        <p>Business development program package</p>
        <p>Online and/or in-person options</p>
        <p>Book via our email: <a href="mailto:legacy.redefined1@gmail.com">legacy.redefined1@gmail.com</a></p>
      </div>
    </div>
  );
};

export default Courses;
