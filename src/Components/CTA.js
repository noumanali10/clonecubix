import React from "react";
import icons from "../Images/icons";

export default function CTA() {
  return (
    <>
      <section className="cta lg:items-center  ml-4 lg:flex  xl:h-[50vh] sm:ml-8  text-black h-[100vh]  md:h-screen sm:h-screen  lg:h-[60vh] lg:flex-row lg:w-full text-lg flex flex-col justify-evenly items-start ">
        {/* <div className="empty pt-4"> </div> */}
        <div className="ctatop  lg:w-3/5 lg:h-auto  flex flex-col h-1/3 justify-around lg:flex-row lg:items-center ">
         <div className="flex flex-col md:h-full md:justify-around   xl:h-auto">
         <span className=" font-bold md:text-[32px] md:inline-block mb-4 w-auto xl:text-2xl">Got a Project&#63;</span>
          <a className="text-[#181b31] sm:opacity-85 md:text-2xl md:opacity-100 xl:text-2xl"  href="http://#">
            Let's Talk
          </a>
          <a className="text-[#181b31] sm:opacity-85 md:text-base xl:text-lg xl:pt-4" href="http://#">
            <img className="inline-block xl:text-xl " src={icons.gt} alt="" /> Tell us
            everything
          </a>
         </div>
         <div>
         <span className=" font-bold md:text-xl md:my-4 inline-block my-4 xl:text-2xl">Cubix USA</span>
          <p className="flex flex-col text-[#181b31] sm:opacity-85 md:text-base xl:text-xl  ">
            <span className="py-1">560 village Blvd,</span> <span className="py-1">Suite 120 #3 </span>{" "}
            <span className="py-1">West Palm Beach, FL 33409</span>{" "}
          </p>
         </div>
        </div>
        <div className="ctadown flex flex-col xl:text-xl lg:items-center text-[#808291] lg:self-center h-[55%] justify-around  lg:flex-wrap  lg:flex-row lg:w-2/5 ">
        <div className="flex flex-col justify-around h-[40vh]  md:h-1/2 xl:h-5/6 items-start ">
        <span>Career</span>
          <span>Contact</span>
          <span>Testimonial</span>
          <span>Blog</span>
          <span>Events</span>
          <span>Press Release</span>
        </div>
        <div className="flex flex-col justify-around h-[40vh] md:h-1/2 xl:h-5/6">
        <span>Process</span>
          <span>Work</span>
          <span>Culture book</span>
          <span>Client</span>
          <span>University</span>
          <span>Manifesto</span>
        </div>
        </div>
      </section>
    </>
  );
}
