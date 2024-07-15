import React from 'react'
import Logo from "../assets/logo.png"
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";


const MainNav = () => {
  return (
    <div className="h-[126.922px flex justify-between">
      <div className="logo w-1/4  ml-24 p-4">
        <img src={Logo} alt="img" />
      </div>
      <div className="nav-section flex items-center justify-between w-3/4 p-4 gap-2 mx-auto">
        <span className="text-lg font-bold gap-2">Home</span>
        <div className="dropdown-nav flex justify-between items-center">
          <span>About us</span>
          <RiArrowDropDownLine />
        </div>
        <div className="dropdown-nav flex justify-between items-center">
          <span>Case Study</span>
          <RiArrowDropDownLine />
        </div>
        <div className="dropdown-nav flex justify-between items-center">
          <span>Products</span>
          <RiArrowDropDownLine />
        </div>
        <div className="dropdown-nav flex justify-between items-center">
          <span>Resources</span>
        </div>
        <FaSearch size={15} />
       <button className="bg-red-500 text-white p-4 ml-[20px] border rounded-md ">
        Get in touch
       </button>
      </div>
    </div>
  );
}

export default MainNav