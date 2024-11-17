import './Home.css';
import sampleVideo from "../../assets/video.mp4";
import nydaLogo from '../../assets/nyda-logo.png';
import absaLogo from '../../assets/absa-logo.png';
import xmsLogo from '../../assets/xms-logo.webp';
import companyLogo from '../../assets/company-logo.png';
import vision from '../../assets/vision.jpg';
import theAnchor from '../../assets/theAnchor.jpg';

const Home = () => {

  const logos = [
    { src: nydaLogo, alt: "NYDA Logo", link: "https://www.nyda.gov.za" },
    { src: absaLogo, alt: "Absa Logo", link: "https://www.absa.africa/absaafrica/business/development/" },
    { src: companyLogo, alt: "Thee Anchor Pty Ltd Logo", link: "#" }, // Add link if available
    { src: xmsLogo, alt: "XMS Logo", link: "https://www.xponentialmining.co.za/" },
    { src: theAnchor, alt: "theAnchor Logo", link: "#" },
  ];


  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="button-group">
            <a href="/ourServices" className="btn btn-services">Our Services</a>
            <a href="/contactUs" className="btn btn-contact">Contact Us</a>
          </div>
        </div>
      </div>

      <div className="video-section">
        <h2>Our Story...</h2>
        <div className="video-box-centered">
          <video controls>
            <source src={sampleVideo} type="video/mp4" />
             Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="vision-mission-section">
        <div className="vision-mission-image">
          <img src={vision} alt="Vision and Mission" />
        </div>
        <div className="vision-mission-content">
          <h2>VISION</h2>
          <p>We strive to assist in establishing sound business processes underpinned by rigorous risk management. By thoroughly integrating these elements, long-term sustainability will be achieved.</p>
          <h2>MISSION</h2>
          <p>We intend on providing our clients with expert guidance and support in developing robust business processes and comprehensive risk management strategies. Our dedicated approach ensures that our clients achieve operational excellence and long-term sustainability.</p>
        </div>
      </div>

      {/* Clients Section */}
      <div className="clients-section">
        <h2>Clients Who Trust Us</h2>
        <div className="logos-container">
          {logos.map((logo, index) => (
            <a
              key={index}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="logo-link"
            >
              <img src={logo.src} alt={logo.alt} className="client-logo" />
            </a>
          ))}
        </div>
      </div>

    </>
  );
};

export default Home;
