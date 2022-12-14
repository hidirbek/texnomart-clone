import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./RecentlyProducts.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useDispatch } from "react-redux";


import axios from "axios";

const RecentlyProducts = () => {
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
      <h2 className="section-title recently-products-title">Яқинда кўриб чиқилган маҳсулотлар</h2>
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
            450: {
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
          {productData.slice(10, 14).map(({ id, images, title, price }) => {
            return (
              <SwiperSlide className="product-slide" key={id}>
                <Link className="product-card-link" to={`${id}`}>
                  <div className="productCard-wrapper">
                    <img className="product-img" src={images} alt="img" />
                    <p className="product-title">{title}</p>
                    <p className="credit-price">{((price+99)/24).toFixed(4)} $ дан / 24 ой</p>
                  </div>
                </Link>
                  <div className="card-elements-wrapper">
                    <p className="product-price">{price}$</p>
                    <div onClick={() => {
                        setCartNum(cartNum + productNum);
                        setProductNum(1);
                        dispatchs({
                          info: {title, images, price},
                          type: "ADD_TO_CART",
                          number: cartNum,
                          state: true,
                        });
                      }} className="cart-wrapper">
                      <BsCart3 />
                    </div>
                  </div>
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

export default RecentlyProducts;
