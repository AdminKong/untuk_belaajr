"use client";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";
// import file ||

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handlenav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="dark:bg-gray-50 drop-shadow-2xl">
        <div className="flex justify-between text-black items-center h-24 max-w-[1240px] mx-auto px-4 ">
          <img src="../favicon.ico" alt="servite-logo" className="h-14" />
          <h1 className="w-full font-bold text-3xl pl-4 subpixel-antialiased">
            SERVITE
          </h1>
          <ul className="hidden md:flex">
            <li className="p-4 font-bold">
              <a href="/">Home</a>
            </li>
            <li className="p-4 font-bold">
              <a href="/">Service</a>
            </li>
            <li className="p-4 font-bold">
              <a href="/">About</a>
            </li>
            <li className="p-4 font-bold">
              <a href="/">Contact</a>
            </li>
          </ul>
          <div onClick={handlenav} className="pr-5 block md:hidden">
            {!nav ? <AiOutlineMenu size={21} /> : <AiOutlineClose size={21} />}
          </div>
        </div>
      </div>
      <div
        className={
          !nav
            ? "fixed left-[-100] hidden ease-in-out duration-1000"
            : "fixed left-0 h-full top-0 w-[35%] bg-white/25 backdrop-blur-lg"
        }>
        <h1 className="w-full font-bold text-3xl m-4 p-4 text-gray-800">
          SERVITE
        </h1>
        <ul className="uppercase text-[#]">
          <li className="p-4 font-bold">
            <a href="/">Home</a>
          </li>
          <li className="p-4 font-bold">
            <a href="/">Service</a>
          </li>
          <li className="p-4 font-bold">
            <a href="/">About</a>
          </li>
          <li className="p-4 font-bold">
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
