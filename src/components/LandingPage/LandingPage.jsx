// import React from "react";
// import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Courses from "../Courses/Courses";
import AboutUs from "../About/AboutUs";
import Insights from "../Insights/Insights";
import '../LandingPage/LandingPage.css'




const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <div className="content">
        <h1 className="H1">Legacy Redefined</h1>
        <p>Redefining business processes and risk</p>
        <p>Your distinguished business process and risk experts</p>
      </div>
      <Courses />
      <AboutUs/>
      <Insights />
    </div>
  );
};

export default LandingPage;
