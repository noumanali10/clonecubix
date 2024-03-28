import React from "react";

export default function Similarmain  ({ items,width }) {
    if(width==='main'){

    }
  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="flex flex-col-reverse">
          <div className="main1">
            <div  className="w-full center">
              <img className="w-20 h-20" src={item.img3} alt="" />
            </div>
            <div className="texts flex flex-col justify-center items-center">
              <span className="mt-4 smalltext text-orange-400 w-full center capitalize">{item.smallText}</span>
              <span className="my-4 titleMain font-bold text-[28px] leading-normal text-center ">
                {item.textMain}
              </span>
              <span className="titledes text-[19px] font-normal text-center w-11/12  ">
                {item.textDes}
              </span>
            </div>
            <div className="my-4 center">
                <button className="h-10 w-48 rounded-sm bg-primary text-white capitalize">{item.btnText}</button>
            </div>
          </div>
          <div className=" m-auto main2 flex justify-center items-center  w-full  ">
            <div className="relative -right-10 center">
                <img className="w-full h-full" src={item.img1} alt="" />
            </div>
            <div className="relative center ">
                <img className="w-full h-[100%]" src={item.img2} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
