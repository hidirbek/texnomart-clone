import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./NewProducts.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsHeart, BsCart3 } from "react-icons/bs";
import { FaBalanceScaleLeft } from "react-icons/fa";

import axios from "axios";

const NewProducts = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products/")
      .then((data) => setProductData(data.data));
  }, []);

  // console.log(productData);

  return (
    <div>
      <h2 className="new-produts-title">Янги маҳсулотлар</h2>
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
              slidesPerView: 6,
            },
          }}
          className="swipper wrapper productCards"
        >
          {productData.slice(10, 14).map(({ id, images, title, price }) => {
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
                      <BsCart3 /> Саватчага
                    </div>
                    <BsHeart className="card-like-icon" />
                    <FaBalanceScaleLeft className="card-balance-icon"/>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NewProducts;
