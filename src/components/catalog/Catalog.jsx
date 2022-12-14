import React from "react";
import { useState } from "react";
import "./Catalog.css";
import catalogData from "../../JSON/dummy-catalogue.json";
import { IoIosArrowForward } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";


const Catalog = () => {
  const [catalog, setCatalog] = useState(false);
  const [catalogIdx, setCatalogIdx] = useState(0);

  return (
    <div className="catalog-wrapper" onClick={() => setCatalog(!catalog)}>
      <div className="catalog">
        {catalog ? (
          <span className="catalog-exit-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M11.1753 10.5389L15.5919 6.13056C15.7489 5.97364 15.837 5.76081 15.837 5.53889C15.837 5.31697 15.7489 5.10414 15.5919 4.94722C15.435 4.79031 15.2222 4.70215 15.0003 4.70215C14.7784 4.70215 14.5655 4.79031 14.4086 4.94722L10.0003 9.36389L5.59194 4.94722C5.43502 4.79031 5.22219 4.70215 5.00027 4.70215C4.77836 4.70215 4.56553 4.79031 4.40861 4.94722C4.25169 5.10414 4.16353 5.31697 4.16353 5.53889C4.16353 5.76081 4.25169 5.97364 4.40861 6.13056L8.82527 10.5389L4.40861 14.9472C4.3305 15.0247 4.26851 15.1169 4.2262 15.2184C4.18389 15.32 4.16211 15.4289 4.16211 15.5389C4.16211 15.6489 4.18389 15.7578 4.2262 15.8594C4.26851 15.9609 4.3305 16.0531 4.40861 16.1306C4.48608 16.2087 4.57824 16.2707 4.67979 16.313C4.78134 16.3553 4.89026 16.3771 5.00027 16.3771C5.11028 16.3771 5.21921 16.3553 5.32076 16.313C5.4223 16.2707 5.51447 16.2087 5.59194 16.1306L10.0003 11.7139L14.4086 16.1306C14.4861 16.2087 14.5782 16.2707 14.6798 16.313C14.7813 16.3553 14.8903 16.3771 15.0003 16.3771C15.1103 16.3771 15.2192 16.3553 15.3208 16.313C15.4223 16.2707 15.5145 16.2087 15.5919 16.1306C15.67 16.0531 15.732 15.9609 15.7744 15.8594C15.8167 15.7578 15.8384 15.6489 15.8384 15.5389C15.8384 15.4289 15.8167 15.32 15.7744 15.2184C15.732 15.1169 15.67 15.0247 15.5919 14.9472L11.1753 10.5389Z"
                fill="black"
              ></path>
            </svg>
          </span>
        ) : (
          <span className="catalog-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.0906 2.89307L13.0747 6.90888L17.0906 10.9247L21.1064 6.90888L17.0906 2.89307ZM11.7361 5.57028C10.9968 6.30956 10.9968 7.5082 11.7361 8.24748L15.7519 12.2633C16.4913 13.0026 17.69 13.0026 18.4292 12.2633L22.445 8.24748C23.1842 7.5082 23.1842 6.30956 22.445 5.57028L18.4292 1.55447C17.69 0.815177 16.4913 0.815177 15.7519 1.55447L11.7361 5.57028Z"
                fill="#333333"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.62575 4.06934H3.83961C3.31685 4.06934 2.89307 4.49312 2.89307 5.01588V8.80202C2.89307 9.32479 3.31685 9.74856 3.83961 9.74856H7.62575C8.1485 9.74856 8.57229 9.32479 8.57229 8.80202V5.01588C8.57229 4.49312 8.1485 4.06934 7.62575 4.06934ZM3.83961 2.17627C2.27134 2.17627 1 3.44761 1 5.01588V8.80202C1 10.3703 2.27134 11.6416 3.83961 11.6416H7.62575C9.19402 11.6416 10.4654 10.3703 10.4654 8.80202V5.01588C10.4654 3.44761 9.19402 2.17627 7.62575 2.17627H3.83961Z"
                fill="#333333"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.62575 15.4277H3.83961C3.31685 15.4277 2.89307 15.8515 2.89307 16.3743V20.1604C2.89307 20.6832 3.31685 21.107 3.83961 21.107H7.62575C8.1485 21.107 8.57229 20.6832 8.57229 20.1604V16.3743C8.57229 15.8515 8.1485 15.4277 7.62575 15.4277ZM3.83961 13.5347C2.27134 13.5347 1 14.806 1 16.3743V20.1604C1 21.7287 2.27134 23 3.83961 23H7.62575C9.19402 23 10.4654 21.7287 10.4654 20.1604V16.3743C10.4654 14.806 9.19402 13.5347 7.62575 13.5347H3.83961Z"
                fill="#333333"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.9851 15.4277H15.199C14.6762 15.4277 14.2524 15.8515 14.2524 16.3743V20.1604C14.2524 20.6832 14.6762 21.107 15.199 21.107H18.9851C19.5079 21.107 19.9317 20.6832 19.9317 20.1604V16.3743C19.9317 15.8515 19.5079 15.4277 18.9851 15.4277ZM15.199 13.5347C13.6307 13.5347 12.3594 14.806 12.3594 16.3743V20.1604C12.3594 21.7287 13.6307 23 15.199 23H18.9851C20.5534 23 21.8247 21.7287 21.8247 20.1604V16.3743C21.8247 14.806 20.5534 13.5347 18.9851 13.5347H15.199Z"
                fill="#333333"
              ></path>
            </svg>
          </span>
        )}
        Каталог
      </div>
      {catalog && (
        <div className="opened-catalog-wrapper">
          <div className="opened-catalog">
            <div className="catalog-title-box">
              {catalogData.map((el, index) => {
                return (
                  <div
                    key={index}
                    className="catalog-titles"
                    style={
                      catalogIdx === index
                        ? { backgroundColor: "rgba(251, 193, 0, .2)" }
                        : null
                    }
                    onMouseMove={() => setCatalogIdx(index)}
                  >
                    <div className="title-wrapper">
                      <img className="title-icon" src={el.img} alt={el.title} />
                      <p className="cat-title">{el.title}</p>
                    </div>
                    <IoIosArrowForward className="cat-icon" />
                  </div>
                );
              })}
            </div>
            {catalogData.map((el, index) => {
              return catalogIdx === index ? (
                <div key={index} className="catalog-elements-container">
                  <div className="catalog-elements-box">
                    <h2 className="catalog-category-title">{el.title}</h2>
                    <div className="catalog-category-subtitles-wrapper">
                      <h3 className="catalog-category-subtile">{el.category.sub__title}</h3>
                      {el.category.sub__categories.map((el) => {
                        return <p key={uuidv4()} className="category-subtitles-info">{el}</p>;
                      })}
                    </div>
                  </div>

                </div>
              ) : null;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalog;
