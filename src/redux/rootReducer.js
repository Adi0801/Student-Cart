//As we have many reducer we want parent reducer
import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productData } from "./ProductReducer";

//here we are combining all the reducer
//this we have to attach with store
export default combineReducers({
  cartData,
  productData,
});
