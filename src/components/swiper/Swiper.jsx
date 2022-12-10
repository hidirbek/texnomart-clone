// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper.css";
import imgSrc from "../../JSON/swiper-icons.json";

// import required modules
import { Navigation } from "swiper";

const SwiperFunc = () => {
  return (
    <>
      <Swiper
        slidesPerView={8}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          270: {
            slidesPerView: 1,
          },
          340: {
            slidesPerView: 2,
          },
          550: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 6,
          },
          1200: {
            slidesPerView: 8,
          },
        }}
        className="swipper wrapper sponsor-cards"
      >
        {imgSrc.map((el, index) => {
          return (
            <SwiperSlide className="sponsorSlide" key={index}>
              <div className="sponsor-card-wrapper">
                <img className="sponsors-img" src={el.src} alt="img" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperFunc;
