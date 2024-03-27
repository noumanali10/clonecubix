// SimmilarDropDown2
import React from 'react';

const SimmilarDropDown2 = ({ items}) => {
  return (
    
      <div className="centerdiscription lg:font-light  ">
      {items.map((item, index) => (
        <div key={index} className="mb-4 flex flex-col  ">
          <p className='Similara2 lg:font-light '>{item.name}</p>
          <span className='text-black lg:font-light'>{item.des}</span>
          {/* <p>{item.des}</p>  */}
        </div>
      ))}
    </div>
    
   
    
    //  <div className="centerdiscription">
    //  <a className='Similara' href="http://#">{props.tech2}</a>
    //  <span>{props.tech2des}</span>
    //  </div>
  );
};

export default SimmilarDropDown2;
