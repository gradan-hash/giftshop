import React from "react";
import "./checkout.css";

function Checkout() {
  return (
    <>
      <section className="checkout-main">
        <div className="checkout-main-container">
          <p>Billing Details</p>

          <form className="billing-form">
            <div className="bill-name">
              <label>Name:</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="bill-name">
              <label>Email:</label>
              <input type="email" placeholder="Enter your Email Address" />
            </div>
            <div className="bill-name">
              <label>Contact:</label>
              <input type="tel" placeholder="Enter your Phone number" />
            </div>
            <div className="bill-name">
              <label>Location:</label>
              <input type="text" placeholder="Enter your Location" />
            </div>
            <div className="bill-name">
              <p>Products:xxxx</p>
              <p>Quantity:xxx</p>
              <p>Total price: Ksh.xxx</p>
            </div>

            <div className="request-btn">
              <button>Click to send Mpesa Request</button>
            </div>
          </form>

          <p className="till">
            In any case that mpesa fails, use the till number provided
          </p>
        </div>
      </section>
    </>
  );
}

export default Checkout;
