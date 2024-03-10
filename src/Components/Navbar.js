import React, { useState } from "react";
import ServicesDropDown from "./ServicesDropDown";
import "../CSS/Navbar.css";
import icons from "../Images/icons";
export default function Navbar() {
  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const handleClick2 = (e) => {
    if (toggle2 === false) {
      setToggle2((prevToggle2) => !prevToggle2);
    } else if (toggle === true) {
      // Do nothing or handle the case where you don't want to toggle
    } else {
      setToggle2((prevToggle2) => !prevToggle2);
    }
  };
  const handleClick = (e) => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <>
      <div className="flex border absolute  border-red-600 justify-around xsm:justify-between xsm:px-8 items-center navbar h-[10vh] w-screen  bg-white mt-0 top-0 ">
        <div className="navleft  ">
          <div className="logo w-[97px]">
            <img
              src="https://www.cubix.co/themes/responsiv-clean/assets/img/cubix-logo-dark.svg"
              alt="logo"
            />
          </div>
        </div>
        <div className="navright flex">
          <nav className="flex  min-w-24 grow">
            <ul className="flex w-full justify-between items-center ">
              <li>
                <span className="border   bg-primary text-white h-11 w-11 text-sm  rounded-full flex items-center justify-center">
                  <i class="fa-solid fa-phone"></i>
                </span>
              </li>
              <li
                onClick={handleClick}
                className={toggle === true ? "inline-block  " : "hidden "}
              >
                <span className="border container text-2xl h-4">
                  <i class="fa-solid fa-bars-staggered"></i>
                </span>
              </li>
              <li
                onClick={handleClick}
                className={toggle === true ? "hidden" : "inline-block"}
              >
                <span className="border container text-2xl hidden h-4">
                  <i class="fa-solid fa-xmark"></i>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        className={
          toggle === true
            ? "hidden move-down-step1  navdropdown "
            : "move-down-step2  navdropdown h-  list-none h-full bg-white w-full  absolute top-[4.65rem]"
        }
      >
        <li className="">
          <span>Services</span>
          <img onClick={handleClick2} src={icons.gt} alt="" />
        </li>
        <div className={toggle2 === true ? "h-auto " : "hidden"}>
          <ServicesDropDown />
        </div>
        <li>
          <span>Solutions</span>
          <img onClick={handleClick2} src={icons.gt} alt="" />
        </li>
        <li>Work</li>
        <li>
          <span>About</span>
          <img src={icons.gt} alt="" />
        </li>
        <li>
          <span>Resources</span>
          <img src={icons.gt} alt="" />
        </li>
        <li>Contact</li>
      </div>
    </>
  );
}
