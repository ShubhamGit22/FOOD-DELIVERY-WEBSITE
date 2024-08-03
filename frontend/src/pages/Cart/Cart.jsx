import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/storeContext";
import {useNavigate} from "react-router-dom"
const Cart = () => {
    
  const {cartItems, food_list, removeFromCart, getTotalCartAmount, url} = useContext(StoreContext);

  const navigate = useNavigate()
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
                                                                                        {/* cartItems is an object that stores the cart items, with item IDs as keys and quantities as values.
                                                                                - item._id is the current item's ID, which is being used as a key to access the quantity in cartItems.
                                                                                - The value at cartItems[item._id] is the quantity of that item in the cart, */}
        {food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return(
                    <div> 
                        <div className="cart-items-title cart-items-item">
                            <img src={url + "/images/" +item.image} alt="" />
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                            <p>{cartItems[item._id]}</p>
                            <p>${item.price * cartItems[item._id]}</p>
                            <p onClick={()=>removeFromCart(item._id)} className="cross"> X </p>
                        </div>
                        <hr />
                    </div>
                    )
              }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
            <h2>Cart Total</h2>
            <div> 
                <div className="cart-total-details">
                    <p> Subtotal </p>
                    <p> ${getTotalCartAmount()} </p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p> Delivery Fee </p>
                    <p> ${getTotalCartAmount() === 0 ? 0 : 2  } </p>
                </div>
                <div  className="cart-total-details">
                <p> Total </p>
                <p> ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2  } </p>
                </div>
            </div>
            <button onClick={()=>navigate("/order")}> PROCEED TO CHECKOUT </button>
        </div>
        <div className="cart-promocode">
            <div>
                <p>If you have a promocode, enter it here</p>
                <div className="cart-promocode-input"> 
                    <input type="text" placeholder="Promo code" />
                    <button>Submit</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
