import React, { useEffect } from "react";
import "./style.css";
import Context from "../../Context/Context";
import ShoppingCard from "./ShoppingCartCard";
import Subtotal from "./Subtotal";
import ShoppingCartCard from "./ShoppingCartCard";
import ShoppingCartFooter from "./ShoppingCartFooter";

export default function ShoppingCart() {
  const { items, showCart } = React.useContext(Context);

  const [cartItems, setCartItems] = items;
  const [isShow, setIsShow] = showCart;

  // subtotal
  const [subtotal, setSubtotal] = React.useState(0);

  // remove items from the cart
  const removeItemsFromCart = (item) => {
    console.log(item.name);
    const newCartItems = cartItems.filter((i) => {
      return i.name !== item.name;
    });

    setCartItems(newCartItems);
  };

  useEffect(() => {
    var total = 0.0;
    cartItems.forEach((i) => {
      total += Number(i.price);
    });
    setSubtotal(total.toFixed(2));
  }, [cartItems]);

  return (
    <div
      className="shopping-cart"
      style={{ display: isShow ? "block" : "none" }}
    >
      <div className="shopping-cart-title">
        <Context.Consumer>
          {(context) => {
            return <h3>My Cart: {cartItems.length}</h3>;
          }}
        </Context.Consumer>
      </div>
      <div className="shopping-cart-body">
        {cartItems.map((item, index) => {
          return (
            <ShoppingCard
              key={index}
              name={item.name}
              price={item.price}
              img={item.img}
              removeItem={removeItemsFromCart}
            />
          );
        })}
        <Subtotal subtotal={subtotal} />
      </div>
      <ShoppingCartFooter />
    </div>
  );
}
