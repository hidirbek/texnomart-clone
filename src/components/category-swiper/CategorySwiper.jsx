// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CategorySwiper.css";
import categorySwiper from "../../JSON/categorySwiper.json";

// import required modules
import { Navigation } from "swiper";

const CategorySwiper = () => {
  return (
    <>
      <h3 className="categoryTitle">Оммабоп категориялар</h3>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          270:{
            slidesPerView:3,
            spaceBetween : 20
          },
          400: {
            slidesPerView: 4,
          },
          600: {
            slidesPerView: 5,
          },
          750: {
            slidesPerView: 6,
          },
          875: {
            slidesPerView: 7,
          },
          900: {
            slidesPerView: 7,
            spaceBetween : 30
          },
          1022: {
            slidesPerView: 5,
          },
          1150: {
            slidesPerView: 5,
          },
          1400: {
            slidesPerView: 6,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="swipper wrapper category-swiper"
      >
        {categorySwiper.map((el, index) => {
          return (
            <SwiperSlide className="category-swiperSlide" key={index}>
              <div className="category-card">
                <img className="category-img" src={el.img} alt={el.title} />
                <p className="category-name">{el.title}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CategorySwiper;
