import React, { useEffect } from "react";
import "./style.css";
import ProductsCard from "./ProductsCard";
import Context from "../../Context/Context";
import { useState } from "react";

export default function ProductsContainer({ products }) {
  // get the context
  const { filtered, items } = React.useContext(Context);

  // products in stock
  const [productsInStore, setProductsInStore] = filtered;

  // show page index
  const [showPageIndex, setShowPageIndex] = useState(0);
  const [pages, setPages] = useState(null);
  const [pageBtns, setPageBtns] = useState(null);

  // split the in store products into small chunks, 12 / chunk
  var splitProductsInStore = [];
  for (var i = 0; i < productsInStore.length; i += 12) {
    splitProductsInStore.push(productsInStore.slice(i, i + 12));
  }

  // original products in store
  const product = products ? products.products : null;

  // items added in the cart
  const [itemsInCart, setItemsInCart] = items;

  // add to cart
  const addToCart = (item) => {
    setItemsInCart([...itemsInCart, item]);
  };

  useEffect(() => {
    // get the product body div elements
    const pages = document.getElementsByClassName("products-body");
    setPages(pages);

    // get the page btns elements
    const btns = document.getElementsByClassName("page-btn");
    setPageBtns(btns);
  }, []);

  // addEventListener to the selections
  useEffect(() => {
    const sortSelections = document.getElementById("sort-selection");
    const filterSelections = document.getElementById("filter-selection");
    const reset = document.getElementById("reset-btn");

    // add listener
    sortSelections.addEventListener("change", handleSortOnChange);
    filterSelections.addEventListener("change", handleFilterOnChange);
    reset.addEventListener("click", handleResetOnClick);

    // show the first page
    showPage();

    // remove listener
    return () => {
      sortSelections.removeEventListener("change", handleSortOnChange);
      filterSelections.removeEventListener("change", handleFilterOnChange);
      reset.removeEventListener("click", handleResetOnClick);
    };
  });

  // show page at index
  const showPage = () => {
    if (pages && pageBtns) {
      for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
      }

      if (pages[showPageIndex]) pages[showPageIndex].style.display = "flex";
      for (var i = 0; i < pageBtns.length; i++) {
        pageBtns[i].classList.remove("active");
      }
      if (pageBtns[showPageIndex])
        pageBtns[showPageIndex].classList.add("active");
    }
  };

  // handle previous btn click
  const handleOnPrevBtnClick = () => {
    var index = showPageIndex - 1;
    if (index < 0) index = pages.length - 1;
    setShowPageIndex(index);
    showPage();
  };

  // handle next btn click
  const handleOnNextBtnClick = () => {
    var index = showPageIndex + 1;
    if (index >= pages.length) index = 0;
    setShowPageIndex(index);
    showPage();
  };

  // handle selection onChange
  const handleSortOnChange = (e) => {
    console.log(productsInStore);
    const sorted = productsInStore.slice();
    switch (e.target.value) {
      case "Price up":
        sorted.sort((a, b) => {
          return a.productPrice - b.productPrice;
        });
        setProductsInStore(sorted);
        break;
      case "Price down":
        sorted.sort((a, b) => {
          return b.productPrice - a.productPrice;
        });
        setProductsInStore(sorted);
        break;
      case "Brand":
        sorted.sort((a, b) => {
          return a.productName > b.productName ? 1 : -1;
        });
        setProductsInStore(sorted);
        break;
      default:
        break;
    }
  };

  // handle filter on change
  const handleFilterOnChange = (e) => {
    console.log("filtering by " + e.target.value);
    const sorted = product.slice();
    switch (e.target.value) {
      case "New":
        setProductsInStore(
          sorted.filter((p) => {
            return p.productSaleType === "New";
          })
        );
        break;
      case "On Sale":
        setProductsInStore(
          sorted.filter((p) => {
            return p.productSaleType === "On Sale";
          })
        );
        break;
      case "Most Popular":
        setProductsInStore(
          sorted.filter((p) => {
            return p.productSaleType === "Most Popular";
          })
        );
        break;
      default:
        break;
    }
  };

  // handle reset btn onClick
  const handleResetOnClick = () => {
    setProductsInStore(product);
  };

  return (
    <div className="products-container">
      <div className="products-header">
        <div className="select">
          Sort By:
          <select id="sort-selection">
            <option value="Brand">Brand</option>
            <option value="Price up">Price up</option>
            <option value="Price down">Price down</option>
          </select>
        </div>

        <div className="select">
          Filter By:
          <select id="filter-selection">
            <option value="New">New</option>
            <option value="On Sale">On Sale</option>
            <option value="Most Popular">Most Popular</option>
          </select>
        </div>

        <button id="reset-btn">Reset filter</button>
      </div>

      {splitProductsInStore.map((productBody, index) => {
        return (
          <div key={index} className="products-body">
            {productBody.map((product) => {
              return (
                <ProductsCard
                  key={product.id}
                  name={product.productName}
                  img={product.productImg[0].url}
                  description={product.productDescription}
                  price={product.productPrice}
                  addToCart={addToCart}
                />
              );
            })}
          </div>
        );
      })}

      {/* pagination btns */}
      <div className="pagination-container">
        <div className="previous-btn" onClick={handleOnPrevBtnClick}>
          Previous
        </div>
        <div className="page-btn-container">
          {splitProductsInStore.map((productBody, index) => {
            return (
              <div
                key={index}
                className="page-btn"
                onClick={() => setShowPageIndex(index)}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
        <div className="next-btn" onClick={handleOnNextBtnClick}>
          Next
        </div>
      </div>
    </div>
  );
}
