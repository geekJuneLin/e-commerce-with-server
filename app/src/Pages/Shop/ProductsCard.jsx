import React, { useContext } from "react";
import "./style.css";
import Context from "../../Context/Context";
import { Link } from "react-router-dom";

export default function ProductsCard(props) {
  const { name, img, description, price, addToCart } = props;

  const { popupState } = useContext(Context);
  const [popup, setPopup] = popupState;

  // handle add to cart
  const handleAddToCart = () => {
    addToCart({
      name: name,
      price: price,
      img: img,
    });

    setPopup({
      isShow: true,
      item: {
        name: name,
        img: img,
      },
    });
  };

  return (
    <div className="products-card">
      <Link to={"/product-detail/" + name}>
        <img src={img} alt="img" />
        <h4>{name}</h4>
        <p>
          {description.length > 30
            ? description.slice(0, 30) + "..."
            : description}
        </p>
        <p>${price}</p>
      </Link>
      <div className="add-btn" onClick={handleAddToCart}>
        Add to cart
      </div>
    </div>
  );
}
