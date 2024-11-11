import './AboutUs.css';
import vision from '../../assets/vision.jpg';

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-image">
        <h2>OUR SERVICE</h2>
        <img src={vision} alt="About Us" />
      </div>
      <div className="about-us-description">
        <p>
          Legacy Redefined is a consulting one-stop house for existing and upcoming <strong>small micro and medium enterprises (SMMEs)</strong>.
          <strong> Legacy Redefined</strong> was founded in <strong>2022 by Lesego Khoele</strong>, a passionate young lady who was raised in a business-oriented family.
        </p>
        <p>
          Having first-hand exposure to the SMME sector as well as observing the various struggles these types of businesses endure due to lack of defined processes, risk management, and internal controls ushered the birth of Legacy Redefined.
          The one-stop consulting house is a platform that assists SMMEs to improve their business knowledge and processes through the integration of risk into their core business processes and the implementation of key controls.
        </p>
        <p>
          At Legacy Redefined, we pride ourselves on the diverse range of professional skills and expertise within our team. Strategically and risk-integrated, with a broad spectrum of backgrounds and experiences, is our tremendous asset, as it enables us to design and deliver comprehensive SMME-tailored business solutions.
        </p>
        <div className="program-structure">
          <h4>Our Program Structure:</h4>
          <ul>
            <li><strong>Training (50%)</strong> - Business skills transfer through classroom (in-person and online) teaching on core business and risk management modules.</li>
            <li><strong>Consulting (20%)</strong> - Root cause analysis is conducted on core issues hampering progress.</li>
            <li><strong>On the job coaching (30%)</strong> - Partnering with our clients, providing tailored solutions through active participation in business operations.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
