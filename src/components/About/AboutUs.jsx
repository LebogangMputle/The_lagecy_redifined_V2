
import React, { useEffect } from "react";

import './About.css'

const About = () => {

  const src1 = "../Screenshot (114).png"
  const src2 = "../Screenshot (116).png"
  const src3 = "../Screenshot (115).png"
  const src4 = "../Screenshot (117).png"

    // const m1 = document.getElementById('M1');
    // const m2 = document.getElementById('M2');
    // const m3 = document.getElementById('M3');
    // const m4 = document.getElementById('M4');

  const left = ()=>{
    const scrolldiv = document.getElementById('divSlide');
    scrolldiv.insertBefore(scrolldiv.lastElementChild, scrolldiv.firstElementChild);



  }

  const right = ()=>{
    const scrolldiv = document.getElementById('divSlide');
    scrolldiv.appendChild(scrolldiv.firstElementChild);
    
  }

  return (
    <div id='about'>
      <h1 id='abouth1'>About us</h1>
       <div id='div_wwa'>
       <div id='Who_We_Are'>
       
        <h2>Who We Are</h2>
          <p className='p1'>
            We are an Small Medium Enterprise (<b>SME</b>) consulting house and insights-led through strategic research.
            We follow a risk-based approach which is key as adequate management of risk enforces sustainability within SMEs.
             <br/>
             <br/>
            Our services<b>:</b><br/>
            Design, facilitate and monitoring of SME business process and risk management development programs
            Strategic consulting and coaching
            SME training on key business concepts
            Digital marketing services and analytics through our supporting agency Thee Anchor

          </p>
          
       </div>

       <div id='Our_Vision'>
        <h2>Our Vision</h2>
        <p className='p1'>
        We aim to witness enduring businesses supported by efficient processes, innovative Information Technology solutions, and timeless brands.
        We motivate organisations to integrate strong processes, backed by resilient Information Technology solutions and infused with creativity to build brands that guarantee top-of-mind awareness
        </p>

       </div>
       
       <div id='Our_Team'>
        <h2>Our Team</h2>
       </div>
     </div>

     <button className="errow" onClick={left}>⬅️</button>
     <button className="errow" onClick={right}>➡️</button>
     <div id='divSlide' className="divSlide">
               
               <div id='M1' className="members">
                  <img src={src1} alt='Lesego' />
                 <div>
                  <p className="pNames">Lesego Khoele (CIA),Mphil</p>
                  <p className="pRole">Md and Founder<br/> SMME Business Developer</p>
                  </div>
               </div>

               <div id='M2' className="members">
               <img src={src2} alt='Karabo' />
               <div>
                <p className="pNames">Karabo Kgomanyane</p>
                <p className="pRole">Data-Led Marketing Specialist <br/>Thee Anchor MD & Founder</p>
                </div>
               </div>

               <div id='M3' className="members">
               <img src={src3} alt='Mphoma' />
                <div>
                <p className="pNames">Mphoma Putsoane </p>
                <p className="pRole">Business Accounting<br/>Development Specialist</p>
                </div>
               </div>

               <div id='M4' className="members">
               <img src={src4} alt='Boipelo' />
                <div>
                <p className="pNames">Boipelo Maringa </p>
                <p className="pRole">Business and Personal <br/>Finance Specialist</p>
                </div>
               </div>
          </div>
    </div>
  );
};

export default About;

