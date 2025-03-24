// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import productSaga from "./productSaga";
import createSagaMiddleware from "redux-saga";
//for testing
// const dummyReducer = () => {
//   return 100;
// };

//here you need to pass reducer fn coming from reducer
// const store = createStore(rootReducer);

//creating saga middleware to handle async operation
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware], //setup the middleware in store it should be array type
}); //reducer key then put it value to root reducer

//also we have to saga function sagaMiddlewqare that handle async operation
sagaMiddleware.run(productSaga); //now it will handle asych data->api data
export default store;
