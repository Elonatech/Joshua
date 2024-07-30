import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { GoDotFill } from "react-icons/go";
import { BsDashLg } from "react-icons/bs";

const Technology = () => {
  return (
    <div className="bg-[#333] p-[12rem] text-white text-center">
      <h2 className="text white p-2 m-2 font-semibold text-xl">Technology stack</h2>
      
        <GoDotFill className="text-[rgb(12, 91, 210)]" />
        <GoDotFill className="text-[rgb(12, 91, 210)]" />
        <GoDotFill className="text-[rgb(12, 91, 210)]" />
        <BsDashLg className="text-[4rem] align-bottom text-blue-400" />

        
 
     
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000 }}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 20
          }
        }}
        className="w-[1200px] m-auto flex justify-between items-center gap-5 "
      >
        <SwiperSlide>
          <img
            src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/c-sharp-icon-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png"
            alt="C# Icon"
            className="w-12 h-12"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/android-logo-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png"
            alt="Android Icon"
            className="w-12 h-12"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/postgre-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png"
            alt="PostgreSQL Icon"
            className="w-12 h-12"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/Node-Js-Logo-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png"
            alt="Node.js Icon"
            className="w-12 h-12"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/Gulp-logo-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png"
            alt="Gulp Icon"
            className="w-12 h-12"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/React-icon-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png"
            alt="React Icon"
            className="w-12 h-12"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/css-3-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png"
            alt="CSS Icon"
            className="w-12 h-12"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/python-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png"
            alt="Python Icon"
            className="w-12 h-12"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/php-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png"
            alt="PHP Icon"
            className="w-12 h-12"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Technology;
