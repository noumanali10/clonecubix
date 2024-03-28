import React, { useState, useEffect } from "react";
import ServicesDropDown from "./ServicesDropDown";
import SolutionsDropDown from "./solutionsDropDown";
import AboutDropDown from "./aboutDropDown";
import ResourcesDropDown from "./resourcesDropDown";

export default function Navbar2({ isSticky }) {

  const [hoverState, setHoverState] = useState({
    services: false,
    solutions: false,
    about: false,
    resources: false,
  });
  const [imageSrc, setImageSrc] = useState(
    "https://www.cubix.co/themes/responsiv-clean/assets/img/cubix-logo.svg"
  );
  const [textColor, setTextColor] = useState("white");
  const updateHoverState = (section, isHovered) => {
    setHoverState((prevState) => ({ ...prevState, [section]: isHovered }));
  };

  useEffect(() => {
    const isAnySectionHovered = Object.values(hoverState).some(
      (state) => state === true
    );
    if (isAnySectionHovered) {
      document.body.style.overflowX = "hidden"; // Enable body scroll
      document.getElementById("navbar").style.backgroundColor = "white";
      setTextColor("black");
      // src="https://www.cubix.co/themes/responsiv-clean/assets/img/cubix-logo-dark.svg"
      setImageSrc(
        "https://www.cubix.co/themes/responsiv-clean/assets/img/cubix-logo-dark.svg"
      );
    } else {
      document.body.style.overflow = ""; // Enable body scroll
      document.getElementById("navbar").style.backgroundColor = "";
      setTextColor("white");
      setImageSrc(
        "https://www.cubix.co/themes/responsiv-clean/assets/img/cubix-logo.svg"
      );
    }
  }, [hoverState]);
useEffect(()=>{
  if (isSticky === true) {
    document.getElementById("navbar").style.backgroundColor = "white";
    setTextColor("black");
    // src="https://www.cubix.co/themes/responsiv-clean/assets/img/cubix-logo-dark.svg"
    setImageSrc(
      "https://www.cubix.co/themes/responsiv-clean/assets/img/cubix-logo-dark.svg"
    );
  } else {
    document.getElementById("navbar").style.backgroundColor = "";
    setTextColor("white");
    setImageSrc(
      "https://www.cubix.co/themes/responsiv-clean/assets/img/cubix-logo.svg"
    );

  }
},[isSticky])

  return (
    <>
      <div
        id="navbar"
        // className="navbar  lg:flex justify-center text-white hidden border-red-700 lg:h-20 lg:absolute w-full   "
        className={`navbar lg:flex justify-center text-white hidden lg:h-20 w-full  ${
          isSticky ? "sticky" : ""
        }`}
      >
        <div
          id="navbar"
          className="flex justify-evenly h-20 font-bold 2xl:w-4/5  lg:items-center absolute w-11/12 bg-transparent"
        >
          <div className="headerLeft bg-transparent  w-[90px]   ">
            <a href="/">
              <img
                className="h-fit"
                id="navimgwhite"
                src={imageSrc}
                alt="logo"
              />
            </a>
          </div>
          <div className="headerRight lg:ml-0 text-white  w-4/5 bg-transparent lg:w-screen lg:h-full lg:flex lg:items-center lg:justify-center ">
            <nav className="xl:w-full xl:flex xl:justify-center xl:items-center lg:h-full">
              <ul className="navbar2ul flex lg:h-full  lg:justify-end xl:justify-around   w-full xl:w-11/12 xl:text-base items-center lg:gap-5 xl:gap-0  bg-[#00000000] ">
                <li
                  className="containernav "
                  style={{ color: textColor }}
                  onMouseEnter={() => updateHoverState("services", true)}
                  onMouseLeave={() => updateHoverState("services", false)}
                >
                  Services
                  {hoverState.services && <ServicesDropDown />}
                </li>
                <li
                  className="containernav "
                  style={{ color: textColor }}
                  onMouseEnter={() => updateHoverState("solutions", true)}
                  onMouseLeave={() => updateHoverState("solutions", false)}
                >
                  Solutions
                  {hoverState.solutions && <SolutionsDropDown />}
                </li>
                <li style={{ color: textColor }}>Work</li>
                <li
                  style={{ color: textColor }}
                  className="containernav "
                  onMouseEnter={() => updateHoverState("about", true)}
                  onMouseLeave={() => updateHoverState("about", false)}
                >
                  About
                  {hoverState.about && <AboutDropDown />}
                </li>
                <li
                  style={{ color: textColor }}
                  className="containernav "
                  onMouseEnter={() => updateHoverState("resources", true)}
                  onMouseLeave={() => updateHoverState("resources", false)}
                >
                  Resources
                  {hoverState.resources && <ResourcesDropDown />}
                </li>
                <li style={{ color: textColor }}>Contact</li>
                <li
                  style={{ color: textColor }}
                  onClick={() => {
                    var phoneNumber = "+923074457790";
                    window.location.href = "tel:" + phoneNumber;
                  }}
                >
                  <li
                    className=" w-fit navbarlitext"
                    style={{ color: textColor }}
                  >
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
