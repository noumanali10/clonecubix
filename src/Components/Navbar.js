import React, { useState } from "react";
import ServicesDropDown from "./ServicesDropDown";
import SolutionsDropDown from "./solutionsDropDown";
import "../CSS/Navbar.css";
import icons from "../Images/icons";

export default function Navbar() {
  const [toggle, setToggle] = useState(true);
  const [toggleServices, setToggleServices] = useState(false);
  const [toggleSolutions, setToggleSolutions] = useState(false);

  const handleClick2 = (section) => {
    if(section==='services'){
        setToggleSolutions(false);
        setToggleServices(!toggleServices);
    }
    else if('solution' && toggleSolutions===false){
        setToggleServices(false);
        setToggleSolutions(true);
    }
    else{
        setToggleServices(false);
        setToggleSolutions(false);
    }
   
  };

  const handleClick = () => {
    setToggle(!toggle);
    setToggleServices(false);
    setToggleSolutions(false);
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
                <span className="border dialNumber  bg-primary text-white h-11 w-11 text-sm rounded-full flex items-center justify-center">
                  <i onClick={()=>{var phoneNumber = '+923034849777'; 
    window.location.href = 'tel:' + phoneNumber;}} className="fa-solid fa-phone"></i>
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
          toggle ? "hidden move-down-step1 navdropdown" : " move-down-step2 h-screen navdropdown  bg-white w-full absolute top-[4.65rem]"
        }
      >
        <ul className="h-full">
          <li>
            <span>Services</span>
            <img onClick={() => handleClick2('services')} src={icons.gt} alt="expand" />
           
          </li>
          <div className={toggleServices ? "h-auto" : "hidden"}>
              <ServicesDropDown />
            </div>
          <li>
          <span>Solutions</span>
          <img onClick={() => handleClick2('solution')} src={icons.gt} alt="" />
        </li>
        <div className={toggleSolutions ? "h-auto" : "hidden"}>
            <SolutionsDropDown/>
        </div>
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

        </ul>
      </div>
    </>
  );
}
