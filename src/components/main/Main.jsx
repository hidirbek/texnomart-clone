import React from "react";
import Banner from "../hero-banner/HeroBanner";
import Swiper from "../swiper/Swiper";
import CategorySwiper from "../category-swiper/CategorySwiper";
import ZorNarx from "../zor-narx/ZorNarx";
const Main = () => {
  return (
    <div>
      <Banner />
      <Swiper />
      <CategorySwiper />
      <ZorNarx/>
    </div>
  );
};

export default Main;
