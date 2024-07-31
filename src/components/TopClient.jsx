import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";


const TopClients = () => {
  return (
    <div className="lg:px-40 lg:p-20 text-center">
      <h2 className="mb-5 font-bold">Our Top Clients</h2>

      <p className="m-2 p-2 font-semibold text-xl">Meet our happy clients</p>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 100 }}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }}
      >
        <SwiperSlide>
          <img
            className=" w-40 h-auto"
            src="https://speedlinkng.com/wp-content/uploads/2022/09/redeemers-high-school.png"
            alt="Laser Engineering and Resources Consultants Limited"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className=" w-40 h-auto"
            src="https://speedlinkng.com/wp-content/uploads/2022/09/primerose-highschool.png"
            alt="CGRP, University of Port Harcourt"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className=" w-40  h-auto"
            src="https://speedlinkng.com/wp-content/uploads/2022/09/SPH-LOGO.png"
            alt="Foundation for Agric and Social Transformation"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-40 h-auto"
            src="https://speedlinkng.com/wp-content/uploads/2022/09/cefor-logo.png"
            alt="Primerose High School"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-40 h-auto"
            src="https://speedlinkng.com/wp-content/uploads/2022/09/cgrp-logo.png"
            alt="Primerose High School"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-40 h-auto"
            src="https://speedlinkng.com/wp-content/uploads/2022/09/laser-engineering-2.png"
            alt="Primerose High School"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-40 h-auto"
            src="https://speedlinkng.com/wp-content/uploads/2022/09/FAST-LOGO.png"
            alt="Primerose High School"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopClients;








  
  
  
  
