import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./ZorNarx.css";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const ZorNarx = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products/")
      .then((data) => setProductData(data.data));
  }, []);

  // console.log(productData);

  return (
    <div>
      <h2 className="zor-narx">Зўр нарх</h2>
      <div>
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
          className="swipper wrapper productCards"
        >
          {productData.slice(0, 10).map(({ id, images, title, price }) => {
            return (
              <SwiperSlide className="sponsorSlide" key={id}>
                <Link to={`${id}`} />
                <div className="productCard-wrapper">
                  <img className="product-img" src={images} alt="img" />
                  <p className="product-title">{title}</p>
                  <p className="product-price">{price}</p>
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
