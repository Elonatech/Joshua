import React from 'react'
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const TopNav = () => {
  return (
    <div className="hidden sm:flex bg-gradient-to-r from-[#ef1821]  to-[#0274be] h-10  justify-between">
      <div className="column1 w-1/2 p-2">
        <div className="icons flex items-center gap-4 text-white ml-28">
          <TiSocialFacebook
            className="border rounded-md border-red-500 bg-red-500 p-[2px]"
            size={20}
          />
          <TiSocialTwitter
            className="border rounded-md border-red-500  bg-red-500 p-[2px]"
            size={20}
          />
          <TiSocialLinkedin
            className="border rounded-md border-red-500 bg-red-500 p-[2px]"
            size={20}
          />
          <TiSocialInstagram
            className="border rounded-md border-red-500 bg-red-500 p-[2px]"
            size={20}
          />
        </div>
      </div>
      <div className="column2 text-white flex items-center gap-4 mr-24 p-4">
        <div className="flex justify-between items-center gap-4 border rounded-lg bg-blue-700 border-blue-700 p-1 ">
          <FaPhoneAlt size={20} />
          <span>tel:+2347039509209</span>
        </div>
        <div className="  flex justify-between items-center gap-4 border rounded-lg bg-blue-700  border-blue-700 p-1">
          <IoMail size={20} />
          <span>info@speedlink.com</span>
        </div>
      </div>
    </div>
  );
}

export default TopNav




