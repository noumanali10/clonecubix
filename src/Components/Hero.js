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
      <div className="heromain bg-hero-pattern bg-cover bg-center h-[70vh] container text-white">
        <div className="h-4/6 border border-yellow-500 flex justify-between flex-col w-11/12">
          <div>
            <h1 className="font-semibold text-3xl  ">
              Modernizing Mobile Platforms
            </h1>
          </div>
          <div>
            <h4 className="text-[18px] text-[#ffffffa8]  text-center">
              Custom mobile apps. User experience & design. Engagement &
              intelligence. Native & cross-platform
            </h4>
          </div>
          <button className="herobtn  rounded border-primary inline-block w-36 self-center bg-primary px-4 py-2">LET'S TALK</button>
          <div className="logos w-full bg-[#000000b0] border border-white] flex justify-center flex-col items-center">
            <div className="logostop flex flex-col border h-5/6 border-green-500 w-10/12">
              <span className="self-center">Trusted by</span>
              <ul className="flex  justify-around">
                <li>
                  <img className="navimg" src={leftimg1} alt="" />
                </li>
                <li>
                  <img className="navimg" src={leftimg2} alt="" />
                </li>
                <li>
                  <img className="navimg" src={leftimg3} alt="" />
                </li>
                <li>
                  <img className="navimg" src={leftimg4} alt="" />
                </li>
              </ul>
            </div>
            <div className="logodown">
              <span>Awards</span>
              <ul className="container">
                <li>
                  <img className="navimg" src={rightimg1} alt="" />
                </li>
                <li>
                  <img className="navimg" src={rightimg2} alt="" />
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
    </>
  );
}
