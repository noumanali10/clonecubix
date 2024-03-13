import React from "react";
import SimmilarDropDown from "./SimmilarDropDown";

export default function solutionsDropDown() {
  return (
    <>
      <SimmilarDropDown
        title="Our solutions"
        titledes="Customized digital solutions to help clients build their competitive edge"
        titlemain="Products"
        tech1="Cubix Happyforce"
        tech1des="HR Solution"
        tech2="Cubix Shop"
        tech2des="Marketplace Solution"
        tech3="On-Demand Delivery"
        tech3des="on-Demand Delivery solution"
        tech4="Cubix Chain"
        tech4des="Blockchain Solution "
        tech5="Cubix Insight Machine"
        tech5des="Machine Solution"
        tech6="Cubix Hero"
        tech6des="Powerfull RPG Solution"
        tech7="Messenger"
        tech7des="Real-time messaging solution"
        tech8="Chat Bot"
        tech8des="Smart Chatbot solution "
        tech9="Social Platform"
        tech9des="Social-App building Platform"
        tech10="Events Management"
        tech10des="Digital event management"
      />
      <div className=" solutiondown flex flex-col ml-6">
        <span className="font-semibold tetx-3xl ">Core Services</span>
        <div className={`centerdiscription `}>
                <a className='Similara' href="http://#">Mobile app development</a>
                <span className="font-[14px] py-2">
                    <a href="http://#">Ios,</a>
                    <a href="http://#">Andriod,</a>
                    {/* <a href="http://#">Andriod</a> */}
                    <span>and Wearable Apps</span>
                </span>
            </div>
            <div className="centerdiscription">
            <a className='Similara' href="http://#">Game Development</a>
            <span className="font-[14px] py-2">2D,3D and Isometric Games</span>
            </div>
            <div className="centerdiscription">
            {/* <a className='Similara' href="http://#">{props.tech3}</a> */}
            <a className='Similara' href="http://#">Blockchain Development</a>
            <span className="font-[14px] py-2">
              {/* {props.tech3des} */}
              Blockchain DApp Development
            </span>
            </div>
            <div className="centerdiscription">
            {/* <a className='Similara' href="http://#">{props.tech4}</a> */}
            <a className='Similara' href="http://#">Augmented Reality</a>
            <span className="font-[14px] py-2">
              {/* {props.tech4des} */}
              Modern AR apps
            </span>
            </div>
      </div>
    </>
  );
}
