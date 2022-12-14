import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./ZorNarx.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsHeart, BsCart3 } from "react-icons/bs";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";

import axios from "axios";

const ZorNarx = () => {
  const [productData, setProductData] = useState([]);

  const [cartNum, setCartNum] = useState(1);
  const [productNum, setProductNum] = useState(1);
  const dispatchs = useDispatch();

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products/")
      .then((data) => setProductData(data.data));
  }, []);

  // console.log(productData);

  return (
    <div className="container">
      <h2 className="section-title zor-narx-title">Зўр нарх</h2>
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
            580: {
              slidesPerView: 3,
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
          {productData.slice(0, 10).map(({ id, images, title, price }) => {
            return (
              <SwiperSlide className="product-slide" key={id}>
                <Link className="product-card-link" to={`${id}`}>
                  <div className="productCard-wrapper">
                    <img className="product-img" src={images} alt="img" />
                    <p className="product-title">{title}</p>
                    <p className="product-price">{price}$</p>
                  </div>
                    </Link>
                  <div className="card-elements-wrapper">
                    <div
                      onClick={() => {
                        setCartNum(cartNum + productNum);
                        setProductNum(1);
                        dispatchs({
                          info: {title, images, price},
                          type: "ADD_TO_CART",
                          number: cartNum,
                          state: true,
                        });
                      }}
                      className="cart-wrapper"
                    >
                      <BsCart3 /> <span className="cart-text">Саватчага</span>
                    </div>
                    <BsHeart className="card-like-icon" />
                    <FaBalanceScaleLeft className="card-balance-icon" />
                  </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ZorNarx;
