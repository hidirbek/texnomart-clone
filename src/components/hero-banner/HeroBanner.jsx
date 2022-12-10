// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HeroBanner.css";
import { v4 as uuidv4 } from 'uuid';

// import required modules
import { Pagination, Navigation } from "swiper";

export default function HeroBanner() {
  const images = [
    "https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/8794121920kr.webp",
    "https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/5247261920kr.webp",
    "https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/2617201920kr.webp"
  ];
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper hero-swiper"
      >
        {
          images.map(el=>{
            return <SwiperSlide key={uuidv4()}><img className="banner-img" src={el} alt="img" /></SwiperSlide>
          })
        }

      </Swiper>
    </>
  );
}
