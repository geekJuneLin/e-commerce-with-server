import React from "react";
import Context from "../Context/Context";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

export default function Header() {
  const { items, showCart } = React.useContext(Context);
  const [isShow, setShow] = showCart;
  const [itemsInCart, setItemsInCart] = items;

  function showOrHideCart() {
    setShow(!isShow);
  }

  return (
    <header id="header">
      <nav className="box-shadow">
        <div className="nav-brand">
          <Link className="nav-link" to="/">
            E-Commerce
          </Link>
        </div>
        <ul>
          <li>
            <Link className="nav-link" to="/">
              Shop
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/new-arrival">
              New Arrival
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/on-sale">
              On Sale
            </Link>
          </li>
          <li>
            <div className="cart-btn" onClick={showOrHideCart}>
              Cart: <span className="items-amount">{itemsInCart.length}</span>
              <i className="fas fa-cart-plus"></i>
            </div>
          </li>
        </ul>
      </nav>
      <ShoppingCart />
    </header>
  );
}
