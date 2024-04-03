import React, { useState, useEffect } from 'react';
import "./App.css";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Section2 from "./Components/section2";
import Project from "./Components/Project";
import ClientsReview from "./Components/ClientsReview";
import Navbar2 from "./Components/Navbar2";
import MainSecton from "./Components/MajorSection/MainSecton";
import Technologies from './Components/Technology/Technologies';


function App() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('.hero-section').offsetHeight;
      setIsSticky(window.scrollY >= heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>

      <div className=" overflow-x-hidden" >
      <Navbar isSticky={isSticky}/>

     
      <Navbar2 isSticky={isSticky} />
        <Hero />
        <Section2/> 
        <MainSecton/>
        <Technologies/>
        <ClientsReview/>
        <Project/>
        <CTA />
        <Footer />

      </div>
     
    </>
  );
}

export default App;
