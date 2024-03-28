import React from "react";
import Simmilar from "./SimmilarDropDown";
import { localDB } from "../Images/icons";

export default function aboutDropDown() {
  const items = localDB[0].about[0].items;
  return (
    <>
      <div className=" lg:font-light  lg:bg-white lg:text-black lg:top-20   h-full flex flex-col relative z-40  lg:absolute lg:h-fit lg:w-[102vw]  lg:z-40  lg:flex-row   2xl:-left-[12.5%] lg:-left-[3.2rem] 
      xl:-left-[4.5rem]">
        <div className="Similartop flex flex-col ml-3  lg:w-1/3 lg:justify-centers  ">
          <div className="flex flex-col lg:py-15 lg:px-6 ">
            <span className="text-xl mt-4">{localDB[0].about[0].title}</span>
            <span className="text-sm py-4">{localDB[0].about[0].titledes}</span>
          </div>
        </div>
        <div className="lg:w-2/5 pb-12 ">
          <p className="font-semibold lg:font-light inline-block text-xl py-3 ">
            {localDB[0].about[0].minititle}
          </p>
          <div className=" lg:flex  ">
            <Simmilar items={items} flexDirection="row" width="main" />
          </div>
        </div>
        <div className="xl:w-1/4 2xl:w-2/12">
          <div className="about lg:flex lg:w-1 lg:flex-wrap lg:mt-10 2xl:mt-4 lg:font-extrabold lg:justify-center xl:justify-start  ">
            <div className="aboutitem ">
              <span>12+</span>
              <span>Years</span>
            </div>
            <div className="aboutitem">
              <span>200+</span>
              <span>Employees</span>
            </div>
            <div className="aboutitem">
              <span>600+</span>
              <span>Projects</span>
            </div>
            <div className="aboutitem">
              <span>550+</span>
              <span>Clients</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
