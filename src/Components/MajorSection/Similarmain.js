import React from "react";

export default function Similarmain  ({ items,width, flexDirection }) {
  let directionClass;
  if(flexDirection==='row-reverse'){
     directionClass = "mainsection:flex-row-reverse";
  }
  else if(flexDirection==='row'){
 directionClass="mainsection:flex-row";
  }
  else{

  }


  return (
    <div >
      {items.map((item, index) => (
        <div key={index} className={`flex flex-col-reverse h-auto justify-around w-full items-center my-4   ${directionClass}`}>
          <div className="main1 mt-6 mainsection:ml-6  smd:mt-8 mainsection:center w-full">
           
            <div className="texts flex flex-col justify-center items-center mainsection:justify-start lg:h-full lg:justify-around ">
            <div  className="justify-center items-center flex mainsection:justify-start    w-full lg:text-start lg:w-9/12  ">
              <img className="w-20 h-20 " src={item.img3} alt="" />
            </div>
              <span className="mt-4 container  smalltext text-orange-400 w-full center capitalize mainsection:justify-start lg:text-start lg:w-9/12 ">{item.smallText}</span>
              <span className="my-4 titleMain font-bold text-[28px] leading-normal text-center lg:text-[35px] lg:text-start lg:w-9/12   ">
                {item.textMain}
              </span>
              <span className="titledes text-[19px] font-normal text-center w-11/12 lg:text-start lg:w-9/12   ">
                {item.textDes}
              </span>
            <div className="my-4 flex justify-center items-center mainsection:justify-start mainsection:w-9/12 ">
                <button className="h-10 w-48 lg:h-16 lg:w-52 rounded-sm bg-primary text-white capitalize lg:text-lg">{item.btnText}</button>
            </div>
            </div>
          </div>
          <div className=" ml-10 m-auto mainsection:m-0 main2 flex justify-center items-center  w-full   h-[60vh] sm:h-3/5  mainsection:w-f[40vw] container   ">
            <div className="relative  container">
                <img className="w-full h-full " src={item.img1} alt="" />
            </div>
            <div className="relative container -left-[83px] right-0 top-[44px] sm:-left-[171px] sm:top-0 bottom-0 sm:h-3/5 mainsection:top-[36px] mainsection:-left-[73px] xl:top-[14px] xl:-left-[155px] ">
                <img className="w-full h-[100%] " src={item.img2} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
