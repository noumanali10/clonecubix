import React from "react";
import Simmilar from "./SimmilarDropDown";
import Simmilar2 from "./SimmilarDropDown2";
import { localDB } from "../Images/icons";

export default function ServicesDropDown() {
  const items1 = localDB[0].services[0].items;
  const items2 = localDB[0].services[0].items2;
  return (
    <>
   
     <div className="overflow-x-hidden lg:font-light  lg:bg-white lg:text-black lg:top-20   h-full flex flex-col  relative z-40  lg:absolute lg:h-fit lg:w-[102vw] lg:overflow-hidden lg:z-40  lg:flex-row   right-0 lg:bottom-0 2xl:-left-[12.5%] lg:-left-[3.2rem] xl:-left-[4.5rem]">
        <div className="Similartop flex flex-col ml-3  lg:w-1/4 lg:justify-centers  ">
          <div className="flex flex-col py-15 px-6">
            <span className="text-xl mt-4">{localDB[0].services[0].title}</span>
            <span className="text-sm py-4">
              {localDB[0].services[0].titledes}
            </span>
          </div>
        </div>
        <div className="lg:w-1/2 ">
          <p className="font-semibold lg:font-light inline-block text-xl py-3 ">
            {localDB[0].services[0].minititle}
          </p>
          <div className=" lg:flex  ">
            <Simmilar items={items1} flexDirection="row" width="main" />
          </div>
        </div>
        <div className="lg:bg-slate-100 lg:w-1/3 ">
         <div className="lg:ml-4">
         <p className="font-semibold lg:font-light inline-block text-xl py-3 ">
            {localDB[0].services[0].minititle2}
          </p>
          <Simmilar2 items={items2} />
         </div>
        </div>
      </div>
     
    </>
  );
}
