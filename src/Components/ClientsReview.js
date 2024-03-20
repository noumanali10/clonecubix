import React, { useState } from "react";
import { reviews } from "../Images/icons";

export default function ClientsReview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;
  const nextReview = () => {
    setCurrentIndex((currentIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
  };
  const onTouchStart = (e) => {
    setTouchEnd(null); // Reset touchEnd to null on new touch start
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipeLeft = distance > minSwipeDistance;
    const isSwipeRight = distance < -minSwipeDistance;

    if (isSwipeLeft) {
      nextReview();
    } else if (isSwipeRight) {
      prevReview();
    }
  };

  return (
    <>
      <section className="reviewmain text-black h-fit  bg-[#F5F7FA] w-screen ">
        <div className="reviewmainheader text-center py-16 sm:w-4/5 m-auto">
          <span className="font-bold text-[28px] text-center w-full lg:text-[42px]  ">
            We develop enterprise-grade software solutions for businesses.{" "}
          </span>
        </div>
        <div className=" flex flex-col justify-between items-center h-full sm:h-4/5    ">
          <div>
            <div className=" flex flex-col justify-evenly items-center lg:items-center h-[60vh] ">
              <div className="flex justify-center items-center gap-5">
                <div
                  className="arrowprv hidden lg:inline-block md:text-2xl md:font-thin "
                  onClick={prevReview}
                >
                  <i className="fa-solid fa-arrow-left-long"></i>
                </div>
                <div
                  className="text-center w-4/5 h-fit lg:w-3/4  "
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                >
                  <span className="font-bold text-[23px] leading-normal text-center lg:w-3/4  ">
                    <q className=""> {reviews[currentIndex].reviwe}</q>{" "}
                  </span>
                </div>
                <div
                  className="arrowright hidden lg:inline-block md:text-2xl md:font-thin"
                  onClick={nextReview}
                >
                  <i className="fa-solid fa-arrow-right-long "></i>
                </div>
              </div>
              <div className="flex flex-col mt-16 sm:m-0 justify-evenly  items-center   ">
                <div className="flex justify-center text-[22px] font-semibold leading-snug sm:m-0 lg:mt-8 ">
                  <span className="">{reviews[currentIndex].name},</span>
                  <span>{reviews[currentIndex].design}</span>
                </div>
                <div className="flex justify-center text-[19.2px] font-normal ">
                  <span>{reviews[currentIndex].comapany}</span>
                </div>
                <div className="flex gap-10 sm:mt-8 sm:gap-16 md:text-2xl md:font-thin lg:hidden text-primary ">
                  <div className="arrowprv" onClick={prevReview}>
                    <i className="fa-solid fa-arrow-left-long"></i>
                  </div>
                  <div className="arrowright" onClick={nextReview}>
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reviewlowyer lg:items-center  lg:w-full flex justify-center sm:justify-around lg:justify-center lg:gap-20 items-center w-full py-16 m-auto lg:m-0 sm:w-4/5">
          <div className="lowerleft h-1/5 flex justify-center lg:w-auto  items-center sm:w-10/12 ">
            <img
              className=" h-1/6 w-[8%] align-middle sm:w-8 sm:h-auto"
              src="https://www.cubix.co/storage/app/media/home/clutch-icon.svg"
              alt=""
            />
            <span className="text-primary w-2/4 text-center sm:w-fit sm:font-semibold">
              4.8 Rating on Clutch
            </span>
          </div>
          <div className="sm:w-[60vw] lg:max-w-fit md:w-[40vw] ">
            <span className="">Top app developers</span>
          </div>
        </div>
      </section>
    </>
  );
}
