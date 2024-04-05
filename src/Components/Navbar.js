import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ServicesDropDown from "./ServicesDropDown";
import SolutionsDropDown from "./solutionsDropDown";
import AboutDropDown from "./aboutDropDown";
import "../CSS/Navbar.css";
import { icons } from "../Images/icons";
import ResourcesDropDown from "./resourcesDropDown";
import Services from "../Services Component/serviceHomePage";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Navbar({ isSticky }) {
  const [toggle, setToggle] = useState(true);
  const [toggleServices, setToggleServices] = useState(false);
  const [toggleSolutions, setToggleSolutions] = useState(false);
  const [toggleAbout, setToggleAbout] = useState(false);
  const [toggleResources, setToggleResources] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.body.classList.remove("no-scroll");
    } else {
      document.body.classList.add("no-scroll");
    }
    // Clean-up function
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [toggle]);

  const handleClick2 = (section) => {
    if (section === "services") {
      setToggleSolutions(false);
      setToggleAbout(false);
      setToggleResources(false);
      setToggleServices(!toggleServices);
    } else if (section === "solution") {
      setToggleServices(false);
      setToggleAbout(false);
      setToggleResources(false);
      setToggleSolutions(!toggleSolutions);
    } else if (section === "about") {
      setToggleServices(false);
      setToggleSolutions(false);
      setToggleResources(false);
      setToggleAbout(!toggleAbout);
    } else if (section === "resources") {
      setToggleServices(false);
      setToggleSolutions(false);
      setToggleAbout(false);
      setToggleResources(!toggleResources);
    } else {
      setToggleServices(false);
      setToggleSolutions(false);
      setToggleAbout(false);
      setToggleResources(false);
    }
  };

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    
      <>
        <div
          //  className="flex lg:hidden    fixed z-50   justify-around xsm:justify-between xsm:px-8 items-center navbar h-[65px] w-screen bg-white mt-0 top-0 sm:[20vh]"
          className={`flex lg:hidden    fixed z-50   justify-around xsm:justify-between xsm:px-8 items-center navbar h-[65px] w-screen bg-white mt-0 top-0 sm:[20vh] ${
            isSticky ? "sticky" : ""
          }`}
        >
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
                    <i
                      onClick={() => {
                        var phoneNumber = "+923074457790";
                        window.location.href = "tel:" + phoneNumber;
                      }}
                      className="fa-solid fa-phone"
                    ></i>
                  </span>
                </li>
                <li
                  onClick={handleClick}
                  className={toggle ? "inline-block" : "hidden"}
                >
                  <span className=" container text-2xl h-4">
                    <i className="fa-solid fa-bars-staggered"></i>
                  </span>
                </li>
                <li
                  onClick={handleClick}
                  className={!toggle ? "inline-block" : "hidden"}
                >
                  <span className=" container text-2xl h-4">
                    <i className="fa-solid fa-xmark"></i>
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div id="blank" className={toggle ? "" : "sticky-menu"}>
          <div
            className={
              toggle
                ? "hidden move-down-step1 navdropdown"
                : " move-down-step2 h-auto z-50  navdropdown absolute bg-white w-full   top-[4rem]"
            }
          >
            <ul className="h-auto ">
              <li>
                <span>
                  <Link to="/Services">Services</Link>
                </span>
                <img
                  onClick={() => handleClick2("services")}
                  src={icons.gt}
                  alt="expand"
                />
              </li>
              <div className={toggleServices ? "h-auto" : "hidden"}>
                <ServicesDropDown />
              </div>
              <li>
                <span>Solutions</span>
                <img
                  onClick={() => handleClick2("solution")}
                  src={icons.gt}
                  alt=""
                />
              </li>
              <div className={toggleSolutions ? "h-auto" : "hidden"}>
                <SolutionsDropDown />
              </div>
              <li>Work</li>
              <li>
                <span>About</span>
                <img
                  onClick={() => handleClick2("about")}
                  src={icons.gt}
                  alt=""
                />
              </li>
              <div className={toggleAbout ? "h-auto" : "hidden"}>
                <AboutDropDown />
              </div>
              <li>
                <span>Resources</span>
                <img
                  onClick={() => handleClick2("resources")}
                  src={icons.gt}
                  alt="expand"
                />
              </li>
              <div className={toggleResources ? "h-auto" : "hidden"}>
                <ResourcesDropDown />
              </div>
              <li>Contact</li>
              
            </ul>
        
          </div>
          
        </div>
       
        
      </>
   
  );
}
