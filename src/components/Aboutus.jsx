import React from 'react'
import Image from "../assets/img.webp"
import Image2 from "../assets/img.gif"
import {IoMdPaperPlane} from "react-icons/io"


const Aboutus = () => {
  return (
    <div className="lg:px-64  lg:pt-54 p-4 ">
      <div className="w-full text-center lg:flex lg:justify-between">
        <div className="w-full md:w-1/2 my-4  ">
          <h1 className="text-red-600 uppercase font-bold  ">
            speedlink hi-tech solutions limited
          </h1>
      
          <p>
            Speedlink Hi-Tech Solutions Limited is a Nigerian leading IT systems
            provider, known for providing clients with Enterprise world-class
            solutions addressing their local business needs. We deliver
            positive, rapid and the best return on investment “ROI” solutions
            for our customers.
          </p>
          <div className="my-4 flex items-center  text-white">
            <button className="bg-red-600 w-40 md:w-80 sm:h-16 h-15 sm:p-4 p-2 rounded-md">
              Who are we
            </button>
            <IoMdPaperPlane />
          </div>
        </div>
        <div>
          <img
            src={Image}
            className=" w-full md:w-[520px] md:h-[400px] border border-b-red-600 object-cover rounded-tl-[60px] rounded-br-[100px] rounded-tr-lg rounded-bl-lg"
            alt=""
          />
        </div>
      </div>
      <div className="lg:flex mt-20 bg-[#02176d] p-4 lg:items-center lg:justify-between w-full text-white">
        <img
          src="https://speedlinkng.com/wp-content/uploads/2024/02/pearson-vue-1.gif"
          className=" w-full md:w-[20%] object-cover border rounded-md"
          alt=""
        />
        <div className="lg:p-20 p-2 w-full lg:w-[60%] lg:gap-y-10 ">
          <h1 className="font-bold text-3xl ">
            {" "}
            Pursue Your Certification Dreams with Speedlink!
          </h1>

          <span>
            We’re excited to announce that we’re now an official Pearson VUE
            testing center! Schedule your exam today and unlock your full
            potential.
          </span>
        </div>
        <button className="bg-red-500 text-white w-full md:w-[20%] h-12  border rounded-md  border-red-500 ">
          Get in Certified{" "}
        </button>{" "}
      </div>
    </div>
  );
}

export default Aboutus