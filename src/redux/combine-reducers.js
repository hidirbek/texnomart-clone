import { combineReducers } from "redux";
import { cartNum, carts } from "./reducer";
const combined = combineReducers({
  cartInfo: carts,
  amountInfo: cartNum,
});
export { combined };
