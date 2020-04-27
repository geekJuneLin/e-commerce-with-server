import React, { useContext } from "react";
import "./style.css";
import Context from "../../Context/Context";

export default function TableBody({ img, productName, price, quantity }) {
  // get the itemsInCart context
  const { items } = useContext(Context);
  const [itemsInCart, setItemsInCart] = items;

  // handle on delete click
  const onDeleteClick = () => {
    console.log("delete " + productName);
    setItemsInCart(itemsInCart.filter((item) => item.name !== productName));
  };

  return (
    <tbody className="table-body">
      <tr>
        <td>
          <img src={img} alt="product-img" />
        </td>
        <td className="item-name">
          <p>{productName}</p>
        </td>
        <td>$ {price}</td>
        <td>{quantity}</td>
        <td>$ {price * quantity} inc</td>
        <td>
          <button onClick={onDeleteClick}>
            <i className="far fa-times-circle"></i>
          </button>
        </td>
      </tr>
    </tbody>
  );
}
