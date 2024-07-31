import React from "react";

const Industries = () => {
  return (
    <div className="p-4 lg:p-40 ">
      <div className=" text-start md:px-40">
        <span className="font-bold text-4xl ">Industries We Serve</span>
        <p>
          Perfect Blend of Innovation & Ideation Of Solutions For Every
          Industry.{" "}
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 ">
        <div className="hover:scale-110 duration-500 m-5 borderflex flex-col items-center border-[#ffffff] shadow-lg bg-[#ffffff] rounded-md ">
          <img
            src="https://speedlinkng.com/wp-content/uploads/2022/08/online-shop.png"
            alt=""
            className="w-12 h-12 p-2 object-cover flex justify-center"
          />
          <span className="p-2 ">Retail, E-commerce</span>
        </div>
        <div className=" border hover:scale-110 duration-500 m-5 flex flex-col items-center shadow-lg bg-[#ffffff] rounded-md ">
          <img
            src="https://speedlinkng.com/wp-content/uploads/2022/08/elearning.png"
            alt=""
            className="w-12 h-12 p-2 object-cover"
          />
          <span className="p-2">Education and e-learning</span>
        </div>
        <div className="p-4 border  hover:scale-110 duration-500  m-5 flex flex-col items-center bg-[#ffffff] shadow-lg rounded-md ">
          <img
            src="https://speedlinkng.com/wp-content/uploads/2022/08/fitness.png"
            alt=""
            className="w-12 h-12 p-2 object-cover"
          />
          <span className="p-2 sm:p-4">Health & fitness</span>
        </div>
        <div className="p-4  hover:scale-110 duration-500 border m-5 flex flex-col items-center bg-[#ffffff] shadow-lg rounded-md ">
          <img
            src="https://speedlinkng.com/wp-content/uploads/2022/08/global-network.png"
            alt=""
            className="w-12 h-12 p-4 object-cover"
          />
          <span className="p-2 sm:p-4">Social Networking</span>
        </div>
        <div className="p-4  hover:scale-110 duration-500 border m-5 flex flex-col items-center shadow-lg bg-[#ffffff] rounded-md ">
          <img
            src="https://speedlinkng.com/wp-content/uploads/2022/08/logistics.png"
            alt=""
            className="w-12 h-12 p-2 object-cover"
          />
          <span className="p-2 ">Logistics & distribution</span>
        </div>
        <div className="p-4  hover:scale-110 duration-500 border mt-5 mx-5 flex flex-col items-center justify-center shadow-lg bg-[#ffffff] rounded-md ">
          <img
            src="https://speedlinkng.com/wp-content/uploads/2022/08/enterprise.png"
            alt=""
            className="w-12 h-12 p-2 object-cover"
          />
          <span className="p-2 ">Government Instituition</span>
        </div>
        <div className="p-4  hover:scale-110 duration-500 border mt-5 mx-5 flex flex-col items-center bg-[#ffffff] shadow-lg rounded-md ">
          <img
            src="https://speedlinkng.com/wp-content/uploads/2022/08/solution.png"
            alt=""
            className="w-12 h-12 p-2 object-cover"
          />
          <span className="p-2">On-Demand Solutions</span>
        </div>
        <div className="p-4  hover:scale-110 duration-500 border mt-5 mx-5 flex flex-col items-center bg-[#ffffff] shadow-lg rounded-md ">
          <img
            src="https://speedlinkng.com/wp-content/uploads/2022/08/real-estate.png"
            alt=""
            className="w-12 h-12 p-2 object-cover"
          />
          <span className="p-2">Real Estate</span>
        </div>
        <div className="p-4 border  hover:scale-110 duration-500 mt-5 mx-5 flex flex-col items-center bg-[#ffffff] shadow-lg rounded-md ">
          <img
            src="https://speedlinkng.com/wp-content/uploads/2022/08/room-service.png"
            alt=""
            className="w-12 h-12 p-2 object-cover"
          />
          <span className="p-2">Travel & Hospitality</span>
        </div>
        <div className="p-4  hover:scale-110 duration-500 border mt-5 mx-5 flex flex-col items-center bg-[#ffffff] shadow-lg  rounded-md ">
          <img
            src="https://speedlinkng.com/wp-content/uploads/2022/08/restaurant-1.png"
            alt=""
            className="w-12 h-12 p-2 object-cover"
          />
          <span className="p-2 ">Food & Restaurant</span>
        </div>
      </div>
    </div>
  );
};

export default Industries;
