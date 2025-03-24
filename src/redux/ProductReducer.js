import { SET_PRODUCT_LIST } from "./constant";

//reducer must have to return some value
//we have to provide intial value such as data and action this action taken data from action.js file
export const productData = (data = [], action) => {
  //SWITCH STATEMET FOR BETTER READBLITY

  switch (action.type) {
    //NO NEED FOR PRODUCT_LIST AS THIS IS COMING FROM ACTION BUT WE ADDED SAGA WE TAKE THAT TYPE
    // case PRODUCT_LIST:
    //   console.warn("PRODUCT_LIST_REDUCER called", action);
    //   return [action.data, ...data]; //get data from the product and data is updated in the store

    //CASE FOR SAGA
    case SET_PRODUCT_LIST:
      console.warn("PRODUCT_LIST_REDUCER called", action);
      return [...action.data]; //get data from
    default:
      return data;
  }
};
