import React from 'react'
import { imgs } from '../Images/icons'
import "../CSS/Hero.css"

export default function Hero() {
  return (
    <>
    <section className='hero text-white '>
      <div className="mainhero flex justify-center items-center it w-screen   bg-hero-pattern bg-cover bg-center h-[85vh] border border-red-600">
        <div className='main w-11/12  border border-green-500 h-full flex justify-center items-center "'>
         <div className='h-4/5 w-full flex flex-col justify-around  border border-red-600'>
          <div className="heroText border border-yellow-500 h-1/2 flex flex-col items-center justify-evenly">
            <h1 className='text-3xl font-bold '>Moderniing Mobile Platforms</h1>
            <p className='font-normal text-base leading-relaxed self-center text-center  text-[rgba(255,255,255,.9)] w-full '>Custom mobile apps.User experiences & design.Engagement & Intelligence.Native & cross-platforms</p>
            <div className='bg-primary px-4 py-1 rounded-sm w-40 h-10 text-center flex justify-center items-center'><button className="herobtn text-center bg-primary  text-sm font-bold  ">LETS' TALK</button></div>
          </div> 
          <div className="heroLower flex flex-col bg-black h-1/3">
            <div className="top flex flex-col items-center h-2/5 justify-around">
              <h4 className='font-medium text-xl'>Trusted by</h4>
              <div className='topimgs flex w-full justify-evenly '>
                <img className='topimg' src={imgs.leftimg1} alt="" />
                <img className='topimg' src={imgs.leftimg2} alt="" />
                <img className='topimg' src={imgs.leftimg3} alt="" />
                <img className='topimg' src={imgs.leftimg4} alt="" />
              </div>
            </div>
            <div className="lower flex flex-col h-2/4 justify-around">
              <h4 className='self-center font-medium text-xl'>Awards</h4>
              <div className="lowerimgs flex w-full justify-evenly">
                <img src={imgs.rightimg1} alt="" className="lowerimg" />
                <img src={imgs.rightimg2} alt="" className="lowerimg" />
                <img src={imgs.rightimg3} alt="" className="lowerimg" />
                <img src={imgs.rightimg4} alt="" className="lowerimg" />
              </div>
            </div>
          </div>
         </div>
        </div>
      </div>
    </section>
    </>
  )
}
