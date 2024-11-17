import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-section">
      <div className="contact-left">
        <h2>Reach Out</h2>
        <ul className="contact-info">
          <li><i className="fas fa-phone-alt"></i> +27 78 349 6649</li>
          <li><i className="fas fa-envelope"></i> info@legacyredefined.co.za</li>
          <li><i className="fas fa-globe"></i> www.legacyredefined.co.za</li>
          <li><i className="fas fa-map-marker-alt"></i> 61 Jewel Beetle Street, Centurion, 0157</li>
        </ul>
        <div className="social-icons">
        <a href="https://www.facebook.com/profile.php?id=100089835789730&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/company/legacy-redefined/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/legacy_redefinedza?igsh=aGxwZXFmamJzaTVw&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13216.083077249108!2d28.175679620076218!3d-25.87537632144735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95671d3bbf52d1%3A0xbf9c1a698d506f52!2s61%20Jewel%20Beetle%20Street%2C%20Centurion%2C%200157!5e0!3m2!1sen!2sza!4v1699891730042!5m2!1sen!2sza"
            width="100%" height="300" style={{border: 0}} allowFullScreen="" loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="contact-right">
        <h3>Contact Information</h3>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Cell Number" required />
            <input type="tel" placeholder="Tel. Number" />
          </div>
          <input type="email" placeholder="Email Address" required />
          <div className="form-group">
            <input type="text" placeholder="City" required />
            <input type="text" placeholder="Province" required />
          </div>
          <input type="text" placeholder="Business Sector" required />
          
          <select required>
            <option value="">How did you hear from us?</option>
            <option value="Social Media">Facebook</option>
            <option value="Referral">X</option>
            <option value="Referral">Instagram</option>
            <option value="Referral">Linkedin</option>
          </select>
          <textarea placeholder="Questions or Comments..." rows="5"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
