import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./XitSales.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsHeart, BsCart3 } from "react-icons/bs";
import { FaBalanceScaleLeft } from "react-icons/fa";

import axios from "axios";

const XitSales = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products/")
      .then((data) => setProductData(data.data));
  }, []);

  // console.log(productData);

  return (
    <div className="container">
      <h2 className="section-title xit-sales-title">Хит савдо</h2>
      <div>
        <Swiper
          slidesPerView={6}
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
            380: {
              slidesPerView: 2,
            },
            580:{
              slidesPerView:3
            },
            800: {
              slidesPerView: 4,
            },
            1050: {
              slidesPerView: 5,
            },
            1300: {
              slidesPerView: 6,
            },
          }}
          className="swipper wrapper productCards"
        >
          {productData.slice(15, 25).map(({ id, images, title, price }) => {
            return (
              <SwiperSlide className="product-slide" key={id}>
                <Link className="product-card-link" to={`${id}`}>
                  <div className="productCard-wrapper">
                    <img className="product-img" src={images} alt="img" />
                    <p className="product-title">{title}</p>
                    <p className="product-price">{price}$</p>
                  </div>
                  <div className="card-elements-wrapper">
                    <div className="cart-wrapper">
                      <BsCart3 /> <span className="cart-text">Саватчага</span>
                    </div>
                    <BsHeart className="card-like-icon" />
                    <FaBalanceScaleLeft className="card-balance-icon"/>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default XitSales;
