import './AboutUs.css';
import vision from '../../assets/vision.jpg';

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-image">
        <h2>OUR SERVICES</h2>
        <img src={vision} alt="About Us" />
      </div>
      <div className="about-us-description">
        <p>
          At Legacy Redefined, we pride ourselves on the diverse range of professional skills and expertise within our team. Strategically and risk-integrated, with a broad spectrum of backgrounds and experiences, is our tremendous asset, as it enables us to design and deliver comprehensive SMME-tailored business solutions.
        </p>
        <div className="program-structure">
          <h4>LEGACY'S APPROACH:</h4>
          <ul>
            <li><strong>Skills Development</strong> - Business skills transfer through classroom (in-person and online) teaching on core business and risk management modules.</li>
            <li><strong>Consulting</strong> - Root cause analysis on issues hampering business growth.</li>
            <li><strong>On the job coaching</strong> - Partnering with our clients to provide tailored solutions through active participation in business operations.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
