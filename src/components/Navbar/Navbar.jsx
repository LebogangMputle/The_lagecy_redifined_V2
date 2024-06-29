import { Link } from "react-router-dom";

const Navbar
 = () => {
    return (
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/Services">Services</Link>
          <Link href="/Courses">Courses</Link>
          <Link href="/about">about</Link>
          <Link href="/insights">Insights</Link>
        </nav>
    );
  };
  
  export default Navbar;