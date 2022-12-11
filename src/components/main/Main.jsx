import React from "react";
import Banner from "../hero-banner/HeroBanner";
import Swiper from "../swiper/Swiper";
import CategorySwiper from "../category-swiper/CategorySwiper";
import ZorNarx from "../zor-narx/ZorNarx";
import NewProductsSwiper from "../new-product-swiper/NewProductsSwiper";
import XitSales from "../xit-salesSwiper/XitSales";
import ToplamProducts from "../toplamlar-products/ToplamProducts";
import RecentlyProducts from "../recentlySeenProducts/RecentlyProducts";
import DownloadApp from "../downloadApp/DownloadApp";
import ForCredit from "../forCredit/ForCredit"






const Main = () => {
  return (
    <div>
      <Banner />
      <Swiper />
      <CategorySwiper />
      <ZorNarx />
      <NewProductsSwiper />
      <XitSales />
      <ToplamProducts />
      <DownloadApp />
      <ForCredit/>
      <RecentlyProducts />
    </div>
  );
};

export default Main;
