import React from "react";
import { imgs } from "../Images/icons";
import "../CSS/Hero.css";

export default function Hero() {
  return (
    <>
      <section className="hero text-white ">
        <div className="mainhero flex justify-center items-center it w-screen   bg-hero-pattern bg-cover bg-center h-[85vh] lg:h-screen sm:h-screen ">
          <div className='main w-11/12 2xl:w-4/5    h-full flex justify-center items-center lg:justify-items-start "'>
            <div className="h-[90%]  w-full flex flex-col justify-evenly  ">
              <div className=" heroText mt-6  h-1/2 flex flex-col items-center justify-evenly lg:justify-evenly lg:h-3/4  lg:items-start sm:items-start ">
                <h1 className="text-3xl font-bold lg:font-bold lg:text-[50px] lg:w-1/2  leading-snug text-left ">
                  Modernizing Mobile Platforms
                </h1>
                <p className="font-normal text-base leading-relaxed self-center text-center  text-[rgba(255,255,255,.9)] w-full lg:self-start lg:text-left  lg:w-2/5 sm:text-left ">
                  Custom mobile apps.User experiences & design.Engagement &
                  Intelligence.Native & cross-platforms
                </p>
                <div className="bg-primary px-4 lg:py-6 py-1 rounded-sm w-40 h-10 text-center flex justify-center items-center sm:self-center lg:self-start ">
                  <button className="herobtn text-center bg-primary  text-sm font-bold  ">
                    LETS' TALK
                  </button>
                </div>
              </div>
              <div className="heroLower lg:items-center lg:flex-row lg:h-1/5 flex flex-col justify-around bg-[#000000b0] rounded h-1/3 lg:justify-evenly sm:h-2/6">
                <div className="top  lg:w-2/5 flex flex-col items-center h-2/5 justify-around lg:flex-row ">
                  <h4 className="font-medium text-xl lg:text-sm sm:text-sm  ">Trusted by</h4>
                  <div className="topimgs flex w-full justify-around ">
                    <img className="topimg" src={imgs.leftimg1} alt="" />
                    <img className="topimg" src={imgs.leftimg2} alt="" />
                    <img className="topimg circleimg" src={imgs.leftimg3} alt="" />
                    <img className="topimg circleimg " src={imgs.leftimg4} alt="" />
                  </div>
                </div>
                <div className="lower lg:w-2/5  flex flex-col h-2/5 justify-around lg:flex-row">
                  <h4 className="self-center font-medium text-xl lg:text-sm sm:text-sm ">Awards</h4>
                  <div className="lowerimgs flex w-full justify-around items-center">
                    <img src={imgs.rightimg1} alt="" className="lowerimg" />
                    <img
                      src={imgs.rightimg2}
                      alt=""
                      className="lowerimg lg:w-[60px] lg:h-[47px]"
                    />
                    <img src={imgs.rightimg3} alt="" className="lowerimg " />
                    <img src={imgs.rightimg4} alt="" className="lowerimg " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
