//here we are importing takeevery fn that take arg action type and fn to handle asycn operation
import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";

//fn to handle asych operation
function* getProducts() {
  //here we no need to asych keyword by default it is handling aych data
  //we have to add yield here also
  let data = yield fetch("http://localhost:3001/products");
  data = yield data.json();
  console.warn("action is called", data);
  //FOR PASSIG THIS DATA TO REDUCER->we have to use put fn that take type and data
  //as an arugument we have to pass object
  yield put({ type: SET_PRODUCT_LIST, data });
}

//To Search Product
function* searchProduct(data) {
  //here we pass query paramater so that api can provide data
  let result = yield fetch(`http://localhost:3001/products?q=${data.query}`);
  result = yield result.json();
  console.warn("action is called", result);
  //FOR PASSIG THIS DATA TO REDUCER->we have to use put fn that take type and data
  //as an arugument we have to pass object
  yield put({ type: SET_PRODUCT_LIST, data: result });
}

//this is generator function help to handle async operation for the action file
//now put the action code here that has async data
function* productSaga() {
  //for using take every fn we have to use yield before
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProduct);
}

export default productSaga;
