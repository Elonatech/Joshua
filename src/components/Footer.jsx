import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope
} from "react-icons/fa";
import { IoMdArrowDropright, IoMdArrowDropup } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
 
  const [expandedItems, setExpandedItems] = useState({
    digitalServices: false,
    cloudServices: false,
    networkingServices: false,
    certifiedTraining: false
  });


  const toggleExpand = (item) => {
    setExpandedItems({
      ...expandedItems,
      [item]: !expandedItems[item]
    });
  };

  return (
    <footer className="w-full min-h-[70vh] flex justify-stretch bg-[#0a0e27] text-[#ffffff] p-[20px]">
      <div className="flex-[1] mx-[10px] my-[0] p-[20px] bg-[#1a2238] rounded-[10px] h-[fit-content]">
        <img
          src="https://speedlinkng.com/wp-content/uploads/2022/09/speedlink-logo-footer.png"
          alt="Speedlink Logo"
          className="w-[200px] mb-[15px] ml-[35px]"
        />
        <p>
          Providing ICT solutions that make businesses stand out. We can provide
          you with the highest levels of technical expertise, strategic
          thinking, and hands-on skills.
        </p>
      </div>
      <div className="flex-[1] mx-[10px] my-[0] p-[40px] bg-[#1a2238] rounded-[10px] h-[fit-content]">
        <h3 className="">Services</h3>
        <ul className="list-none p-0">
          <li
            className={` font-normal cursor-pointer ${
              expandedItems.digitalServices
                ? "h-auto opacity-100 mx-[0] my-[10px]"
                : ""
            }`}
            onClick={() => toggleExpand("digitalServices")}
          >
            {expandedItems.digitalServices ? (
              <IoMdArrowDropup className="mr-[10px] [transition:transform_0.3s_ease]" />
            ) : (
              <IoMdArrowDropright className="mr-[10px] [transition:transform_0.3s_ease]" />
            )}
            Digital Services
          </li>
          <hr
            className={
              expandedItems.digitalServices
                ? "h-auto opacity-100 mx-[0] my-[10px]"
                : ""
            }
          ></hr>
          <li
            className={`font-normal cursor-pointer${
              expandedItems.cloudServices
                ? "h-auto opacity-100 mx-[0] my-[10px]"
                : ""
            }`}
            onClick={() => toggleExpand("cloudServices")}
          >
            {expandedItems.cloudServices ? (
              <IoMdArrowDropup className="[transition:transform_0.5s_ease]" />
            ) : (
              <IoMdArrowDropright className=" [transition:transform_0.5s_ease]" />
            )}
            Cloud Services
          </li>
          <hr
            className={
              expandedItems.cloudServices
                ? "h-auto opacity-100 mx-[0] my-[10px]"
                : ""
            }
          ></hr>
          <li
            className={`font-normal cursor-pointer ${
              expandedItems.networkingServices
                ? "h-auto opacity-100 mx-[0] my-[10px]"
                : ""
            }`}
            onClick={() => toggleExpand("networkingServices")}
          >
            {expandedItems.networkingServices ? (
              <IoMdArrowDropup className="mr-[10px] [transition:transform_0.3s_ease]" />
            ) : (
              <IoMdArrowDropright className="mr-[10px] [transition:transform_0.3s_ease]" />
            )}
            Networking Services
          </li>
          <hr
            className={
              expandedItems.networkingServices
                ? "h-auto opacity-100 mx-[0] my-[10px]"
                : ""
            }
          ></hr>
          <li
            className={`font-normal cursor-pointer ${
              expandedItems.certifiedTraining
                ? "h-auto opacity-100 mx-[0] my-[10px]"
                : ""
            }`}
            onClick={() => toggleExpand("certifiedTraining")}
          >
            {expandedItems.certifiedTraining ? (
              <IoMdArrowDropup className="mr-[10px] [transition:transform_0.3s_ease]" />
            ) : (
              <IoMdArrowDropright className="mr-[10px] [transition:transform_0.3s_ease]" />
            )}
            Certified Training
          </li>
          <hr
            className={
              expandedItems.certifiedTraining
                ? "h-auto opacity-100 mx-[0] my-[10px]"
                : ""
            }
          ></hr>
        </ul>
      </div>
      <div className="flex-[1] mx-[10px] my-[0] p-[10px] bg-[#1a2238] rounded-[10px] h-[fit-content]">
        <h3>Quick Links</h3>
        <ul className="list-none p-0">
          <li className="font-bold cursor-pointer before:text-[#ffffff] before:inline-block before:w-[1em] before:-ml-[1em]">
            {" "}
            <IoMdArrowDropright className="mr-[10px] [transition:transform_0.3s_ease] " />{" "}
            Our Products
          </li>
          <li className="font-bold cursor-pointer before:text-[#ffffff] before:inline-block before:w-[1em] before:-ml-[1em]">
            {" "}
            <IoMdArrowDropright className="mr-[10px] [transition:transform_0.3s_ease]" />{" "}
            Case Studies
          </li>
          <li className="font-bold cursor-pointer before:text-[#ffffff] before:inline-block before:w-[1em] before:-ml-[1em]">
            {" "}
            <IoMdArrowDropright className="mr-[10px] [transition:transform_0.3s_ease]" />{" "}
            Who we are
          </li>
          <li className="font-bold cursor-pointer before:text-[#ffffff] before:inline-block before:w-[1em] before:-ml-[1em]">
            {" "}
            <IoMdArrowDropright className="mr-[10px] [transition:transform_0.3s_ease]" />{" "}
            Why choose us
          </li>
          <li className="font-bold cursor-pointer before:text-[#ffffff] before:inline-block before:w-[1em] before:-ml-[1em]">
            {" "}
            <IoMdArrowDropright className="mr-[10px] [transition:transform_0.3s_ease]" />{" "}
            What we do
          </li>
          <li className="font-bold cursor-pointer before:text-[#ffffff] before:inline-block before:w-[1em] before:-ml-[1em]">
            {" "}
            <IoMdArrowDropright className="mr-[10px] [transition:transform_0.3s_ease]" />{" "}
            Meet our Team
          </li>
        </ul>
      </div>
      <div className="flex-[1] mx-[10px] my-[0] p-[20px] bg-[#1a2238] rounded-[10px] h-[fit-content]">
        <h3>Locate us</h3>
        <address className="">
          Road 6 Extension, Okey Wali Estate, Rumualoglu, Port Harcourt, Rivers
          State
        </address>
        <p className="w-[250px] bg-[#4b4f58] rounded-[5px] flex items-center justify-between p-2 m-1">
          <FaPhoneAlt className="text-[1.5rem]" /> +2349167716220
        </p>
        <p className="w-[250px] bg-[#4b4f58] rounded-[5px] flex items-center justify-between p-2 m-1">
          <FaEnvelope className="text-[1.5rem]" /> admin@speedlinkng.com
        </p>
        <div className="flex justify-between w-[150px] mt-[15px]">
          <FaFacebookF className="border rounded-sm bg-[#4b4f58] border-bg-[4b4f548]" />
          <FaTwitter className="border rounded-sm bg-[#4b4f58] border-bg-[4b4f548]" />
          <FaYoutube className="border rounded-sm bg-[#4b4f58] border-bg-[4b4f548]" />
          <FaInstagram className="border rounded-sm bg-[#4b4f58] border-bg-[4b4f548]" />
          <FaLinkedinIn className="border rounded-sm bg-[#4b4f58] border-bg-[4b4f548]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
