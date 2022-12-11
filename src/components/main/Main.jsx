import React from "react";
import Banner from "../hero-banner/HeroBanner";
import Swiper from "../swiper/Swiper";
import CategorySwiper from "../category-swiper/CategorySwiper";
import ZorNarx from "../zor-narx/ZorNarx";
import NewProductsSwiper from "../new-product-swiper/NewProductsSwiper"
import XitSales from "../xit-salesSwiper/XitSales";


const Main = () => {
  return (
    <div>
      <Banner />
      <Swiper />
      <CategorySwiper />
      <ZorNarx/>
      <NewProductsSwiper/>
      <XitSales/>
    </div>
  );
};

export default Main;
