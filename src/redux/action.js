//import action type constant
import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./constant";

export const addToCart = (data) => {
  console.warn("action is called", data);
  //in return statement we have to pass key in type as well pass some data also for a particular reducer
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeToCart = (data) => {
  console.warn("action is called", data);
  //in return statement we have to pass key in type as well pass some data also for a particular reducer
  return {
    type: REMOVE_TO_CART,
    data,
  };
};

export const emptyCart = () => {
  //no need any data
  console.warn("action is called");
  //in return statement we have to pass key in type as well pass some data also for a particular reducer
  return {
    type: EMPTY_CART,
  };
};
