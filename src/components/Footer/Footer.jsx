import './Footer.css';  // You can create the style below in a separate CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="footer-logo">Legacy Redefined</h1>
          <p className="footer-description">
            Legacy Redefined is a consulting "one stop" house for existing and upcoming small, micro, and medium enterprises (SMMEs). Legacy Redefined was founded in 2022 by Lesego Khoele, a passionate young lady who was raised in a business-oriented family.
          </p>
        </div>

        <div className="footer-section links">
          <h2>NAVIGATE SITE</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/insights">Insights</a></li>
            <li><a href="/blog">My Blog</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>CONTACT US</h2>
          <ul>
            <li><i className="fas fa-phone"></i> +27 78 349 6649</li>
            <li><i className="fas fa-envelope"></i> info@legacyredefined.co.za</li>
            <li><i className="fas fa-globe"></i> www.legacyredefined.co.za</li>
            <li><i className="fas fa-map-marker-alt"></i> 61 Jewel Beetle Street, Centurion, 0157</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>COPYRIGHT © 2024 THEE ANCHOR PTY LTD. ALL RIGHTS RESERVED.</p>
        <div className="footer-socials">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
