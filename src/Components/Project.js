import React from "react";

export default function Project() {
  return (
    <>
      <div className="StartProject h-auto">
        <div className="h-[50vh] flex flex-col  items-center">
          <div className="Ptxt flex flex-col justify-center items-center h-1/2">
            <span className="text-[28px] font-bold text-center  flex justify-center items-center flex-col">
              <span> 15 years of building</span>
              <span>digital products and we </span>
              <span> are just getting started!</span>
            </span>
          </div>
          <div className="Pbtn flex items-center text-lg font-bold text-white">
            <button className="self-center px-10 py-5 bg-primary text-center rounded-md" >START A PROJECT</button>
          </div>
        </div>
        <hr />
      </div>
     
    </>
  );
}
