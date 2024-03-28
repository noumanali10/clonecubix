import React from "react";
import Simmilar from "./SimmilarDropDown";
import { localDB } from "../Images/icons";

export default function solutionsDropDown() {
  const items = localDB[0].solutions[0].items;
  const items2 = localDB[0].solutions[0].items2;
  return (
    <>
      <div className="lg:font-light  lg:bg-white lg:text-black lg:top-20   h-full flex flex-col  relative z-40  lg:absolute lg:h-fit lg:w-[102vw]  lg:z-40  lg:flex-row 2xl:-left-[12.5%] lg:-left-[3.2rem] xl:-left-[4.5rem]  ">
        <div className="Similartop flex flex-col ml-3  lg:w-1/4 lg:justify-centers ">
          <div className="flex flex-col py-15 px-6">
            <span className="text-xl mt-4">
              {localDB[0].solutions[0].title}
            </span>
            <span className="text-sm py-4">
              {localDB[0].solutions[0].titledes}
            </span>
          </div>
        </div>
        <div className="lg:flex lg:flex-col lg:w-1/2 ml-4 ">
          <p className="font-semibold lg:font-light inline-block text-xl py-3">
            {localDB[0].solutions[0].minititle}
          </p>
          <Simmilar items={items} flexDirection="row" width="main" />
        </div>

        <div>
        <div className="lg:bg-slate-100 lg:w-full lg:h-full ml-4  ">
         <div className="lg:ml-4">
          <div className="lg:flex lg:flex-col  lg:w-11/12  ">
            <p className="font-semibold lg:font-light inline-block text-xl py-3">
              {localDB[0].solutions[0].minititle2}
            </p>
            <Simmilar
              className=""
              items={items2}
              flexDirection="col"
              width="main2"
            />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
