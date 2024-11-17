import './AboutUs.css'; // Ensure you have this CSS file or adapt the styles accordingly
import african from '../../assets/african.jpg'; // Import the image

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-image">
        <h2>WHO WE ARE</h2>
        <img src={african} alt="About Us" />
      </div>
      <div className="about-us-description">
        <p>
          Legacy Redefined is a consulting "one-stop" house for existing and upcoming <strong>small micro and medium enterprises (SMMEs)</strong>.
          <strong> Legacy Redefined</strong> was founded in <strong>2022 by Lesego Khoele</strong>, a passionate young lady who was raised in a business-oriented family.
          Having first-hand exposure to the SMME sector as well as observing the various struggles these types of businesses endure due to lack of defined business processes, risk management, and internal controls ushered the birth of Legacy Redefined.
          The one-stop consulting house is a platform that assists SMMEs to improve their business knowledge and processes through the integration of risk into their core business processes and the implementation of key controls.
        </p>

        {/* B-BBEE Card */}
        <div className="bbbee-card">
          <h3>B-BBEE Level</h3>
          <p>A 100% Black Owned Company Level 1 B-BBEE Contributor - 135%</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
