import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "../../Components/Header";
import Context from "../../Context/Context";
import Popup from "../../Components/Popup/Popup";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ReactLoading from "react-loading";

export default function ProductDetail({ match }) {
  // destructuring the match,
  // and parse the productName passed from the shop page
  const {
    params: { productName },
  } = match;

  // compose the query for fetching the specific product
  const fetchProductQuery = gql`
    query {
      products(where: { productName: "${productName}" }) {
        id
        productDescription
        productPrice
        productImg {
          url
        }
        productBrand {
          brandName
        }
        productSaleType
        productSpecs {
          screenSize
          supportNet
          celluarConnectivity
          battery
          rearCamera
          frontCamera
          storage
          color
        }
      }
    }
  `;

  // get the product using context
  const { items, popupState } = React.useContext(Context);

  // items in cart
  const [itemsInCart, setItemsInCart] = items;

  // pop up state
  const [popup, setPopup] = popupState;

  // handle add to cart btn click
  const handleOnClick = (item) => {
    console.log(`${item}`);
    setItemsInCart([
      ...itemsInCart,
      {
        name: productName,
        price: item.price,
        img: item.img,
      },
    ]);

    // show the added popup info
    setPopup({
      isShow: true,
      item: {
        name: productName,
        img: item.img,
      },
    });
  };

  // show slide at index
  const showSlideAtIndex = (n) => {
    console.log(n);
    const slides = document.getElementsByClassName("detail-img");
    const thumbnail = document.getElementsByClassName("thumbnail-img");
    console.log(slides.length);
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      thumbnail[i].className = "thumbnail-img";
    }
    slides[n].style.display = "block";
    thumbnail[n].className = "thumbnail-img thumbnail-active ";
  };

  return (
    <>
      <Header />
      <Query query={fetchProductQuery}>
        {({ loading, err, data }) => {
          if (loading) console.log("loading...");
          if (err) console.log(err);

          if (data) {
            const product = data.products[0];
            return (
              <div className="detail-container">
                {/* details specs img */}
                <div className="detail-container-body">
                  <h1>{productName}</h1>
                  <div className="detail-img-specs">
                    {/* detail images slide gallary */}
                    <div className="imgs-container">
                      {product.productImg.map((img, index) => {
                        return (
                          <div key={index} className="detail-img">
                            <img src={img.url} alt="product-img" />
                          </div>
                        );
                      })}
                      <div className="thumbnail-container">
                        {product.productImg.map((img, index) => {
                          return (
                            <div
                              key={index}
                              id={index}
                              className="thumbnail-img"
                              onClick={() => {
                                showSlideAtIndex(index);
                              }}
                            >
                              <img src={img.url} alt="product-img" />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="detail-specs">
                      <div className="detail-specs-overall-info">
                        <b>Brand: </b> {product.productBrand.brandName}
                      </div>
                      <ul>
                        <li>
                          <b>Screen Size: </b>
                          {product.productSpecs.screenSize}
                        </li>
                        <li>
                          <b>Celluar Connectivity: </b>
                          {product.productSpecs.celluarConnectivity}
                        </li>
                        <li>
                          <b>Supported Network: </b>
                          {product.productSpecs.supportNet}
                        </li>
                        <li>
                          <b>Battery Capacity: </b>
                          {product.productSpecs.battery}
                        </li>
                        <li>
                          <b>Rear Camera: </b>
                          {product.productSpecs.rearCamera}
                        </li>
                        <li>
                          <b>Front-Facing Camera: </b>
                          {product.productSpecs.frontCamera}
                        </li>
                        <li>
                          <b>Storage Size: </b>
                          {product.productSpecs.storage + "GB"}
                        </li>
                        <li>
                          <b>Colour: </b>
                          {product.productSpecs.color}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* add to cart */}
                <div className="add-to-cart">
                  <h2>${product.productPrice}</h2>
                  <p className="pick-up">
                    <b>Store Pickup:</b> Pick up is unavailable
                  </p>
                  <p className="delivery">
                    <b>Delivery:</b> Ships in 2 days
                  </p>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => {
                      const item = {
                        price: product.productPrice,
                        img: product.productImg[0].url,
                      };
                      handleOnClick(item);
                    }}
                  >
                    <i className="fas fa-shopping-cart"></i>Add to cart
                  </button>
                </div>

                {/* popup */}
                <Popup />
              </div>
            );
          } else {
            return (
              <div className="loading-container">
                <ReactLoading
                  className="loader"
                  type={"spin"}
                  color={"rgb(53, 126, 221)"}
                  height={50}
                  width={50}
                />
              </div>
            );
          }
        }}
      </Query>
    </>
  );
}
