import { PRODUCT_LIST } from "./constant";

//here we want to use api data we must use saga or thung which a middleware handle promises ,as it only handle plain data
// export const productList = async () => {
//   let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   data = await data.json();
//   console.warn("action is called", data);
//   //in return statement we have to pass key in type as well pass some data also for a particular reducer
//   return {
//     type: PRODUCT_LIST,
//     data,
//   };

//this code added after saga file careated
//here no need async keywod as all the processing code move to saga calling function ,based upon this action type it process
export const productList = () => {
  //in return statement we have to pass key in type as well pass some data also for a particular reducer and saga
  return {
    type: PRODUCT_LIST,
    data: "hello", //no need for that here as saga handles it
  };
};

//for search box

export const productSearch = (query) => {
  return {
    type: PRODUCT_LIST,
    query, //this is pass to saga
  };
};
