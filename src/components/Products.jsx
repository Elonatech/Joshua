import React from 'react'

const Products = () => {
  return (
    <div className="p-4 lg:p-64  bg bg-gradient-to-b from-[#0627AD] to-[#CD2C32] h-full ">
      <div className="heading text-white flex flex-col items-center justify-center">
        <h1 className="font-bold">Our Products</h1>
        <h1 className="font-bold text-2xl">
          Comprehensive IT SOLUTION that sets your business apart
        </h1>
        <span>Bringing speed to your business</span>
      </div>
      
      <div className="hover:scale-105 duration-500 grid grid-cols-1 md:grid-cols-3 p-8 gap-4 ">
        <img
          className=" object-cover md:p-4"
          src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/lms-qlr0q7d82s1a0jmzxozozufvp8cxd3sbadz8bxwby8.jpg"
          alt=""
        />

        <img
          className="hover:scale-105 duration-500 object-cover md:p-4"
          src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/lms-2-qlr0q7d81go7a3ppqeq4sdjtvq6pcbuksft0eos2bk.jpg"
          alt=""
        />
        <img
          className=" hover:scale-105 duration-500 object-cover md:p-4"
          src="https://speedlinkng.com/wp-content/uploads/2022/08/erp.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Products