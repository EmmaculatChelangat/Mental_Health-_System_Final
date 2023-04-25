import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Payment.css";

function Payment() {

  return (
    <>
      <div className="payment-page">
        <div className="payment-button">
          <Link className='payment-link' to='/Pages/Free.js'>
            <button className="btn btn--primary">Free Services</button>
          </Link>
          <Link className='payment-link'to='/Pages/Booking.js'>
          <button className="btn btn--secondary">Premium Services</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Payment;
