import React from "react";
import Similar from "./SimmilarDropDown";

export default function ServicesDropDown() {
  return (
    <div className="h-auto bg-white">
      <Similar />
      <div>
        <span>How we work</span>
        <div>
          <div className="coomen">
            <span>Discovery</span>
            <span>Exploring project requirement Services</span>
          </div>
          <div className="coomen">
            <span>Design</span>
            <span>Intuitive and engaging designs</span>
          </div>
          <div className="coomen">
            <span>Development</span>
            <span>Agile development processes</span>
          </div>
          <div className="coomen">
            <span>Testing</span>
            <span>Incremental testing and QA</span>
          </div>
          <div className="coomen">
            <span>Deployment</span>
            <span>Full-function product delivery</span>
          </div>
       
        </div>
      </div>
    </div>
  );
}
