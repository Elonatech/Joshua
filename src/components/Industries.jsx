import React from "react";

const Industries = () => {
  return (
    <div className="p-4 lg:px-[12rem]">
      <div className=" text-start md:px-40">
        <span className="font-bold text-4xl  ">
          Industries We Serve
        </span>
        <p>
          Perfect Blend of Innovation & Ideation Of Solutions For Every
          Industry.{" "}
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:p-40  flex-col items-center justify-between">
        <div className="hover:scale-110 duration-500  border-8 m-5 flex flex-col items-center border-[#ffffff] shadow-lg bg-[#ffffff] rounded-md w-48 h-40">
          <img
            src="https://speedlinkng.com/wp-content/uploads/2022/08/online-shop.png"
            alt=""
            className="w-12 h-12"
          />
          <span>Retail, E-commerce</span>
        </div>
        <div className=" border  hover:scale-110 duration-500 m-5 flex flex-col items-center shadow-lg bg-[#ffffff] rounded-md w-48 h-40">
          <img
            src="https://speedlinkng.com/wp-content/uploads/2022/08/elearning.png"
            alt=""
            className="w-12 h-12"
          />
          <span>Education and e-learning</span>
        </div>
        <div className="p-4 border  hover:scale-110 duration-500  m-5 flex flex-col items-center bg-[#ffffff] shadow-lg rounded-md w-48 h-40">
          <img
            src="https://speedlinkng.com/wp-content/uploads/2022/08/fitness.png"
            alt=""
            className="w-12 h-12"
          />
          <span>Health & fitness</span>
        </div>
        <div className="p-4  hover:scale-110 duration-500 border m-5 flex flex-col items-center bg-[#ffffff] shadow-lg rounded-md w-48 h-40">
          <img
            src="https://speedlinkng.com/wp-content/uploads/2022/08/global-network.png"
            alt=""
            className="w-12 h-20"
          />
          <span>Social Networking</span>
        </div>
        <div className="p-4  hover:scale-110 duration-500 border m-5 flex flex-col items-center shadow-lg bg-[#ffffff] rounded-md w-48 h-40">
          <img
            src="https://speedlinkng.com/wp-content/uploads/2022/08/logistics.png"
            alt=""
            className="w-12 h-12"
          />
          <span>Logistics & distribution</span>
        </div>
        <div className="p-4  hover:scale-110 duration-500 border m-5 flex flex-col items-center shadow-lg bg-[#ffffff] rounded-md w-48 h-40">
          <img
            src="https://speedlinkng.com/wp-content/uploads/2022/08/enterprise.png"
            alt=""
            className="w-12 h-12"
          />
          <span>Government Instituition</span>
        </div>
        <div className="p-4  hover:scale-110 duration-500 border m-5 flex flex-col items-center bg-[#ffffff] shadow-lg rounded-md w-48 h-40">
          <img
            src="https://speedlinkng.com/wp-content/uploads/2022/08/solution.png"
            alt=""
            className="w-12 h-12"
          />
          <span>On-Demand Solutions</span>
        </div>
        <div className="p-4  hover:scale-110 duration-500 border m-5 flex flex-col items-center bg-[#ffffff] shadow-lg rounded-md w-48 h-40">
          <img
            src="https://speedlinkng.com/wp-content/uploads/2022/08/real-estate.png"
            alt=""
            className="w-12 h-12"
          />
          <span>Real Estate</span>
        </div>
        <div className="p-4 border  hover:scale-110 duration-500 m-5 flex flex-col items-center bg-[#ffffff] shadow-lg rounded-md w-48 h-40">
          <img
            src="https://speedlinkng.com/wp-content/uploads/2022/08/room-service.png"
            alt=""
            className="w-12 h-12"
          />
          <span>Travel & Hospitality</span>
        </div>
        <div className="p-4  hover:scale-110 duration-500 border m-5 flex flex-col items-center bg-[#ffffff] shadow-lg    rounded-md w-48 h-40">
          <img
            src="https://speedlinkng.com/wp-content/uploads/2022/08/restaurant-1.png"
            alt=""
            className="w-12 h-12"
          />
          <span>Food & Restaurant</span>
        </div>
      </div>
    </div>
  );
};

export default Industries;
