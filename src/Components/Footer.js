// footer responsiveness done

import React from "react";

export default function Footer() {
  return (
    <>
      <section className="footer flex  justify-around items-center flex-col lg:flex-row border-t-2 border-[#808291] h-40">
        <div className="footerlogo">
          <img
            className="w-[97px] lg:w-[80px]"
            src="https://www.cubix.co/themes/responsiv-clean/assets/img/cubix-logo-dark.svg"
            alt="logo"
          />
        </div>
        <div className="footermain self-center text-center w-5/6 text-[#808291]">
          <span className="text-xs">&copy; </span>
          <span className="">2024 Cubix. All Rights Reserved.</span>
          <a href="http://#">Terms of Use.</a>
          <a href="http://#">Privacy Policy</a>
        </div>
        <div className="footericons text-[#808291] flex w-[100vw] sm:w-[33vw] lg:w-[25vw] justify-around items-center hover:text-black ">
          <span>
            <i class="fa-brands fa-facebook-f hover:cursor-pointer hover:text-black" ></i>
          </span>
          <span>
            <i class="fa-brands fa-x-twitter hover:cursor-pointer hover:text-black "></i>
          </span>
          <span>
            <i class="fa-brands fa-linkedin-in hover:cursor-pointer hover:text-black"></i>
          </span>
          <span>
            <i class="fa-brands fa-dribbble hover:cursor-pointer hover:text-black"></i>
          </span>
        </div>
      </section>
    </>
  );
}
