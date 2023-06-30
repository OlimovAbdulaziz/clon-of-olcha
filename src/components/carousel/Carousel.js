import React from 'react';
import './Carousel.css';
import { Carousel } from '../../static/index';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

function Swipe() {
  return (
    <div className='Carousel__wrapper'>
      <Swiper loop={true}
          slidesPerView={9}
          navigation={true}
          modules={[Navigation]}
          spaceBetween={0}  className="mySwiper">
        {Carousel.map((item, index) => (
          <SwiperSlide className='swiper' key={index}>
            <img src={item.name} alt="" />
            <h4>{item.title}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Swipe;