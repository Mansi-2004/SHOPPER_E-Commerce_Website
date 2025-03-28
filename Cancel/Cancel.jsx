import React from "react";

const Cancel = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>❌ Payment Canceled</h1>
      <p>Your transaction was canceled.</p>
      <a href="/">Go back to Home</a>
    </div>
  );
};

export default Cancel;
