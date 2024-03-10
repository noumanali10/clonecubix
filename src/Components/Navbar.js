import React, { useState } from "react";
import ServicesDropDown from "./ServicesDropDown";
import "../CSS/Navbar.css";
import icons from "../Images/icons";

export default function Navbar() {
  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(false);

  const handleClick2 = () => {
    setToggle2(!toggle2);
  };

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="flex border absolute border-red-600 justify-around xsm:justify-between xsm:px-8 items-center navbar h-[10vh] w-screen bg-white mt-0 top-0">
        <div className="navleft">
          <div className="logo w-[97px]">
            <img
              src="https://www.cubix.co/themes/responsiv-clean/assets/img/cubix-logo-dark.svg"
              alt="logo"
            />
          </div>
        </div>
        <div className="navright flex">
          <nav className="flex min-w-24 grow">
            <ul className="flex w-full justify-between items-center">
              <li>
                <span className="border bg-primary text-white h-11 w-11 text-sm rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-phone"></i>
                </span>
              </li>
              <li onClick={handleClick} className={toggle ? "inline-block" : "hidden"}>
                <span className="border container text-2xl h-4">
                  <i className="fa-solid fa-bars-staggered"></i>
                </span>
              </li>
              <li onClick={handleClick} className={!toggle ? "inline-block" : "hidden"}>
                <span className="border container text-2xl h-4">
                  <i className="fa-solid fa-xmark"></i>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        className={
          toggle ? "hidden move-down-step1 navdropdown" : "move-down-step2 navdropdown h-auto bg-white w-full absolute top-[4.65rem]"
        }
      >
        <ul>
          <li>
            <span>Services</span>
            <img onClick={handleClick2} src={icons.gt} alt="expand" />
            <div className={toggle2 ? "h-auto" : "hidden"}>
              <ServicesDropDown />
            </div>
          </li>
          {/* Repeat for other navigation items as needed */}
        </ul>
      </div>
    </>
  );
}
