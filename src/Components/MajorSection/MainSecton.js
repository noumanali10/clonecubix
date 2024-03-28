import React from 'react'
import { localDbMain } from './LocalDbMain'
import Similarmain from './Similarmain'

export default function MainSecton() {
const section1=localDbMain[0].section1
const section2=localDbMain[0].section2
const section3=localDbMain[0].section3
const section4=localDbMain[0].section4
  return (
    <div>
     
      <Similarmain items={section1} width={'main'} flexDirectionDiv={''}/>
      <Similarmain items={section2} width={'main'}/>
      <Similarmain items={section3} width={'main'}/>
      <Similarmain items={section4} width={'main'}/>
    </div>
  )
}
