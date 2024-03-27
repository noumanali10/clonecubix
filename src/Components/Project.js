import React from "react";

export default function Project() {
  return (
    <>
      <div className="StartProject h-auto ">
        <div className="h-[60vh] sm:h-[50h] customsection2:h-[55vh] flex flex-col  items-center justify-around lg:h-[40vh] md:h-[45vh]">
          <div className="Ptxt flex flex-col sm:w-fit  justify-center items-center h-1/2">
            <span className="text-[28px] font-bold text-center  flex justify-center items-center flex-col sm:flex-row sm:flex-wrap md:w-4/5 lg:text-4xl sm:leading-loose  ">
              <span> 15 years of building&nbsp; </span>
              <span> digital products and we&nbsp;</span>
              <span> are just getting started!</span>
            </span>
          </div>
          <div className="Pbtn flex items-center text-lg font-bold text-white">
            <button className="self-center px-10 py-5 bg-primary text-center rounded-md">
              START A PROJECT
            </button>
          </div>
        </div>
        <div className="w-11/12 m-auto">
          <hr />
        </div>
      </div>
    </>
  );
}
