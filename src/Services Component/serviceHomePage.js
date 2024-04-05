import React from "react";
import "../Services Component/style.css";

export default function serviceHomePage() {
  return (
    <>
      <div className="text-white">
        <div className="mainservices bg-Servicebg bg-cover h-[65vh] bg-opacity-75 bg-black flex justify-center items-center">
          <div className=" flex flex-col justify-evenly items-center w-full h-3/4">
            <div className="flex flex-wrap justify-center items-center w-full my-8 ">
              <span className="text-[33px] font-bold text-center h-fit w-9/12">
                World-class software solutions for business across the globe.
              </span>
              <span className="mt-4 text-[20px] font-medium opacity-75">Design. Development. Consultancy.</span>
            </div>
            <i class="fa-solid fa-angle-down"></i>
          </div>
        </div>
      </div>
    </>
  );
}
