import React from "react";
import "./App.css";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Section2 from "./Components/section2";
import Project from "./Components/Project";
import ClientsReview from "./Components/ClientsReview";


function App() {
  return (
    <>
      <Navbar/>
      {/* <Navbar2/> */}
        <Hero />
        <Section2/>
        <ClientsReview/>
        <Project/>
        <CTA />
        <Footer />
     
    </>
  );
}

export default App;
