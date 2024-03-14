import React from "react";
import Simmilar from "./SimmilarDropDown";
import { localDB } from "../Images/icons";

export default function ServicesDropDown() {
  const items = localDB[0].services[0].items;
  const items2 = localDB[0].services[0].items2;
  return (
    <>
      <div className="h-full flex flex-col ml-6 relative z-40 ">
        <div className="Similartop flex flex-col ml-3  ">
          <span className="text-xl mt-4">{localDB[0].services[0].title}</span>
          <span className="text-sm py-4">
            {localDB[0].services[0].titledes}
          </span>
        </div>
        <p className="font-semibold inline-block text-xl py-3">
          {localDB[0].services[0].minititle}
        </p>
        <Simmilar items={items} />
        <p className="font-semibold inline-block text-xl py-3">
          {localDB[0].services[0].minititle2}
        </p>
        <Simmilar items={items2} />
      </div>
    </>
  );
}
