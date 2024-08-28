import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg'; // Corrected import path
import './Navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img 
            src={logo} 
            alt="Logo" 
            className="logo-image" 
          />
        </Link>
        <div className="menu-icon" onClick={handleMenuToggle}>
          &#9776; {/* Hamburger menu icon */}
        </div>
        <ul className={`navbar-list ${menuActive ? 'active' : ''}`}>
          <li className="navbar-item" onClick={handleMenuToggle}>
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item" onClick={handleMenuToggle}>
            <Link to="/courses">Courses</Link>
          </li>
          <li className="navbar-item" onClick={handleMenuToggle}>
            <Link to="/insights">Insights</Link>
          </li>
          <li className="navbar-item" onClick={handleMenuToggle}>
            <Link to="/aboutUs">AboutUs</Link>
          </li>
          <li className="navbar-item" onClick={handleMenuToggle}>
            <Link to="/myBlog">My Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
