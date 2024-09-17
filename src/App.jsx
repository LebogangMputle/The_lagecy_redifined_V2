import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import AboutUs from './components/About/AboutUs';
import MyBlogs from './components/Blogs/MyBlogs.jsx'; 
import Navbar from './components/Navbar/Navbar';
import Insights from './components/Insights/Insights';
import Footer from './components/Footer/Footer.jsx'; 
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/blogs" element={<MyBlogs />} /> {/* My Blogs route */}
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
