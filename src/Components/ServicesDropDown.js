import React from "react";
import Similar from "./SimmilarDropDown";

export default function ServicesDropDown() {
  return (
    <div className="h-auto bg-white">
      <Similar
        title="Our services"
        titledes="Leveraging cutting-edge technologies to build industry-leading digital products."
        titlemain="Servies"
        tech1="Mobile Application"
       tech1a1="IOS,"
       tech1a2="Andriod,"
       tech1des="and Wearable Apps"
        tech2="Game Development"
        tech2des="2D,3D and Isometric Games"
        tech3="Blockchain Development"
        tech3des="Blockchain DApp Development"
        tech4="Augmented Reality"
        tech4des="Modern AR apps "
        tech5="Artificial intelligence"
        tech5des="AI and Machine Learning "
        tech6="Web Development"
        tech6des="Robust web development"
        tech7="NFT Game Development"
        tech7des="NFT Marketplace and NFT Solutions"
        tech8="Big Data"
        tech8des="Apps integrated with Big Data "
        tech9="Visionos Development"
        tech9des="VisionPro App and Game Development"
        tech10="MVP Development"
        tech10des="MVP for Startups"
        tech11="SharePoint"
        tech11des="Microsoft SharePoint Development Services"
      />
      <div className=" servicedown flex flex-col ml-6">
        <span className="font-semibold tetx-2xl py-8">How we work</span>
        <div>
          <div className="coomen">
            <span className="Similara">Discovery</span>
            <span className="servicespan">
              Exploring project requirement Services
            </span>
          </div>
          <div className="coomen">
            <span className="Similara">Design</span>
            <span className="servicespan">Intuitive and engaging designs</span>
          </div>
          <div className="coomen">
            <span className="Similara">Development</span>
            <span className="servicespan">Agile development processes</span>
          </div>
          <div className="coomen">
            <span className="Similara">Testing</span>
            <span className="servicespan">Incremental testing and QA</span>
          </div>
          <div className="coomen">
            <span className="Similara">Deployment</span>
            <span className="servicespan">Full-function product delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
}
