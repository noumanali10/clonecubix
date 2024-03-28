// SimmilarDropDown


import React from 'react';

const SimmilarDropDown = ({ items, flexDirection,width}) => {
  const directionClass = flexDirection === "row" ? "flex-row" : "flex-col";
  const widthClass = width ? `lg:w-${width.replace('main', '2/5')}` : '';
  return (
    

    <div className={`centerdiscription2 lg:font-light lg:w-full lg:flex lg:h-fit  ${directionClass}`}>
    {items.map((item, index) => (
      <div key={index} className={`mb-4 flex flex-col lg:h-fit ${widthClass}`}>
        <a className="Similara lg:font-light" href="/">{item.name}</a>
        <span className="lg:font-light">{item.des}</span>
      </div>
    ))}
  </div>
  
   
    
   
    
    //  <div className="centerdiscription">
    //  <a className='Similara' href="http://#">{props.tech2}</a>
    //  <span>{props.tech2des}</span>
    //  </div>
  );
};

export default SimmilarDropDown;
