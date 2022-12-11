import "./BottomNavbar.css"
import { BsHeart, BsCart3 } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { FaBalanceScaleLeft } from "react-icons/fa";
const BottomNavbar = () => {
  return (
    <div className='bottom-navbar-media'>
      <div className=" bottom-navbar-items ">
        <img className="catalog-icon" src="https://texnomart.uz/_nuxt/img/mobile-category2.7e3ae65.svg" alt="" />
        <p className="icon-title">Каталог</p>
      </div>
      <div className="bottom-navbar-items">
        <FaBalanceScaleLeft className="bottom-navbar-icons"/>
        <p className="icon-title">Таққослаш</p>
      </div>
      <div className="bottom-navbar-items">
        <BsCart3 className="bottom-navbar-icons"/>
        <p className="icon-title">Саватча</p>
      </div>
      <div className="bottom-navbar-items">
        <BsHeart className="bottom-navbar-icons"/>
        <p className="icon-title">Севимлилар</p>
      </div>
      <div className="bottom-navbar-items">
        <IoPersonOutline className="bottom-navbar-icons"/>
        <p className="icon-title">Кириш</p>
      </div>
    </div>
  )
}

export default BottomNavbar