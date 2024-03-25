import React from "react";

export default function Navbar2() {
  return (
    <>
      <div className=" lg:flex justify-center text-white hidden    ">
        <div className="flex justify-evenly h-28 font-bold 2xl:w-4/5  lg:items-center absolute w-11/12 bg-transparent">
          <div className="headerLeft bg-transparent  w-[90px]   ">
            <img className="h-60"
              id="navimgwhite"
              src="https://www.cubix.co/themes/responsiv-clean/assets/img/cubix-logo.svg"
              alt="logo"
            />
          </div>
          <div className="headerRight lg:ml-0 text-white  w-4/5 bg-transparent lg:w-screen ">
            <nav className="xl:w-full xl:flex xl:justify-center xl:items-center">
              <ul className="flex  lg:justify-end xl:justify-around   w-full xl:w-11/12 xl:text-base items-center lg:gap-5 xl:gap-0  bg-[#00000000] ">
                <li>Services</li>
                <li>Solutions</li>
                <li>Work</li>
                <li>About</li>
                <li>Resources</li>
                <li>Contact</li>
                <li
                  onClick={() => {
                    var phoneNumber = "+923074457790";
                    window.location.href = "tel:" + phoneNumber;
                  }}
                >
                  <li className=" w-fit">
                    <i class="fa fa-phone mr-3 text-xs " aria-hidden="true"></i>
                    +923074457790
                  </li>
                </li>
                <li className="ml-4">
                  <button className="bg-[#FF8839] text-balance px-5 py-3  capitalize -m-2 rounded">
                    ESTIMATE PROJECT
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
