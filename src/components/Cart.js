import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartData } from "../redux/reducer";
const Cart = () => {
  //here we are extracting the data from redux to react compontent Cart
  const cartData = useSelector((state) => state.cartData);
  //the amount calculated price of added item using reduce fn taken  prevous item prevois and new item price
  let amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);
  let tax = amount / 15;
  let Discount = amount / 10;
  return (
    <div>
      <Link to="/">Go to Main Page</Link>
      <h1>Cart Page</h1>
      <div className="cart-page-container">
        <table>
          <tr>
            <td>Name</td>
            <td>Colour</td>
            <td>Price</td>
            <td>Brand</td>
            <td>Category</td>
          </tr>
          {cartData.map((item) => (
            <tr key={item.key}>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </table>
        <div className="price-details">
          <div className="adjust-price">
            <span>Amount</span>
            <span>{amount}</span>
          </div>
          <div className="adjust-price">
            <span>Discount</span>
            <span>{Discount}</span>
          </div>
          <div className="adjust-price">
            <span>Tax(15%)</span>
            <span>{tax}</span>
          </div>
          <div className="adjust-price">
            <span>Total</span>
            <span>{amount + tax - Discount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
