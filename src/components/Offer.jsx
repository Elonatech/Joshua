import React, { useState } from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { services } from "../components/data/OfferDetails";
import { serviceDetails } from "../components/data/OfferDetails";

const Offer = () => {
  const [isActive, setIsActive] = useState("IT Services");

  return (
    <div className="bg-[#EFEAEAA6]">
      <div className=" my-0  p-4">
        <h2 className="text-4xl py-4 font-bold">Services we offer</h2>
        <p className="py-2">
          We offer a wide range of specialized services designed to meet your
          goals
        </p>
        <div className="lg:flex lg:items-stretch lg:justify-around">
          <div className="flex flex-col w-full">
            {services.map((service) => (
              <div
                key={service}
                className={` border p-4 border-[#ef1821] my-2 mx-0 h-auto w-full  sm:w-full rounded-r-3xl  ${
                  isActive === service ? "bg-[#ef1821] text-white" : ""
                }`}
                onMouseEnter={() => setIsActive(service)}
              >
                {service}
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-b from-[#D2060FD6] to-[#062CD1D1]  sm:flex flex-col sm:w-full">
            <div className="flex justify-around ">
              <button className=" flex justify-between items-center bg-red-600 text-white py-4 px-6 rounded-lg cursor-pointer">
                Who we do &nbsp; <BiLogoTelegram className="" />{" "}
              </button>
            </div>
            <div className="relative px-[50px] py-[20px] rounded-[10px] w-full text-[white] mt-[20px]  leading-[2.8em] h-[80%] flex-col justify-between before:content-[''] before:absolute before:top-[0] before:left-[0] before:right-[0] before:bottom-[0] before:bg-[linear-gradient(to_bottom,_rgba(248,_3,_3,_0.5),_rgba(4,_15,_229,_0.7))] before:rounded-[10px]">
              <div className="relative flex flex-col justify-between">
                <h3>{serviceDetails[isActive].title}</h3>
                <ul className="">
                  {serviceDetails[isActive].description.map((item, index) => (
                    <li className="flex items-center" key={index}>
                      <IoIosArrowForward className="text-lg" /> {item}
                    </li>
                  ))}
                </ul>
                <button className="bg-[#30c6de] flex items-center text-white text-lg py-3 px-8 mt-5 cursor rounded-md mb-1 ">
                  Explore More <FaArrowRight className="mx-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
