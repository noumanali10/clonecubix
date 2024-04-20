import React, { forwardRef } from 'react';

const review = [
  {
    text1: '23%',
    text2: 'INCREASED RESPONSE TIME',
  },
  {
    text1: '28%',
    text2: 'FASTER DELIVERY TIME',
  },
  {
    text1: '97%',
    text2: 'CLIENT SATISFACTION INDEX',
  },
  {
    text1: '70%',
    text2: 'CLIENT RETENTION RATE',
  },
];

const ServiceHeroDown = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="mainService mt-16"> 
      <div ref={ref}>

      
        <div className="ServiceTexts flex justify-around items-center flex-col text-center">
          <span className="text-primary text-[12px] font-semibold w-3/5">DISCOVERY. DESIGN. DEVELOPMENT. TESTING</span>
          <span className="text-[35px] font-bold w-10/12 my-8">Digital Demand Thrives in Our Hands</span>
          <span className="font-normal text-[20px] w-10/12 lg:w-7/12">
            We bring to you award-winning products, excellent UI/UX, and a world-class tech talent of web and mobile arena that bridges the gap between the creative and technology world. At Cubix, our solutions become a technology brand that others take inspiration from.
          </span>
        </div>
        <div className="h-full flex flex-col md:flex-row ">
          {review.map((item, index) => (
            <div key={index} className="review-item flex flex-col leading-tight shadow-md mt-16 justify-center items-center h-[80%]  md:w-1/3  ">
              <span className="text-[60px] font-bold opacity-85">{item.text1}</span>
              <span className="text-[12px] font-normal">{item.text2}</span>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
});

export default ServiceHeroDown;
