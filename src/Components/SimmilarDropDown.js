import React from 'react'



export default function SimmilarDropDown(props) {
  return (
    <div className='h-auto flex flex-col ml-6 '>
      <div className="Similartop flex flex-col ml-3  ">
        <span className='text-xl mt-4'>{props.title}</span>
        <span className='text-sm py-4'>{props.titledes} </span>
      </div>
      <div className="Similarcenter flex flex-col">
      <p className='font-semibold inline-block text-xl py-3'>{props.titlemain}</p>
        <div className="centerdiv1 similar ">
            {/* <div className={`centerdiscription ${props.tech1des} `}>
                <a className='Similara' href="http://#">{props.tech1}</a>
                <span>
                    <a href="http://#">{props.tech1a1}</a>
                    <a href="http://#">{props.tech1a2}</a>
                  
                    <span>{props.tech1des}</span>
                </span>
            </div> */}
            <div className="centerdiscription">
            <a className='Similara' href="http://#">{props.tech2}</a>
            <span>{props.tech2des}</span>
            </div>
            <div className="centerdiscription">
            <a className='Similara' href="http://#">{props.tech3}</a>
            {/* <a className='Similara' href="http://#">Blockchain Development</a> */}
            <span>
              {props.tech3des}
              {/* Blockchain DApp Development */}
            </span>
            </div>
            <div className="centerdiscription">
            <a className='Similara' href="http://#">{props.tech4}</a>
            {/* <a className='Similara' href="http://#">Augmented Reality</a> */}
            <span>
              {props.tech4des}
              {/* Modern AR apps */}
            </span>
            </div>
            <div className="centerdiscription">
            <a className='Similara' href="http://#">{props.tech5}</a>
            {/* <a className='Similara' href="http://#">Artificial intelligence</a> */}
            <span>
              {props.tech5des}
              {/* AI and Machine Learning */}
            </span>
            </div>
            <div className="centerdiscription">
            <a className='Similara' href="http://#">{props.tech6}</a>
            {/* <a className='Similara' href="http://#">Web Development</a> */}
            <span>
              {props.tech6des}
              {/* Robust web development */}
            </span>
            </div>
            <div className="centerdiscription">
              <a className='Similara' href="http://#">{props.tech7}</a>
              {/* <a className='Similara' href="http://#">NFT Game Development</a> */}
              <span>
                {props.tech7des}
                {/* NFT Marketplace and NFT Solutions */}
              </span>
            </div>
            <div className="centerdiscription">
            <a className='Similara' href="http://#">{props.tech8}</a>
            {/* <a className='Similara' href="http://#">Big Data</a> */}
            <span>
              {props.tech8des}
              {/* Apps integrated with Big Data */}
            </span>
            </div>
            <div className="centerdiscription">
            <a className='Similara' href="http://#">{props.tech9}</a>
            {/* <a className='Similara' href="http://#">Visionos Development</a> */}
            <span>{props.tech9des}</span>
            {/* <span>VisionPro App and Game Development</span> */}
            </div>
            <div className="centerdiscription">
            <a className='Similara' href="http://#">{props.tech10}</a>
            {/* <a className='Similara' href="http://#">MVP Development</a> */}
            <span>{props.tech10des}</span>
            {/* <span>MVP for Startups</span> */}
            </div>
            <div className="centerdiscription">
            <a className='Similara' href="http://#">{props.tech11}</a>
            {/* <a className='Similara' href="http://#">SharePoint</a> */}
            <span>
              {props.tech11des}
              {/* Microsoft SharePoint Development Services */}
            </span>
            </div>
        </div>
      </div>
    </div>
  )
}
