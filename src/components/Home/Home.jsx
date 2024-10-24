import { useState } from 'react';
import './Home.css';
import sampleVideo from "../../assets/video.mp4";
import nydaLogo from '../../assets/nyda-logo.png';
import absaLogo from '../../assets/absa-logo.png';
import xmsLogo from '../../assets/xms-logo.webp';
import companyLogo from '../../assets/company-logo.png';
import visionImage from '../../assets/feature-Black-women-work.jpg';
import Homelogo from '../../assets/Homelogo.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const logos = [
    { src: nydaLogo, alt: "NYDA Logo" },
    { src: absaLogo, alt: "Absa Logo" },
    { src: companyLogo, alt: "Thee Anchor Pty Ltd Logo" },
    { src: xmsLogo, alt: "XMS Logo" }
  ];

  const totalSlides = logos.length;

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides); // Loop back to 0 after the last slide
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides); // Loop back to last after the first slide
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Your Distinguished <br />
            Business Process & <br />
            Risk Experts
          </h1>
          <div className="button-group">
            <a href="/services" className="btn btn-services">Our Services</a>
            <a href="/contact" className="btn btn-contact">Contact Us</a>
        </div>
        </div>
      </div>

      {/* Video Section with Placeholder Text */}
      <div className="video-section">
        <h2>The Story</h2>
        <div className="video-placeholder-container">
          <div className="video-box">
            <video controls>
              <source src={sampleVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="placeholder-text">
            <img src={Homelogo} alt="Legacy Redefined Logo" className="placeholder-logo" /> {/* Replace text with logo */}
          </div>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="vision-mission-section">
        <div className="vision-mission-image">
          <img src={visionImage} alt="Vision and Mission" />
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
        <div className="carousel-wrapper">
          <button className="carousel-arrow left-arrow" onClick={handlePrev}>←</button>
          <div className="clients-logos" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {logos.map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.alt} className="client-logo" style={{ display: currentSlide === index ? 'block' : 'none' }} />
            ))}
          </div>
          <button className="carousel-arrow right-arrow" onClick={handleNext}>→</button>
        </div>
      </div>
    </>
  );
};

export default Home;
