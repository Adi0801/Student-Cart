import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/ProductAction";
const Header = () => {
  //use selector return complete store for redux
  //result is providing what state is returning ,bascially it is returning cartData action fn return value
  const result = useSelector((state) => state.cartData); //here we are getting data inside cartData
  console.warn("data in header", result);

  //to pass search box data while calling to action
  const dispatch = useDispatch();

  //span to show item count
  return (
    <div className="header">
      {/* Link is used to create a link from ome place to other */}
      <Link to="/">
        <h1 className="logo">E-comm</h1>
      </Link>
      <div className="search-box">
        <input
          type="text"
          onChange={(event) => dispatch(productSearch(event.target.value))}
          placeholder="Search Product"
        />
      </div>
      <Link to="/cart">
        <div className="cart-div">
          <span>{result.length}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
