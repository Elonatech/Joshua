import React, { useState } from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import {services} from "../components/data/OfferDetails";
import { serviceDetails } from "../components/data/OfferDetails";



const Offer= () => {
  const [isActive, setIsActive] = useState("Technical Security");

  return (
    <div className="my-0 mx-auto w-[1240px] p-4">
      <h2 className="heading2">Services we offer</h2>
      <p className="">
        We offer a wide range of specialized services designed to meet your
        goals
      </p>
      <div className="flex items-center ">
        <div className="flex flex-col">
          {services.map((service) => (
            <div
              key={service}
              className={`py-5 px-12 border border-red-600 my-5 mx-0 h-auto w-[600px] rounded-r-3xl  ${
                isActive === service ? "bg-red-600 text-white" : ""
              }`}
              onMouseEnter={() => setIsActive(service)}
            >
              {service}
            </div>
          ))}
        </div>
        <div>
          <div className="flex justify-end">
            <button className="bg-red-600 text-white py-4 px-6 rounded-lg cursor-pointer">
              Who we do <BiLogoTelegram className="tel-icon" />{" "}
            </button>
          </div>
          <div className="relative px-[50px] py-[20px] rounded-[10px] text-[white] mt-[20px] ml-20 leading-[2.8em] h-full flex-col justify-between before:content-[''] before:absolute before:top-[0] before:left-[0] before:right-[0] before:bottom-[0] before:bg-[linear-gradient(to_bottom,_rgba(248,_3,_3,_0.5),_rgba(4,_15,_229,_0.7))] before:rounded-[10px]">
            <div className="relative flex flex-col justify-between h-full">
              <h3>{serviceDetails[isActive].title}</h3>
              <ul>
                {serviceDetails[isActive].description.map(
                  (item, index) => (
                    <li key={index}>
                      <IoIosArrowForward className="text-lg"/> {item}
                    </li>
                  )
                )}
              </ul>
              <button className="bg-[#30c6de] text-white text-lg py-3 px-8 mt-5 cursor rounded-md mb-1 ">
                Explore More <FaArrowRight className="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
