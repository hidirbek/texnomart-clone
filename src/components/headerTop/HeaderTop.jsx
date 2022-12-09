import { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineGlobe } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import "./HeaderTop.css";
import regionName from "../../JSON/dummy-regions.json";
import { v4 as uuidv4 } from 'uuid';

function HeaderTop() {
  const [regionValue, setRegionValue] = useState("Тошкент");
  const [languageValue, setLanguageValue] = useState("Ўз");

  return (
    <div className="header-top">
      <div className="header-top-content">
        <div className="header-top-left-content">
          <div className="header-region-div">
            <div className="header-region-div">
              <SlLocationPin className="location-icons" />
              <p className="regionValue">{regionValue}</p>
            </div>
            <div className="header-region-value">
              {regionName.map((data) => (
                <p key={uuidv4()}
                  className="header-top-data-text"
                  onClick={() => setRegionValue(data.region)}
                >
                  {data.region}
                </p>
              ))}
            </div>
          </div>
          <ul className="header-top-navbar">
            <li className="header-top-navbar-list">Bizning do'konlarimiz</li>
            <li className="header-top-navbar-list B2B">B2B savdosi</li>
            <li className="header-top-navbar-list">
              Muddatli to'lovga sotib olish
            </li>
            <li className="header-top-navbar-list">To'lov usullari</li>
            <li className="header-top-navbar-list">
              Mahsulotlar uchun kafolat
            </li>
          </ul>
        </div>
        <img
          className="headerTop-media-logo"
          src="https://texnomart.uz/_nuxt/img/texnomart-logo.a75bf76.svg"
          alt="site-logo"
        />
        <div className="header-top-right">
          <a href="tel:+998712099944">
            <div className="header-top-contact">
              <span className="contact-name">Aloqa markazi :</span>
              <BsTelephone className="call-icon-media" />
              <p className="contact-nommer">+99871 209 99 44</p>
            </div>
          </a>
          <div className="header-top-language-div">
            <div className="header-top-language">
              <HiOutlineGlobe className="language-global-icons" />
              <p className="language-global-value">{languageValue}</p>
              <IoIosArrowDown className="language-arrow-icons" />
            </div>
            <div className="language-hover-value">
              <p
                className="language-hover-value-list"
                onClick={() => setLanguageValue("Ру")}
              >
                Ру
              </p>
              <p
                className="language-hover-value-list"
                onClick={() => setLanguageValue("O`z")}
              >
                O`z
              </p>
            </div>
          </div>
          <div className="header-region-div-media">
            <SlLocationPin className="location-icons-media" />
            <p className="regionValue-media">Toshkent</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
