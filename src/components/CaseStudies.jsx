import React from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const CaseStudies = () => {
  return (
    <div className="p-2  lg:p-60">
      <h1 className="font-bold text-3xl md:text-6xl ">Case Studies</h1>
      <div className="sm:flex p-2 lg:place-items-end lg:justify-between items-center" >
        <span
          className="w-1/2 
        "
        >
          We’re proud to have helped build innovative solutions solving complex
          problems across varying industries. Check out what we’ve been up to.
        </span>
        <button className="flex h-10 w-60 border bg-[#ef1821] hover:bg-[#0274be] my-2 text-white p-2 rounded-md items-center justify-between">
          See more of our works <FaPaperPlane />
        </button>
      </div>
      <div className="column-1 lg:flex items-center lg:py-10">
        <div className="p-10 w-[100%] h-full bg-transparent bg-gradient-to-b from-[#F9EDED] to-[#F8CCD7] rounded-lg ">
          <div className="">
            <h1 className="text-3xl font-bold py-4">
              Integration of a secured and reliable examination platform
            </h1>
            <span className="mt-4 tracking-tighter text-sm">
              We built a hitch-free proctoring software for the School of Public
              Health, University of Port Harcourt that offers students and test
              takers the freedom to take a proctored exam at any time in any
              given location…
            </span>
          </div>
          <button className="border p-2 bg-black text-white font-bold flex items-center justify-between">
            View Case study <IoIosArrowForward />
          </button>
        </div>

        <div className="img w-[100%] mt-2">
          <img
            src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/pexels-christina-morillo-1181244-qlr0q7d26yjle1wxvxacrmfqfvrovgbuxrrizsl79c.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="column-2 lg:p-20 lg:flex items-center md:py-10">
        <div className="img w-[100%] mb-2">
          <img src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/training-comressesd-scaled-qlr0q7d26yjle1wxvxacrmfqfvrovgbuxrrizsl79c.webp" />
        </div>
        <div className="p-20 w-[100%] bg-transparent bg-gradient-to-b from-[rgb(228,247,252)] to-[rgb(183,229,241)] rounded-lg h-full">
          <div className="">
            <h1 className="text-3xl font-bold py-4">
              Hybrid Learning Facility
            </h1>
            <span className="mt-4 tracking-tighter text-sm">
              We developed a platform that can accommodate students who are
              unable to attend classes in person while also allowing students to
              attend classes in person or remotely with real-time audio and
              visual communication….
            </span>
          </div>
          <button className="border py-2 bg-black text-white font-bold flex items-center justify-between">
            View Case study <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
