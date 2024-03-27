import React from "react";
import Simmilar from "./SimmilarDropDown";
import { localDB } from "../Images/icons";

export default function resourcesDropDown() {
  const items = localDB[0].resources[0].items;
  return (
    <>
      <div className="lg:font-light  lg:bg-white lg:text-black lg:top-20   h-full flex flex-col  relative z-40  lg:absolute lg:h-fit lg:w-screen  lg:z-40  lg:flex-row  2xl:-left-[12.5%] lg:-left-[3.2rem] xl:-left-[3.5rem]  ">
        <div className="Similartop flex flex-col ml-3  lg:w-1/4 lg:justify-centers  ">
          <div className="flex flex-col py-15 px-6">
            <span className="text-xl mt-4">{localDB[0].resources[0].title}</span>
            <span className="text-sm py-4">
              {localDB[0].resources[0].titledes}
            </span>
          </div>
        </div>
        <div className="lg:w-1/2 ">
          <p className="font-semibold lg:font-light inline-block text-xl py-3 ">
            {localDB[0].resources[0].minititle}
          </p>
          <div className=" lg:flex  ">
            <Simmilar items={items} flexDirection="row" width="main" />
          </div>
        </div>
        <div className="lg:bg-slate-100 lg:w-1/3 lg:text-slate-100 h-full lg:pb-10">
         <div className="full">
          jdskfdjmsfhdksdkfhjsfhfhdsmhfscmxnjcbbmdsdhfm,sdfhj/sdknkvjzdbvnmbvhb NMbjC Znxbchbvcbnvmvjdvsufvjhacgjhsfgdjcdscdjhscbsbjcbvbdvbknbfdjbhjda,bjhdhbvbmxgdjbvmxncb
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque perferendis quia nostrum nihil facilis repellendus repellat a voluptatum eligendi, nam sequi incidunt? Soluta dolores qui repellendus delectus vel nesciunt a 
         </div> 
        </div>
      </div>
    </>
  );
}
