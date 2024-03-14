import React from "react";
import leftimg1 from "../Images/leftimg1.webp";
import leftimg2 from "../Images/leftimg2.webp";
import leftimg3 from "../Images/leftimg3.webp";
import leftimg4 from "../Images/leftimg4.webp";
import rightimg1 from "../Images/rightimg1.webp";
import rightimg2 from "../Images/rightimg2.webp";
import rightimg3 from "../Images/rightimg3.webp";
import rightimg4 from "../Images/rightimg4.webp";

export default function hero() {
  return (
    <>
      <div className=" relative flex justify-center items-centerheromain bg-hero-pattern bg-cover bg-center h-[73vh] sm:h-[90vh]  text-white">
        <div className="h-full border border-yellow-500 flex justify-center items-center flex-col w-11/12 ">
          <div className=" mt-12 h-5/6 flex justify-around flex-col border border-red-700 sm:h-3/4">
          <div>
            <h1 className="font-semibold text-3xl lg:text-red-500   ">
              Modernizing Mobile Platforms
            </h1>
          </div>
          <div>
            <h4 className="text-[18px] text-[#ffffffa8]  text-center">
              Custom mobile apps. User experience & design. Engagement &
              intelligence. Native & cross-platform
            </h4>
          </div>
          <button className="herobtn sm:w-32 rounded border-primary inline-block w-36 self-center bg-primary px-4 py-2">LET'S TALK</button>
          <div className="logos w-full bg-[#000000b0] rounded border sm:self-center border-white flex justify-around flex-col items-center sm:h-1/2 sm:w-full slef-center ">
            <div className="logostop flex flex-col border h-5/6 border-green-500 w-10/12 sm:h-1/3">
              <span className="self-center p-4 sm:p-1 sm:text-xm">Trusted by</span>
              <ul className="flex  justify-around sm:w-2/3 sm:self-center items-center border border-red-700">
                <li>
                  <img className="navimg" src={leftimg1} alt="" />
                </li>
                <li>
                  <img className="navimg" src={leftimg2} alt="" />
                </li>
                <li>
                  <img className="navimg pb-3" src={leftimg3} alt="" />
                </li>
                <li>
                  <img className="navimg" src={leftimg4} alt="" />
                </li>
              </ul>
            </div>
            <div className="logodown flex justify-center items-center flex-col w-11/12">
              <span className="py-4 sm:p-1 sm:text-sm">Awards</span>
              <ul className="flex border border-orange-600 justify-around w-11/12 mb-3 ">
                <li>
                  <img className="navimg" src={rightimg1} alt="" />
                </li>
                <li>
                  <img className="navimg sm:pt-2" src={rightimg2} alt="" />
                </li>
                <li>
                  <img className="navimg" src={rightimg3} alt="" />
                </li>
                <li>
                  <img className="navimg" src={rightimg4} alt="" />
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
