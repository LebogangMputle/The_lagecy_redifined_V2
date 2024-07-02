import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import AboutUs from './components/About/AboutUs';
import Navbar from './components/Navbar/Navbar';
import Insights from './components/Insights/Insights';
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
    </Router>
  );
}

export default App;
