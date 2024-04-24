import React, { useState, useEffect } from "react";
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
import Technologies from "./Components/Technology/Technologies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "../src/Services Component/serviceHomePage";
import Contactus from "../../clonecubix/src/Components/ContactUS/Contactus";

function App() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const heroSection = document.querySelector(".hero-section");

    if (heroSection) {
      const heroHeight = heroSection.offsetHeight;

      const handleScroll = () => {
        setIsSticky(window.scrollY >= heroHeight);
      };

      window.addEventListener("scroll", handleScroll);
      
      // Cleanup function to remove the event listener when the component unmounts or dependencies change
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []); 

  return (
    <Router>
      <>
        <div className=" overflow-x-hidden">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {" "}
                  <Navbar isSticky={isSticky} />
                  <Navbar2 isSticky={isSticky} />
                  <Hero />
                  <Section2 />
                  <MainSecton />
                  <Technologies />
                  <ClientsReview />
                  <Project />
                  <CTA />
                  <Footer />
                </>
              }
            />
            <Route
              path="/Services"
              element={
                <>
                  <Navbar isSticky={isSticky} />
                  <Navbar2 isSticky={isSticky} />
                  <Services />
                </>
              }
            />

            <Route path="/Contactus" element={<Contactus />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
