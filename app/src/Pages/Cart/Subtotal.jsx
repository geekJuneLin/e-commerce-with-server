import React from "react";
import StripCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

export default function Subtotal({ subtotal, changePaymentStatus }) {
  // handle token
  const handleToken = async (token, addr) => {
    try {
      const res = await axios.post("http://localhost:5000/checkout", {
        price: Number(subtotal) + 5,
        token,
      });

      const status = res.status;

      if (status === 200) {
        changePaymentStatus(true);
      } else {
        changePaymentStatus(false);
        toast.error("Payment failed, please try again later!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (err) {
      toast.error("Payment failed, please try again later!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="my-cart-subtotal">
      <div className="subtotal-top">
        <div className="left">
          <span>Subtotal:</span>
        </div>
        <div className="right">$ {subtotal.toFixed(2)}</div>
      </div>
      <div className="subtotal-mid">
        <div className="left">
          <span>Delivery:</span>
        </div>
        <div className="right">$ 5</div>
      </div>
      <div className="subtotal-bot">
        <div className="left">
          <span>Total Due:</span>
        </div>
        <div className="right">
          <span className="unit">NZD</span> ${" "}
          {(Number(subtotal) + Number(5)).toFixed(2)}
        </div>
        <StripCheckout
          className="checkBtn"
          stripeKey="pk_test_MU6usV3iRrTsGWC6PVrRYfbU00FgNHBCkj"
          token={handleToken}
          shippingAddress
          billingAddress
        >
          <button>
            <i className="fas fa-shield-alt"></i>Secure Checkout
            <i className="fas fa-chevron-right"></i>
          </button>
        </StripCheckout>
      </div>
    </div>
  );
}
