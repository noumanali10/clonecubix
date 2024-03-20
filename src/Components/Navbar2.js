import React from 'react'

export default function Navbar2() {
  return (
    <>
   <div className=" hidden lg:flex justify-center text-white">
   <div className="flex justify-around h-28 font-bold  items-center absolute w-11/12 bg-transparent">
        <div className="headerLeft bg-transparent ">
          <img
            src="https://www.cubix.co/themes/responsiv-clean/assets/img/cubix-logo.svg"
            alt="logo"
          />
        </div>
        <div className="headerRight text-white  w-4/5 bg-transparent ">
          <nav>
            <ul className="flex justify-evenly item-center  bg-[#00000000] ">
              <li>Services</li>
              <li>Solutions</li>
              <li>Work</li>
              <li>About</li>
              <li>Resources</li>
              <li>Contact</li>
              <li><i class="fa fa-phone mr-3 " aria-hidden="true"></i>300-0000-000</li>
              <li>
                <button className="bg-[#FF8839] text-balance px-5 py-3 capitalize -m-2 rounded">ESTIMATE PROJECT</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
   </div>
    </>
  )
}
