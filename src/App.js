import React, { useState, useEffect } from "react";
import { FaArrowDown } from 'react-icons/fa'; 

import Navbar from "./Components/Navbar";
import Secone from "./Components/Secone";
import Sectwo from "./Components/Sectwo";
import Secthree from "./Components/Secthree";
import Secfour from "./Components/Secfour";
import Secfive from "./Components/Secfive";
import Secsix from "./Components/Secsix";
import Secseven from "./Components/Secseven";
import Footer from "./Components/Footer";
import Testimonials from "./Components/Testimonials";
import Approach from "./Components/Approach";
import Benefits from "./Components/Benefits";
import About from "./Components/About";
import Faq from "./Components/Faq";

function App() {
  const [arrowVisible, setArrowVisible] = useState(false);

  const handleContactClick = () => {
    setArrowVisible(true);
    setTimeout(() => setArrowVisible(false), 5000); // Hide arrow after 3 seconds
  };

  useEffect(() => {
    let timer;
    if (arrowVisible) {
      timer = setTimeout(() => {
        setArrowVisible(false);
      }, 3000); // Hide arrow after 3 seconds
    }
    return () => clearTimeout(timer);
  }, [arrowVisible]);


  return (
    <div className="">
      <Navbar handleContactClick={handleContactClick} />
      <Secone />
      <section id="services">
        <Sectwo />
      </section>
      
      <Secthree />
      <Secfour />
      <Secfive />
      <Secsix />
      <Secseven />
      <section id="about">
        <About />
      </section>
      
      <Approach />
      <Benefits />
      <Testimonials />
      <section id="faq" > 
        <Faq />
      </section>
      
      <Footer />
      <div className={`arrow ${arrowVisible ? 'visible' : ''}`}>
        <FaArrowDown />
      </div>
    </div>
  );
}

export default App;
