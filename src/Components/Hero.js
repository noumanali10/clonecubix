import React from "react";
import "../CSS/Hero.css"
import { imgs } from "../Images/icons";

export default function Hero() {
  return (
    <>
      <section className="Hero h-4/5 relative top[4rem]  ">
        <div className="bg-hero-pattern bg-cover bg-center h-[75vh] sm:items-center sm:justify-center  text-white justify-around flex flex-col   items-center">
        <div className="bgimg  h-[70%] sm:h-auto ml-3  flex items-center ">
          <div className="Herotext flex flex-col  h-5/6 sm:h-3/5 justify-evenly items-center mt-8" >
            <span className="herotile text-white font-bold text-3xl mt-12 sm:self-start">Modernizing Mobile Platforms</span>
            <span className="text-lg text-center font-normal text-white opacity-90 inline-block w-[96%] sm:mt-8">
              Custom mobile apps. User experiences & design. Engagement &
              Intelligence.Native & cross-platforms
            </span>
            <div className="flex items-center justify-center ">
            <button className=" p-4 herobtn self-center font-bold text-sm border rounded-sm bg-primary w-32 h-auto border-primary inline-block">LETS'S TALK</button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-1/3 ">
        <div className="bg-[#000000b0] w-[96%] h-4/5 rounded-md flex flex-col justify-around">
          <div className="trustedby flex flex-col items-center h-2/5 justify-around">
            <span className="font-medium text-xl">Trusted by</span>
            <div className="heroleftimg flex w-full justify-evenly sm:w-3/5 items-center ">
              <img src={imgs.leftimg1} alt="" className="heroleftimg1 sm:h-3 heroimg2" />
              <img src={imgs.leftimg2} alt="" className="heroleftimg2 sm:h-[17.09px] heroimg2" />
              <img src={imgs.leftimg3} alt="" className="heroleftimg sm:pb-2 heroimg2" />
              <img src={imgs.leftimg4} alt="" className="heroleftimg4 heroimg2" />
            </div>
          </div>
          <div className="awards flex flex-col items-center h-3/5 justify-around  ">
            <span className="font-medium text-xl">Awards</span>
            <div className="herorightimgs flex w-full justify-evenly sm:w-3/5 ">
              <img src={imgs.rightimg1} alt="" className="herorightimg1 heroimg" />
              <img src={imgs.rightimg2} alt="" className="herorightimg2 heroimg" />
              <img src={imgs.rightimg3} alt="" className="herorightimg3 heroimg" />
              <img src={imgs.rightimg4} alt="" className="herorightimg4 heroimg" />
            </div>
          </div>
        </div>
        </div>
        </div>
      </section>
    </>
  );
}
