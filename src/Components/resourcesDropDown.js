import React from 'react'
import Simmilar from "./SimmilarDropDown";
import { localDB } from "../Images/icons";

export default function resourcesDropDown() {
    const items = localDB[0].resources[0].items;
  return (
    <>
    <div className="h-full flex flex-col ml-6  ">
        <div className="Similartop flex flex-col ml-3  ">
          <span className="text-xl mt-4">{localDB[0].resources[0].title}</span>
          <span className="text-sm py-4">{localDB[0].resources[0].titledes}</span>
        </div>
        <p className="font-semibold inline-block text-xl py-3">
          {localDB[0].about[0].minititle}
        </p>
        <Simmilar items={items} />
        </div>

    </>
  )
}
