import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/courses">Courses</Link></li>
        <li className="navbar-item"><Link to="/insights">Insights</Link></li>
        <li className="navbar-item"><Link to="/aboutUs">AboutUs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
