import "./Cart.css";
import { v4 as uuidv4 } from "uuid";
import { FiX } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

const Cart = ({ setCartOpen }) => {
  const dispatch = useDispatch();
  const data = useSelector((cartInfo) => cartInfo.cartInfo);
  return (
    <div className="cart-wrapper">
      <div onClick={() => setCartOpen(false)} className="cart-overlow"></div>
      <div className="cart-container">
        <FiX onClick={() => setCartOpen(false)} className="x-mark" />
        {data.map((res) => (
          // {console.log(res.cardData)}
          <div key={uuidv4()} className="cart-cards">
            <img className="cart-images" src={res.cardData.images} alt="" />
            <div className="cart-text">
              <p>{res.cardData.title}</p>
              <p>{res.cardData.price}$</p>
            <BsTrash
              onClick={() => {
                dispatch({
                  type: "DELETE_FROM_CART",
                });
              }}
            />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
