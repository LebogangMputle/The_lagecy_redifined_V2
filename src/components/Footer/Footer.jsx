import './Footer.css'; // You can create the style below in a separate CSS file
import Homelogo from '../../assets/Homelogo.png'; // Import the logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <img src={Homelogo} alt="Legacy Redefined Logo" className="footer-logo" /> {/* Replace h1 with image */}
          <p className="footer-description">
            Legacy Redefined is a consulting "one stop" house for existing and upcoming small, micro, and medium enterprises (SMMEs). Legacy Redefined was founded in 2022 by Lesego Khoele, a passionate young lady who was raised in a business-oriented family.
          </p>
        </div>

        <div className="footer-section about">
          <h1>NAVIGATE SITE</h1>
          <ul className="footer-description">
            <li><a href="/">Home</a></li>
            <li><a href="/aboutUs">About Us</a></li>
            <li><a href="/ourServices">Our Services</a></li>
            <li><a href="/insights">Insights</a></li>
            <li><a href="/blogs">My Blog</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h1>CONTACT US</h1>
          <ul className="footer-description">
            <li><i className="fas fa-phone"></i> +27 78 349 6649</li>
            <li><i className="fas fa-envelope"></i> info@legacyredefined.co.za</li>
            <li><i className="fas fa-globe"></i> www.legacyredefined.co.za</li>
            <li><i className="fas fa-map-marker-alt"></i> 61 Jewel Beetle Street, Centurion, 0157</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>COPYRIGHT © 2024 THEE ANCHOR PTY LTD. ALL RIGHTS RESERVED.</p>
        <p>FOLLOW US ON SOCIAL MEDIA</p>
        <div className="footer-socials">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
