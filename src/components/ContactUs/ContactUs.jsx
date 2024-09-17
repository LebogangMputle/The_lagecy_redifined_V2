import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-section">
      <div className="contact-left">
        <h2>CONNECT WITH US...</h2>
        <ul className="contact-info">
          <li><i className="fas fa-phone-alt"></i> +27 78 349 6649</li>
          <li><i className="fas fa-envelope"></i> info@legacyredefined.co.za</li>
          <li><i className="fas fa-globe"></i> www.legacyredefined.co.za</li>
          <li><i className="fas fa-map-marker-alt"></i> 61 Jewel Beetle Street, Centurion, 0157</li>
        </ul>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram"></i>
          <i className="fas fa-times"></i>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509102!2d144.953735315316!3d-37.81627977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57743f07ac6350!2sMelbourne%20CBD!5e0!3m2!1sen!2sau!4v1633174000000!5m2!1sen!2sau"
            width="100%" height="300" style={{border: 0}} allowFullScreen="" loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="contact-right">
        <h2>CONTACT INFORMATION</h2>
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
            <option value="">Training Program or Module Interested In</option>
            <option value="Program 1">Program 1</option>
            <option value="Program 2">Program 2</option>
          </select>
          <select required>
            <option value="">Group Size</option>
            <option value="1-5">1-5</option>
            <option value="6-10">6-10</option>
          </select>
          <select required>
            <option value="">How did you hear from us?</option>
            <option value="Social Media">Social Media</option>
            <option value="Referral">Referral</option>
          </select>
          <textarea placeholder="Questions or Comments..." rows="5"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
