import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
  EffectCoverflow, Pagination, Navigation
} from 'swiper/core';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const MainSwiper = ({ components }) => {
  return (
    <div className="main-slider">
      <Swiper
        effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
          "rotate": 50,
          "stretch": 300,
          "depth": 500,
          "modifier": 1,
          "slideShadows": false
        }}
        pagination={true}
        navigation={true}
        loop={true}
      >
        {components.map((elm, idx) => {
          return <SwiperSlide key={idx}>{elm}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
}

export default MainSwiper;

