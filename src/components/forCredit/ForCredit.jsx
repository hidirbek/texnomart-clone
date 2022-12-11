// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./ForCredit.css";

// import required modules
import { Pagination } from "swiper";

export default function ForCredit() {
  return (
    <div className="credit-section">
      <div className="container">
        <h3 className="credit-title">
          Телефонлар ва маиший техника муддатли тўловга
        </h3>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            270:{
              slidesPerView:1
            },
            1024:{
              slidesPerView:5
            }
          }}
          modules={[Pagination]}
          className="mySwiper service-swiper"
        >
          <SwiperSlide className="service-swiperSlide">
            <div className="service-item">
              <img
                src="https://texnomart.uz/_nuxt/img/installment-1.da8d77c.svg"
                alt="Муддатли тўловга сотиб олиш"
              />
              <p className="sirvice-title">Муддатли тўловга сотиб олиш</p>
              <p className="service-item-info">
                Техномартда маиший техника маҳсулотлари учун қулай онлайн тўлов
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="service-swiperSlide">
            <div className="service-item">
              <img
                className="service-item-img"
                src="https://texnomart.uz/_nuxt/img/installment-2.de0c0ae.svg"
                alt="Бепул етказиб бериш"
              />
              <p className="sirvice-title">Бепул етказиб бериш</p>
              <p className="service-item-info">
                Техномартга товарларни eтказиб бериш шартлари
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="service-swiperSlide">
            <div className="service-item">
              <img
                className="service-item-img"
                src="https://texnomart.uz/_nuxt/img/installment-3.575d98a.svg"
                alt="Маҳсулотлар учун кафолат"
              />
              <p className="sirvice-title">Маҳсулотлар учун кафолат</p>
              <p className="service-item-info">
                Техномартда маҳсулотнинг кафолати ва қайтарилиши ҳақида ҳамма
                нарсани билиб олинг
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="service-swiperSlide">
            <div className="service-item">
              <img
                className="service-item-img"
                src="https://texnomart.uz/_nuxt/img/installment-4.4086694.svg"
                alt="Бонус тизими"
              />
              <p className="sirvice-title">Бонус тизими</p>
              <p className="service-item-info">Бонус тизими</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="service-swiperSlide">
            <div className="service-item">
              <img
                className="service-item-img"
                src="https://texnomart.uz/_nuxt/img/installment-5.513f513.svg  "
                alt="Ёрдам"
              />
              <p className="sirvice-title">Ёрдам</p>
              <p className="service-item-info">Кўп бериладиган саволлар</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
