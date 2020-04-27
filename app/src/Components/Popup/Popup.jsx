import React, { useContext } from "react";
import "./style.css";
import Context from "../../Context/Context";
import { Link } from "react-router-dom";

export default function Popup() {
  const { popupState } = useContext(Context);
  const [popup, setPopup] = popupState;
  const { isShow, item } = popup;

  // handle on close
  const handleOnClose = () => {
    setPopup({ isShow: false, item: { name: "", img: "" } });
  };

  return (
    <div
      className="pop-up"
      id="pop-up"
      style={{
        display: isShow ? "block" : "none",
      }}
    >
      <div className="pop-up-window">
        <img src={item.img} alt="product-img" />
        <h3>Products added to your cart.</h3>
        <p>
          You've added <span className="product-name"> {item.name} </span>
          to your cart
        </p>
        <div className="btns">
          <button onClick={handleOnClose}>Continue shopping</button>
          <Link className="view-cart-btn" to="/myCart" onClick={handleOnClose}>
            Proceed to cart
          </Link>
        </div>
        <div className="close-btn" onClick={handleOnClose}>
          <i className="fas fa-times " />
        </div>
      </div>
    </div>
  );
}
