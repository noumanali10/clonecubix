import React from "react";
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

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Navbar2 />
        <Hero />
        <Section2 />
        <MainSecton />
        <ClientsReview />
        <Project />
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default App;
