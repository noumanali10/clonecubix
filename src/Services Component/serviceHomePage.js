// Assuming your file name aligns with the component name, e.g., ServiceHomePage.jsx
import React, { useRef } from 'react';
import "../Services Component/style.css";
import ServiceHeroDown from "./ServiceHeroDown";

export default function ServiceHomePage() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth",  inline: "nearest" });
    }
  };

  return (
    <>
      <div className="text-white">
        <div className="mainservices hero-section bg-Servicebg bg-cover h-[65vh] md:h-[75vh] lg:h-[90vh] bg-opacity-75 bg-black flex justify-center items-center lg:flex-col">
          <div className="flex flex-col justify-evenly sm:justify-around items-center w-full h-3/4 md:h-full">
            <div className="flex flex-wrap lg:flex-col justify-center sm:justify-around items-center w-full my-8">
              <span className="text-[33px] font-bold text-center h-fit w-9/12 lg:w-7/12">
                World-class software solutions for business across the globe.
              </span>
              <span className="mt-4 sm:mt-2 text-[20px] sm:text-base font-medium opacity-75">Design. Development. Consultancy.</span>
            </div>
            <button onClick={scrollToAbout}><i className="fa-solid fa-angle-down "></i></button>
          </div>
        </div>
      </div>
      <ServiceHeroDown ref={aboutRef} />
    </>
  );
}
