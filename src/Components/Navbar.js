import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className='flex justify-around xsm:justify-between xsm:px-8 items-center navbar h-[10vh] w-screen border border-purple-700 bg-white absolute '>
        <div className="navleft  ">
            <div className="logo w-[97px]">
                <img src="https://www.cubix.co/themes/responsiv-clean/assets/img/cubix-logo-dark.svg" alt="logo" />
            </div>
        </div>
        <div className="navright flex">
            <nav className='flex border border-green-900 min-w-24 grow'>
                <ul className='flex w-full justify-between items-center border border-red-900'>
                   
                    <li><span className='border   bg-primary text-white h-11 w-11 text-sm  rounded-full flex items-center justify-center'><i class="fa-solid fa-phone"></i></span></li>
                    <li><span className='border container text-2xl'><i class="fa-solid fa-bars-staggered"></i></span></li>
                </ul>
            </nav>
        </div>
    </div>
    </>
  )
}
