import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Response from './Response';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [showResponse,setShowResponse]=useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
const handleClick=()=>{
setShowResponse(prev => !prev)

}
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/send', formData);
      console.log('Message sent successfully:', response.data);
      // Clear the form or show a success message here
      alert("Your Response Forwarded Successfully");
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      alert('PLease Enter Valid Email');
      console.error('Failed to send message:', error);
      // Optionally handle errors, maybe show an error message here
    }
  };

  return (
    <>
      <nav className=" absolute w-full lg:w-11/12 lg:ml-8 lg:text-black flex justify-around lg:justify-between lg:gap-4 items-center h-[7%] text-white lg:py-4">
        <div className="contactNavLeft"> 
          <Link to="/">
            <img
              className="lg:w-[150%]"
              src="https://www.cubix.co/themes/responsiv-clean/assets/img/cubix-logo.svg"
              alt="Cubix logo"
            />
          </Link>
        </div>
        <div className="contactNavRight flex justify-center items-center lg:flex-col">
          <div className="hidden lg:inline-block">
            <i className="fa-solid fa-envelope mr-2"></i>
            <span className="font-bold">info@Dofday.com</span>
          </div>
          <div>
            <i className="fa-solid fa-phone mr-2"></i>
            <span className="font-bold">+92 307 4457790</span>
          </div>
        </div>
      </nav>

      <section className="lg:flex h-screen w-screen ">
        <div className="sectionLeft lg:w-1/2 bg-gradient-to-t from-cyan-500 to-blue-900 pb-16">
          <div className="sectionLeftText flex gap-4 lg:gap-2 flex-col justify-center items-center h-[38vh] sm:h-[34vh] text-white lg:pt-5">
            <h1>
              <span className="font-bold text-[20px] sm:text-[26px]">Florida - West Palm Beach</span>
            </h1>
            <h2 className="text-center w-11/12 opacity-90">
              <span className="font-normal text-[19px]">
                560 Village Blvd., Suite 120 #3 <br />
                West Palm Beach, FL 33409, United States
              </span>
            </h2>
            <h2>
              <span className="font-bold text-[19px]">View Location</span>
            </h2>
          </div>
          <img
            className="fixed w-[200%] sm:w-[150%] lg:w-[50%] opacity-100"
            src="https://www.cubix.co/themes/responsiv-clean/assets/images/contact/birds.svg"
            alt="Decorative birds"
          />
          <div className="w-full flex justify-start items-center relative bottom-7">
            <img
              className="w-[120%]"
              src="https://www.cubix.co/themes/responsiv-clean/assets/images/contact/headquarter.svg"
              alt="Headquarter illustration"
            />
          </div>
          <div className="flex justify-center items-center">
            <ul className="text-white sm:w-11/12 w-full flex justify-between items-center text-center text-[14px] sm:text-base font-medium sm:font-semibold xl:w-10/12">
              <li>Florida <br /> West Palm Beach</li>
              <li>Karachi <br /> HQ</li>
              <li>Karachi <br /> Clifton</li>
              <li>Dubai <br /> Business Bay</li>
            </ul>
          </div>
        </div>
        <div className="sectionRight flex justify-center items-center flex-col mt-16 lg:w-1/2">
          <h1 className="font-bold text-[30px] text-center">Let's start a project together</h1>
          <div className="w-10/12 text-center mt-4">
            <span className="text-[19px] text-center">We make all your dreams come true in a successful project.</span>
          </div>
          <div>
            {showResponse && <Response/>}
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-11/12 my-4 xl:w-3/4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Name"
              className="border py-4 pl-2"
              
            />
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-2">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="border py-4 pl-2 lg:w-1/2"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border py-4 pl-2 lg:w-1/2"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              cols="30"
              rows="3"
              className="border py-4 pl-2"
              required
            ></textarea>
            <button onClick={handleClick} type="submit" className="border py-4 text-white btn bg-blue-500 hover:bg-blue-700">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
