import React from 'react'
import SimmilarDropDown from './SimmilarDropDown'


export default function aboutDropDown() {
  return (
    <>
    <SimmilarDropDown
    title="About"
    titledes="A full-cycle software and mobile app development company with a world-class team of innovators"
    titlemain="Explore"
    tech1="Process"
    tech1des="Our Agile Process"
    tech2="Clients"
    tech2des="Our Global Clientele"
    tech3="Testimonials"
    tech3des="What our clients have to say"
    tech4="Careers"
    tech4des="Build your career with us "
    tech5="University"
    tech5des="Learn and Grow"
    tech6="Manifesto"
    tech6des="Our Business Model"
    />
    <div className="aboutDown flex flex-wrap text-[20px] font-semibold w-3/4 ml-6 relative bottom-[128px] ">
        <span className='aboutDownSpan '>
            <span>12+</span>
            <span>Years</span>
        </span>
        <span className='aboutDownSpan ml-16 '>
            <span>200+</span>
            <span>Employees</span>
        </span>
        <span className='aboutDownSpan'>
            <span>600+</span>
            <span>Projects</span>
        </span>
        <span className='aboutDownSpan ml-[2.5rem]'>
            <span>550+</span>
            <span>Clients</span>
        </span>
    </div>
    </>
  )
}
