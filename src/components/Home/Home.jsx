import './Home.css';
import sampleVideo from "../../assets/video.mp4";
import nydaLogo from '../../assets/nyda-logo.png';
import absaLogo from '../../assets/absa-logo.png';
import xmsLogo from '../../assets/xms-logo.webp';
import companyLogo from '../../assets/company-logo.png';
import visionImage from '../../assets/feature-Black-women-work.jpg'; // Add this line

const Home = () => {
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
          <div className="hero-buttons">
            <button className="btn services-btn">Our Services</button>
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
            <h3>Placeholder Title</h3>
            <p>
              This is placeholder text next to the video. You can add more
              detailed information about the video or your company's mission, values,
              or services. Feel free to replace this with any relevant content in the future.
            </p>
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
        <div className="clients-logos">
          <img src={nydaLogo} alt="NYDA" className="client-logo" />
          <img src={absaLogo} alt="Absa" className="client-logo" />
          <img src={companyLogo} alt="Company" className="client-logo" />
          <img src={xmsLogo} alt="XMS" className="client-logo" />
        </div>
      </div>
    </>
  );
};

export default Home;
