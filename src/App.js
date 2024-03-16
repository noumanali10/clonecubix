import React from "react";
import "./App.css";
// Importing components. Uncomment the ones you need.
// import ServicesDropDown from "./Components/ServicesDropDown";
// import CTA from "./Components/CTA";
// import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Section2 from "./Components/section2";
// If you decided not to use Hero, comment it out and use the other imports as needed.

function App() {
  return (
    <>
      <Navbar/>
        <Hero />
        <Section2/>
        {/* <CTA />
        <Footer /> */}
     
    </>
  );
}

export default App;
