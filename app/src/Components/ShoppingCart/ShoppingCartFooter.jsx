import React from "react";
import Context from "../../Context/Context";
import { Link } from "react-router-dom";

export default function ShoppingCartFooter() {
  const { showCart } = React.useContext(Context);
  const [isShow, setIsShow] = showCart;

  // handle close btn click
  const handleClose = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="shopping-cart-footer">
      <Link className="btn" to="/myCart">
        View Cart
      </Link>
      <div className="btn" onClick={handleClose}>
        Close
      </div>
    </div>
  );
}
