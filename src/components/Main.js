import { useEffect } from "react";
import { addToCart, removeToCart, emptyCart } from "../redux/action";
import { productList } from "../redux/ProductAction";
import { useDispatch, useSelector } from "react-redux";

function Main() {
  //here dispactch function is used for calling the fn
  const dispatch = useDispatch();
  //here we are passing data to the action that will be provided to reducer

  //for getting data redux state to react main component we have to use useselector
  let data = useSelector((state) => state.productData); //if state only all the reducer data came
  console.warn("data in main component", data);
  // const product = {
  //   name: "I PHONE",
  //   category: "mobile",
  //   price: 100000,
  //   color: "red",
  // };
  //once page loaded it show product
  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      {/* <div>
        <button onClick={() => dispatch(productList())}>Product List</button>
      </div> */}
      <div className="product-container">
        {data.map((item) => (
          <div className="product-item">
            <img src={item.photo} alt="" />
            <div>Name:{item.name}</div>
            <div>Brand:{item.brand}</div>
            <div>Category:{item.category}</div>
            <div>Color:{item.color}</div>
            <div>Price:{item.price}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add To Cart
              </button>
              <button onClick={() => dispatch(removeToCart(item.id))}>
                Remove To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
