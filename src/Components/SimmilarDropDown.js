// SimmilarDropDown


import React from 'react';

const SimmilarDropDown = ({ items }) => {
  return (
    
    <div className="centerdiscription ">
      {items.map((item, index) => (
        <div key={index} className="mb-4 flex flex-col">
          <a className='Similara' href="http://#">{item.name}</a>
          <span>{item.des}</span>
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

export default SimmilarDropDown;
