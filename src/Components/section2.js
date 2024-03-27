import React from "react";
import { imgs } from "../Images/icons";

export default function section2() {
  return (
    <>
      <section className=" herolower flex justify-center items-center bg-gradient-to-r from-[#0bccee] to-[#ac1de1] h-auto text-white  ">
        <div className=" flex flex-col justify-around h-3/4 ">
          <div className="herolowertext Flex justify-around items-center h-full">
            <div className="mt-10 toptext text-xs font-normal text-[rgba(255,255,255,.5)] flex justify-center gap-5 w-full ">
              <span>DESIGN.</span>
              <span>DELVELOPMENT.</span>
              <span>CONSULTANCY.</span>
            </div>
            <div className="lowertext flex justify-center items-center text-center mt-4 ">
              <span className="font-bold text-[28px] self-center  md:w-4/5 md:text-3xl lg:text-4xl">
                Develop results-driven products for entrepreneurs, startups, and
                enterprises with a leading software development company.
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <div
              className="logos flex flex-wrap justify-around h-full  sm:w-full customsection2:w-[70%] xl:w-3/5  
           "
            >
              <div className="logosin w-1/2 ">
                <img className="svg" src={imgs.app} alt="" />
                <span>App Development</span>
              </div>
              <div className="logosin w-1/2 ">
                <img className="svg" src={imgs.game} alt="" />
                <span>Game Development</span>
              </div>
              <div className="logosin w-1/2">
                <img className="svg" src={imgs.web} alt="" />
                <span>Web Development</span>
              </div>
              <div className="logosin w-1/2">
                <img className="svg" src={imgs.bloackchain} alt="" />
                <span>Blockchain Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
