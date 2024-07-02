// import React from "react";
// import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Courses from "../Courses/Courses";
import AboutUs from "../About/AboutUs";
import Insights from "../Insights/Insights";
import '../LandingPage/LandingPage.css'
import Home from "../Home";




const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <Home />
      <Courses />
      <AboutUs/>
      <Insights />
    </div>
  );
};

export default LandingPage;
