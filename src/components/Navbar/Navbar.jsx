import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg'; // Replace with the actual path to your logo
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
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
        <div className="menu-icon" onClick={handleMenuToggle}>
          &#9776; {/* Hamburger menu icon */}
        </div>
        <ul className={`navbar-list ${menuActive ? 'active' : ''}`}>
          <li className="navbar-item" onClick={handleMenuToggle}>
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item" onClick={handleMenuToggle}>
            <Link to="/about">About us</Link>
          </li>
          <li className="navbar-item" onClick={handleMenuToggle}>
            <Link to="/services">Our Services</Link>
          </li>
          <li className="navbar-item" onClick={handleMenuToggle}>
            <Link to="/insights">Insights</Link>
          </li>
          <li className="navbar-item" onClick={handleMenuToggle}>
            <Link to="/blogs">My Blogs</Link> {/* Updated link */}
          </li>
          <li className="navbar-item" onClick={handleMenuToggle}>
            <Link to="/contactUs">Contact Us</Link>
          </li>
        </ul>
        {/* <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
