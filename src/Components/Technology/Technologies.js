import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../Technology/Style.css";
import ios from "../../Images/svg-export/ic-technology-ios2x.svg";
import andriod from "../../Images/svg-export/ic-technology-android2x.svg";
import reactNative from "../../Images/svg-export/ic-technology-react-native2x.svg";
import react from "../../Images/svg-export/ic-technology-react-native2x.svg";
import flutter from "../../Images/svg-export/ic-technology-flutter2x.svg";
import ionic from "../../Images/svg-export/ic-technology-ionic2x.svg";
import swift from "../../Images/svg-export/ic-technology-swift2x.svg";
import kotlin from "../../Images/svg-export/ic-technology-kotlin2x.svg";
import objectivec from "../../Images/svg-export/ic-technology-objectivec2x.svg";
import angular from "../../Images/svg-export/ic-technology-angular-js2x.svg";
import typescript from "../../Images/svg-export/ic-technology-typescript2x-2.svg";
import vue from "../../Images/svg-export/ic-technology-vue2x.svg";
import wpf from "../../Images/svg-export/ic-technology-wpf2x.svg";
import html5 from "../../Images/svg-export/ic-technology-html52x.svg";
import mongoDB from "../../Images/svg-export/ic-technology-mango-db.svg";
import mySql from "../../Images/svg-export/ic-technology-my-sql2x.svg";
import msSql from "../../Images/svg-export/ic-technology-ms-sql2x1.svg";
import firebase from "../../Images/svg-export/ic-technology-firebase2x.svg";
import dynamodb from "../../Images/svg-export/ic-technology-dynamodb2x.svg";
import redis from "../../Images/svg-export/ic-technology-redis2x.svg";
import php from "../../Images/svg-export/ic-technology-php2x.svg";
import java from "../../Images/svg-export/ic-technology-java2x.svg";
import nodejs from "../../Images/svg-export/ic-technology-node-js2x.svg";
import wordpress from "../../Images/svg-export/ic-technology-wordpress2x.svg";
import magento from "../../Images/svg-export/ic-technology-magento2x.svg";
import shopify from "../../Images/svg-export/ic-technology-shopify-plus2x.svg";
import aws from "../../Images/svg-export/ic-technology-aws2x.svg";
import gradle from "../../Images/svg-export/ic-technology-gradle2x.svg";
import jenkins from "../../Images/svg-export/ic-technology-jenkins2x.svg";
import appium from "../../Images/svg-export/ic-technology-appium2x.svg";
import selenium from "../../Images/svg-export/ic-technology-selenium2x.svg";
// import Azure from '../../Images/svg-export/svgexport-7.svg';
// import digitalOcean from '../../Images/svg-export/svgexport-8.svg';
// import Rackspace from '../../Images/svg-export/svgexport-9.svg';

const Tech = {
  Mobile: [
    {
      img: ios,
      text: "iOS",
    },
    {
      img: andriod,
      text: "Android",
    },
    {
      img: reactNative,
      text: "React Native",
    },
    {
      img: flutter,
      text: "Flutter",
    },
    {
      img: ionic,
      text: "Ionic",
    },
    {
      img: swift,
      text: "Swift",
    },
    {
      img: kotlin,
      text: "Kotlin",
    },
    {
      img: objectivec,
      text: "Objective-C",
    },
  ],
  Frontend: [
    {
      img: angular,
      text: "Angular.js",
    },
    {
      img: react,
      text: "React.js",
    },
    {
      img: typescript,
      text: "TypeScript",
    },
    {
      img: vue,
      text: "Vue",
    },
    {
      img: wpf,
      text: "WPF",
    },
    {
      img: html5,
      text: "HTML5",
    },
  ],
  Backend: [{
    img:{mongoDB},
    text:"Mongo DB"
  },
],
};

export default function Technologies() {
  let items = Tech.Mobile;
  const [itemsState, setItemsState] = useState(items);
  const [checkClick, setCheckClick] = useState(false);

  const handleClick = (liname) => {
    let updatedItems = [];
    if (liname === "mobile") {
      updatedItems = Tech.Mobile;
      setCheckClick(true);
    } else if (liname === "frontend") {
      updatedItems = Tech.Frontend;
      setCheckClick(true);
    }
    setItemsState(updatedItems);
  };

  return (
    <>
      <div className="flex justify-around items-center flex-col gap-4  my-16 h-[75vh]">
        <div className="text-center">
          <span className="font-bold leading-9 text-[28px] text-center">
            Technologies we work with
          </span>
        </div>
        <ul className="flex justify-center items-center gap-5  flex-wrap ">
          <li className="techli" onClick={() => handleClick("mobile")}>
            {" "}
            Mobile
          </li>
          <li className="techli" onClick={() => handleClick("frontend")}>
            Frontend
          </li>
          <li className="techli">Database</li>
          <li className="techli">Backend</li>
          <li className="techli">CMS</li>
          <li className="techli">Infra and devops </li>
        </ul>
        <div className="flex flex-wrap justify-evenly items-center gap-8 w-11/12">
          {Array.isArray(itemsState) &&
            itemsState.map((item, index) => (
              <div
                key={index}
                className=" flex flex-col justify-around items-center  h-[100px] w-[75px] "
              >
                <img className="w-[49px]" src={item.img} alt="" />
                <span className="font-semibold text-[15px] text-center">
                  {item.text}
                </span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
