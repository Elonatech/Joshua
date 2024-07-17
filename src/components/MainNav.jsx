import React from 'react'
import Logo from "../assets/logo.png"
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import  { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const MainNav = () => {
  const [menu, setMenu] = useState(false);
  const toggle = () => setMenu(!menu);

  return (
    <div className="flex  w-full h-[126.922px]">
      <div className="flex justify-between items-center  w-1/2 p-4 2xl:px-16">
        <img src={Logo} alt="img" />
      </div>
      <div className="flex items-center justify-between w-2/4 ">
        <div className="nav-section p-4 gap-2 mx-auto">
          <ul className="hidden lg:flex md:items-center ">
            <li className="relative group flex justify between items-center space-x-4 ">
              <p className="text-lg hover:text-red-500 ">Home</p>{" "}
              <div className="dropdown-nav flex justify-between items-center">
                <span>About us</span>
                <RiArrowDropDownLine />{" "}
              </div>{" "}
              <div className="dropdown-nav flex justify-between items-center">
                <span>Case Study</span>
                <RiArrowDropDownLine />{" "}
              </div>{" "}
              <div className="dropdown-nav flex justify-between items-center">
                <span>Products</span>
                <RiArrowDropDownLine />{" "}
              </div>{" "}
              <div className="dropdown-nav flex justify-between items-center">
                <span>Resources</span>{" "}
              </div>
              <FaSearch size={15} />{" "}
              <button className="bg-red-500 text-white p-4 ml-[20px] border rounded-md ">
                Get in touch{" "}
              </button>{" "}
            </li>
          </ul>

          <div onClick={toggle} className="lg:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/**menu */}

      <div
        className={
          menu ? "lg:hidden fixed left-0 top-0 w-full h-full bg-black/5" : ""
        }
      >
        <div
          className={
            menu
              ? " fixed right-0 w-[90%] sm:w-[80%] lg:[w-65%] h-full bg-[#ffff] p-10 ease-in duration-500"
              : "fixed right-[-100%] top-0 w-[80%] sm:w-[65%] md:[w-65%] h-full bg-[#ffff] p-10 ease-in duration-500"
          }
        >
          <div className="">
            <div className="w-full flex items-center justify-between">
              <input type="search" name="Search..." id="" />

              <div
                onClick={toggle}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>

          <div className="">
            <ul className="py-3 flex flex-col">
              <li className="py-4 text-sm sm:text-2xl">Home</li>
              <li className="py-4 text-sm sm:text-2xl">About us</li>
              <li className="py-4 text-sm sm:text-2xl">Home</li>
              <li className="py-4 text-sm sm:text-2xl">Home</li>
              <li className="py-4 text-sm sm:text-2xl">Home</li>
              <li className="py-4 text-sm sm:text-2xl">Home</li>
            </ul>
          </div>
          <div className="flex items-center justify-around"></div>
        </div>
      </div>
    </div>
  );
}

export default MainNav



