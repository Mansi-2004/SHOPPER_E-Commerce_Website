// import React, { useContext } from 'react';
// import './Cartitems.css';
// import remove_icon from '../Assets/cart_cross_icon.png';
// import { ShopContext } from '../../Context/ShopContext';

// const Cartitems = () => {
//   const { getTotalCartAmount, all_product, cartitems, removeFromCart } = useContext(ShopContext);

//   return (
//     <div className='cartitems'>
//       <div className="cartitems-format-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />
//       <div>
//         {all_product && all_product.length > 0 ? (
//           all_product.map((e) => {
//             // Check if the product is in the cart and has a quantity greater than 0
//             if (cartitems && cartitems[e.id] > 0) {
//               return (
//                 <div key={e.id} className="cartitems-format cartitems-format-main">
//                   <img src={e.image} alt={`Product ${e.name}`} className="carticon-product-icon" />
//                   <p>{e.name}</p>
//                   <p>${e.new_price}</p>
//                   <button className="cartitems-quantity">{cartitems[e.id]}</button>
//                   <p>${e.new_price * cartitems[e.id]}</p>
//                   <img
//                     className="cartitems-remove-icon"
//                     src={remove_icon}
//                     alt="Remove item"
//                     onClick={() => removeFromCart(e.id)}
//                   />
//                 </div>
//               );
//             }
//             return null; // Return null if the condition isn't met
//           })
//         ) : (
//           <p>No products in the cart</p> // Fallback message when all_product is empty or undefined
//         )}
//       </div>
//       <div className="cartitems-down">
//         <div className="cartitems-total">
//           <h1>cart Totals</h1>
//           <div className="cartitems-total-item">
//             <p>Subtotal</p>
//             <p>${getTotalCartAmount()}</p>
//           </div>
//           <hr />
//           <div className="cartitems-total-item">
//             <p>Shipping Fee</p>
//             <p>Free</p>
//           </div>
//           <hr />
//           <div className="cartitems-total-item">
//             <h3>Total</h3>
//             <h3>${0}</h3>
//           </div>
//         </div>
//         <button>PROCEED TO CHECKOUT</button>
//       </div>
//       <div className="cartitems-promocode">
//         <p>If you have a promo code, Enter it here</p>
//         <div className="cartitems-promobox">
//           <input type="text" placeholder="promo code" />
//           <button>Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cartitems;


import React, { useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import "./Cartitems.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";

// Load Stripe with Public Key
const stripePromise = loadStripe("your_stripe_public_key_here");

const Cartitems = () => {
  const { getTotalCartAmount, all_product, cartitems, removeFromCart } = useContext(ShopContext);

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("http://localhost:4000/PaymentButton", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: getTotalCartAmount() }),
    });

    const session = await response.json();
    if (session.url) {
      window.location.href = session.url; // Redirect to Stripe checkout
    }
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        {all_product && all_product.length > 0 ? (
          all_product.map((e) => {
            if (cartitems && cartitems[e.id] > 0) {
              return (
                <div key={e.id} className="cartitems-format cartitems-format-main">
                  <img src={e.image} alt={`Product ${e.name}`} className="carticon-product-icon" />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className="cartitems-quantity">{cartitems[e.id]}</button>
                  <p>${e.new_price * cartitems[e.id]}</p>
                  <img
                    className="cartitems-remove-icon"
                    src={remove_icon}
                    alt="Remove item"
                    onClick={() => removeFromCart(e.id)}
                  />
                </div>
              );
            }
            return null;
          })
        ) : (
          <p>No products in the cart</p>
        )}
      </div>
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
        </div>
        <button onClick={handleCheckout} className="checkout-button">
          Pay with Stripe
        </button>
      </div>
      <div className="cartitems-promocode">
        <p>If you have a promo code, enter it here</p>
        <div className="cartitems-promobox">
          <input type="text" placeholder="Promo code" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;
