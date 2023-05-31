import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
 
import { Pagination,Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/autoplay';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../component/SectionTitle";
function Category() {
  return (
    <div>
    <SectionTitle subHeading={'---From 11:00am to 10:00pm---'} heading={"ORDER ONLINE"}>

    </SectionTitle>
    <Swiper
         
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h1 className="text-4xl uppercase -mt-16 text-center text-white">Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide2} alt="" />
        <h1 className="text-4xl uppercase -mt-16 text-center text-white">Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} alt="" />
        <h1 className="text-4xl uppercase -mt-16 text-center text-white">Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} alt="" />
        <h1 className="text-4xl uppercase -mt-16 text-center text-white">Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide5} alt="" />
        <h1 className="text-4xl uppercase -mt-16 text-center text-white">Salads</h1>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Category