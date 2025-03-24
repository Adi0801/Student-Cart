//action type constant we decalred
import { act } from "react";
import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./constant";

//reducer must have to return some value
//we have to provide intial value such as data and action this action taken data from action.js file
export const cartData = (data = [], action) => {
  //based upon the type we can handle request
  //   if (action.type === ADD_TO_CART) {
  //     console.warn("reducer called", action);

  //     return data;
  //   } else {
  //     return "no action called";
  //   }

  //SWITCH STATEMET FOR BETTER READBLITY

  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD_TO_CART_REDUCER called", action);
      return [action.data, ...data]; //get data from the product and data is updated in the store
    case REMOVE_TO_CART:
      console.warn("REMOVE_TO_CART_REDUCER called", action);
      // now no need as we want item to be removed for specfic id return data.slice(0, data.length - 1); //it will remove the last data thats why returing ..data
      //now we are filter item based upon the id as we pass id in the data while clicking the button expect that id all id all filter
      const remainingItem = data.filter((item) => item.id !== action.data);
      return [...remainingItem];
    case EMPTY_CART:
      console.warn("EMPTY_CART_REDUCER called", action);
      data = [];
      return []; //here we are removing all the elemetn set data to 0
    default:
      return data;
  }
};
