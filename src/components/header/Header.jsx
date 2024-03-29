import React from "react";
import { useState } from "react";
import c from "./Header.module.css";
import HeaderTop from "../headerTop/HeaderTop";
import searchCategories from "../../JSON/dummy-searchCategories.json";
import SubHeader from "../subHeader/SubHeader";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMicrophone } from "react-icons/hi";
import { BsBoxSeam, BsHeart, BsCart3 } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from 'react-redux';

const Header = ({ setIsSidebarOpen,setLoginOpen, setCartOpen }) => {
  const [selectedOption, setSelectedOption] = useState("барча категориялар");
  const productNumInCart = useSelector(amountInfo => amountInfo.amountInfo.products)
  return (
    <header>
      <HeaderTop />
      <div className={c.container}>
        <div className={c.headerElements}>
          <div className={c.headerWrapper}>
            <div className={c.texnomart__sidebar}>
              <div
                className={c.headerCenter__sidebar}
                onClick={() => {
                  setIsSidebarOpen(true);
                }}
              >
                <GiHamburgerMenu className={c.headerCenterSidebar__icons} />
              </div>
            </div>
            <div className={c.logoWrapper}>
              <a href="/" className={c.logo__link}>
                <img
                  src="https://texnomart.uz/_nuxt/img/texnomart-logo.a75bf76.svg"
                  alt="site-logo"
                  className={c.logo__img}
                  width="230"
                  height="38"
                />
              </a>
            </div>
            <div className={c.header__searchElements}>
              <div className={c.header__searchWrapper}>
                <select
                  defaultValue="барча категориялар"
                  className={c.search__select}
                  style={
                    selectedOption.length <= 7
                      ? { width: `${selectedOption.length * 14}px` }
                      : { width: `${selectedOption.length * 10}px` }
                  }
                  onChange={(e) => {
                    setSelectedOption(e.target.value);
                  }}
                >
                  {searchCategories.map((el) => {
                    return (
                      <option key={uuidv4()} value={el.category.toLowerCase()}>
                        {el.category}
                      </option>
                    );
                  })}
                </select>
                <input type="text" className={c.search__input} />
                <button className={c.voice__search}>
                  <HiOutlineMicrophone />
                </button>
                <button className={c.search__btn}>
                  <FiSearch />
                </button>
              </div>
            </div>
            <nav className={c.site__nav}>
              <a className={c.sitenav__links} href="/">
                <BsBoxSeam />
                <p className={c.icon__title}>Буюртма ҳолати</p>
              </a>
              <button onClick={() => setLoginOpen(true)} className={[c.sitenav__links, c.login_btn].join(' ')} >
                <IoPersonOutline />
                <p className={c.icon__title}>Кириш</p>
              </button>
              <a className={c.sitenav__links} href="/">
                <FaBalanceScaleLeft />
                <p className={c.icon__title}>Таққослаш</p>
              </a>
              <a className={c.sitenav__links} href="/">
                <BsHeart />
                <p className={c.icon__title}>Севимлилар</p>
              </a>
              <button onClick={()=>{setCartOpen(true)}} id={c.cart__btn} className={c.sitenav__links}>
                <BsCart3 />
                <p className={c.productNumInCart}>{productNumInCart}</p>
                <p className={c.icon__title}>Саватча</p>
              </button>
            </nav>
          </div>
        </div>
      </div>
      <SubHeader />
    </header>
  );
};

export default Header;
