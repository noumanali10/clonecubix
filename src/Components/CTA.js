import React from "react";
import { icons } from "../Images/icons";

export default function CTA() {
  return (
    <>
      <section className="cta relative z-0 lg:items-center h-auto sm:h-auto  ml-4 lg:flex  xl:h-[50vh] sm:ml-8  text-black  md:h-auto   lg:h-[60vh] lg:flex-row lg:w-full text-lg flex flex-col justify-evenly items-start ">
        {/* <div className="empty pt-4"> </div> */}
        <div className="ctatop  lg:w-3/5 lg:h-auto  flex flex-col h-1/3 justify-around lg:flex-row lg:items-center ">
          <div className="flex flex-col md:h-full md:justify-around   xl:h-auto">
            <span className=" font-bold md:text-[28px] md:inline-block mb-4 w-auto lg:text-2xl">
              Got a Project&#63;
            </span>
            <a
              className="text-[#181b31] sm:opacity-85 md:text-2xl md:opacity-100 xl:text-xl"
              href="http://#"
            >
              Let's Talk
            </a>
            <a
              className="text-[#181b31] sm:opacity-85 md:text-lg xl:text-lg xl:pt-4 md:mt-2"
              href="http://#"
            >
              <img className="inline-block xl:text-xl " src={icons.gt} alt="" />{" "}
              Tell us everything
            </a>
          </div>
          <div>
            <span className=" font-bold md:text-xl md:my-4 inline-block my-4 xl:text-2xl">
              Cubix USA
            </span>
            <p className="flex flex-col text-[#181b31] sm:opacity-85 md:text-lg xl:text-xl  ">
              <span className="py-1">560 village Blvd,</span>{" "}
              <span className="py-1">Suite 120 #3 </span>{" "}
              <span className="py-1">West Palm Beach, FL 33409</span>{" "}
            </p>
          </div>
        </div>
        <div className="ctadown z-0  relative flex flex-col xl:text-xl lg:items-center text-[#808291] lg:self-center h-[55%] justify-around  lg:flex-wrap  lg:flex-row lg:w-2/5 ">
          <div className="  relative flex flex-col justify-around h-auto md:h-1/2 xl:h-5/6 items-start ">
            <span className="ctaspan">Career</span>
            <span className="ctaspan">Contact</span>
            <span className="ctaspan">Testimonial</span>
            <span className="ctaspan">Blog</span>
            <span className="ctaspan">Events</span>
            <span className="ctaspan">Press Release</span>
          </div>
          <div className=" z-0 relative flex flex-col justify-around h-auto md:h-1/2 xl:h-5/6">
            <span className="ctaspan">Process</span>
            <span className="ctaspan">Work</span>
            <span className="ctaspan">Culture book</span>
            <span className="ctaspan">Client</span>
            <span className="ctaspan">University</span>
            <span className="ctaspan">Manifesto</span>
          </div>
        </div>
      </section>
      <hr className="mx-auto w-3/4  flex justify-center my-4" />
    </>
  );
}
