import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-full h-[80vh] overflow-hidden bg-[rgba(2,_23,_109,_0.656)]">
      <video
        className="top-[0] left-[0] w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source
          src="https://res.cloudinary.com/dny7tqd0d/video/upload/v1720457608/Circuit-27725_xvfck7.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-center text-[white] pt-48 ">
        <h1 className="">
          We provide comprehensive IT solutions that makes businesses standout
        </h1>
        <p className="">
          We’re a team of IT experts who help you transform and scale your
          organization
        </p>
        <button className="">
          <span className="text-[1.5rem]">
            {/* <FaArrowRight className="text-sm absolute  " /> */}
          </span>{" "}
         IT SOLUTIONS AND SERVICES
        </button>
      </div>
    </div>
  );
};

export default Home;
