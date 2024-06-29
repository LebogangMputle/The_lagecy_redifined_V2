// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";

//  import Home from "./components/Home";
import Courses from "./components/Courses/Courses";
import AboutUs from "./components/About/AboutUs";
import ContactUs from "./components/About/ContactUs";
import OurServices from "./components/About/OurServices";



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />}>
            <Route path="courses" element={<Courses />} />
            <Route path="aboutUs" element={<AboutUs/>} />
            <Route path="contactUs" element={<ContactUs/>} />
            <Route path="services" element={<OurServices />} />
          </Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
