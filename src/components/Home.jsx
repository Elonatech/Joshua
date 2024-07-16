import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";


const Home = () => {
  return (
    <div className="p-2">
      <div className="overlay">
        <video className="object-cover h-[600px] w-[screen] " autoPlay loop muted>
          <source
            src="https://res.cloudinary.com/dny7tqd0d/video/upload/v1720457608/Circuit-27725_xvfck7.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="content space-y-2">
        <h1 className="font-bold text-5xl">
          We Provide Comprehensive IT solutions that makes businesses stand out{" "}
        </h1>
        <p className="text-xl">
          We are a team of IT experts who help you transform and scale your
          organizations{" "}
        </p>
       
          <button className="m-10 p-5 border bg-blue-400 rounded-md border-blue-400 flex items-center font-bold">
          <HiOutlineArrowSmRight size={20} />
          IT Solutions and Services
          </button>
        
      </div>
    </div>
  );
};

export default Home;
