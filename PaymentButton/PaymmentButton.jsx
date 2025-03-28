import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("your_publishable_key_here");

const PaymentButton = ({ cartItems }) => {
  const handleCheckout = async () => {
    const response = await fetch("http://localhost:4000/PaymentButton", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ products: cartItems }),
    });

    const session = await response.json();
    window.location.href = session.url; // Redirect to Stripe Checkout
  };

  return <button onClick={handleCheckout}>Pay Now</button>;
};

export default PaymentButton;
