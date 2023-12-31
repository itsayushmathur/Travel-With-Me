import React, { useState } from "react";
// import { BsChatSquareDots } from "react-icons/bs";
import { FaBars, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full min-h-[50px] flex justify-between items-center abosulte z-10 text-white bg-[#956317]">
      <ul className="hidden sm:flex px-4">
        <li>
          {/* eslint-disable-next-line  */}
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#gallery" rel="noreferrer">
            Gallery
          </a>
        </li>
        <li>
          <a href="#booking" rel="noreferrer">
            Bookings
          </a>
        </li>
        <li>
          <a href="#contact" rel="noreferrer">
            Contact
          </a>
        </li>
      </ul>
      <div className="flex justify-between">
        <a
          href="https://www.facebook.com/AbstergoCaelum/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF className="mx-4" />
        </a>
        <a
          href="https://www.instagram.com/itsayushmathur/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="mx-4" />
        </a>
        <a
          href="https://twitter.com/its_ayushmathur"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className="mx-4" />
        </a>
      </div>
      {/* Hamburger Icon */}
      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={30} className="mr-4 cursor-pointer" />
      </div>
      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-column"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            {/* eslint-disable-next-line  */}
            <a href="#">Home</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#deals">Deals</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
