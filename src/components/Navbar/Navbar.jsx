import { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink to="/" className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </NavLink>
        <div className="menu-icon" onClick={handleMenuToggle}>
          &#9776; {/* Hamburger menu icon */}
        </div>
        <ul className={`navbar-list ${menuActive ? 'active' : ''}`}>
          <li className="navbar-item" onClick={handleMenuToggle}>
            <NavLink to="/" activeClassName="active-link" exact>HOME</NavLink>
          </li>
          <li className="navbar-item" onClick={handleMenuToggle}>
            <NavLink to="/about" activeClassName="active-link">ABOUT US</NavLink>
          </li>
          <li className="navbar-item" onClick={handleMenuToggle}>
            <NavLink to="/services" activeClassName="active-link">OUR SERVICES</NavLink>
          </li>
          <li className="navbar-item" onClick={handleMenuToggle}>
            <NavLink to="/insights" activeClassName="active-link">INSIGHTS</NavLink>
          </li>
          <li className="navbar-item" onClick={handleMenuToggle}>
            <NavLink to="/blogs" activeClassName="active-link">MY BLOGS</NavLink>
          </li>
          <li className="navbar-item" onClick={handleMenuToggle}>
            <NavLink to="/contactUs" activeClassName="active-link">CONTACT US</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
