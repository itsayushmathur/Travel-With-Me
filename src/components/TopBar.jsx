import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";
const TopBar = () => {
  return (
    <div className="flex justify-between item-center px-4 py-2">
      <div className="flex items-center">
        <BsChatSquareDots
          size={30}
          className="text-[var(--primary-dark)] mr-2"
        />
        <h1 className="text-xl dont-bold text-gray-700">Travel With Me</h1>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]'/>
          <p className="text-sm text-gray-700">9AM -5PM</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]'/>
          <p className="text-sm text-gray-700">+91 9889-245-681</p>
        </div>
        <button>Get a Free Quote</button>
      </div>
    </div>
  );
};

export default TopBar;
