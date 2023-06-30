import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
    <div className="container">  
     <div className="slider__container">
      <Swiper pagination={true} modules={[Pagination]} autoplay className="mySwiper">
        <SwiperSlide><img src="https://olcha.uz/image/original/sliders/uz/XtNuXhUD6LiATjHQxhFkGyx0xnD6PVlMSjQmOxsQJYPo2k00alKByjn3fCre.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://olcha.uz/image/original/sliders/uz/ZHQY2DVkrQ8La9xVTkVUj2l6MAzollEJ7wobMwntN5UltSelBr5Futjfc5Uy.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://olcha.uz/image/original/sliders/uz/DmG3uiVuJ1qLDQFqsaGDdDYIu95LKPX2tQktMEgHrltKnd65wQp1Haxn68Sg.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://olcha.uz/image/original/sliders/uz/eyy6zG3QDw1WhL3TxGcN9hsBr42aZ7cW5NMzDR966VEKCyOcH91r4QJAwqCM.png" alt="" /></SwiperSlide>
        <SwiperSlide><img alt="" src="https://olcha.uz/image/original/sliders/uz/treRBJNyMsz0KkM28NpvRnY6lepyKEAwrxBifeWzZkYVu5X946Dq6EFrw7Us.png" /></SwiperSlide>
      </Swiper>
      </div>
      </div>
 
    </>
  );
}