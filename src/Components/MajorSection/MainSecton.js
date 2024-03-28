import React from 'react'
import { localDbMain } from './LocalDbMain'
import Similarmain from './Similarmain'

export default function MainSecton() {
const section1=localDbMain[0].section1
const section2=localDbMain[0].section2
const section3=localDbMain[0].section3
const section4=localDbMain[0].section4
  return (
    <div className='w-screen  '>
     <div className="toptext  w-3/4  text-center    mt-4 lg:my-16  m-auto  2xl:w-2/5">
      <span className='font-bold text-[28px] leading-normal  w-4/5 lg:w-2/4 lg:text-[42px]  lg:container '>
      We love transforming product ideas to digital realities.
      </span>
     </div>
      <Similarmain items={section1} width={'main'} flexDirection="row" />
      <Similarmain items={section2} width={'main'}  flexDirection="row-reverse"/>
      <Similarmain items={section3} width={'main'}  flexDirection="row"/>
      <Similarmain items={section4} width={'main'} flexDirection="row-reverse"/>
    </div>
  )
}
