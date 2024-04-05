import React from "react";

export default function Similarformobileview({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col justify-start w-full items-center h-fit `}
        >
          <div className="maintop flex flex-col gap-4 justify-around mt-8  ">
          <div className="w-full flex justify-center items-center">
          <div className="w-11/12" >
           <div className="flex justify-start
             gap-4 w-10/12   ">
              <div className="justify-center w-fit items-center flex mainsection:justify-start  lg:text-start lg:w-9/12  ">
                <img className="w-14 h-14 " src={item.img3} alt="" />
              </div>
              <span className="mt-4 container w-fit  smalltext text-orange-400  center capitalize mainsection:justify-start lg:text-start lg:w-9/12 ">
                {item.smallText}
              </span>
            </div>
           </div>
          </div>
            <span className="my-4 titleMain font-bold text-[28px] leading-normal text-center lg:text-[35px] lg:text-start lg:w-9/12 w-11/12  ">
              {item.textMain}
            </span>
          </div>
          <div className="mainMiddle h-fit ">
            <div className=" ml-10 m-auto mainsection:m-0 main2 flex justify-center items-center  w-full   h-fit sm:h-3/5  mainsection:w-f[40vw] mycontainer    ">
              <div className="relative  container w-full h-auto">
                <img className="specialimg " src={item.img1} alt="" />
              </div>
              <div className="relative container -left-[44px] right-0 top-[28px] sm:-left-[88px] sm:top-8I bottom-0 sm:h-3/5 mainsection:top-[36px] mainsection:-left-[73px] xl:top-[14px] xl:-left-[155px] h-auto ">
                <img className="specialimg " src={item.img2} alt="" />
              </div>
            </div>
          </div>
          <div className="mainLower flex  flex-col h-[40vh] smd:h-[30vh] customsection2:h-[35vh] justify-center items-center">
            <span className="titledes text-[14px] opacity-70 font-normal text-center w-11/12 lg:text-start lg:w-9/12   ">
              {item.textDes}
            </span>
            <div className="my-4 flex justify-center items-center w-11/12 lg:text-start lg:w-9/12 ">
              <button className="h-12 w-48 lg:h-16 lg:w-52 rounded-sm bg-primary text-white capitalize lg:text-lg">
                {item.btnText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
