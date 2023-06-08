import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"; //react router

import star from "../pngs/star.png"; //png
import buyIcon from "../pngs/buy-icon.png"; //png
import arrow from "../pngs/arrow.png"; //png
import cart2 from "../pngs/cart-2.png"; //png
import love from "../pngs/love.png"; //png
import "../index.css"; //styles

//products page
export default function Products() {
  const [count, setCount] = useState(1); //state
  const [price, setPrice] = useState("198"); //state
  const [small, setSmall] = useState(false); //state
  const [medium, setMedium] = useState(false); //state
  const [large, setLarge] = useState(true); //state - default size
  const [extraLarge, setExtraLarge] = useState(false); //state
  const [extraDoubleLarge, setExtraDoubleLarge] = useState(false); //state

  //functionality for size filter
  const handleSize = (size) => {
    console.log(size);

    if (size === "small") {
      setSmall(true); //on
      setLarge(false); //off
      setMedium(false); //off
      setExtraLarge(false); //off
      setExtraDoubleLarge(false); //off
    }

    if (size === "medium") {
      setMedium(true); //on
      setSmall(false); //off
      setLarge(false); //off
      setExtraLarge(false); //off
      setExtraDoubleLarge(false); //off
    }
    if (size === "large") {
      setLarge(true); //on
      setSmall(false); //off
      setMedium(false); //off
      setExtraLarge(false); //on
      setExtraDoubleLarge(false); //off
    }
    if (size === "extra large") {
      setExtraLarge(true); //on
      setSmall(false); //off
      setMedium(false); //off
      setLarge(false); //off
      setExtraDoubleLarge(false); //off
    }
    if (size === "double extra large") {
      setExtraDoubleLarge(true); //on
      setSmall(false); //off
      setLarge(false); //off
      setMedium(false); //off
      setExtraLarge(false); //off
    }
  };

  //functionality fot quantity increment or decrement
  const handleCount = (quantity) => {
    //quantity increase functionality
    if (quantity === "increase") {
      setCount(count + 1);
      let originalPrice = 198.0;
      let totalPrice = parseInt(price);
      setPrice(totalPrice + originalPrice);
    }

    //quantity decrease functionality
    if (quantity === "decrease") {
      if (count === 1) {
        setCount(1);
      } else {
        setCount(count - 1);
        let originalPrice = 198.0;
        let totalPrice = parseInt(price);
        setPrice(totalPrice - originalPrice);
      }
    }
  };

  return (
    <main className="product-screen flex flex-col bg-gray-100">
      <div className="product-img">
        <div className="img">
          <img
            src="https://assets.ajio.com/medias/sys_master/root/20230522/HFk7/646b8b91d55b7d0c63ce052f/-473Wx593H-469505114-white-MODEL.jpg"
            alt=""
          />
          <div className="product-wishlist">
            <img className="h-8 w-8" src={love} alt="love" />
          </div>
        </div>
        <div className="product-header w-full">
          <nav className="footer-nav w-full px-4 py-4">
            <ul className="flex w-full justify-between items-center">
              <li>
                <Link to="/">
                  <img src={arrow} alt="back to home" />
                </Link>
              </li>
              <li>
                <img src={cart2} alt="cart2" />
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="product-description px-4 py-5">
        <div className="product-desc-title flex justify-between items-center">
          <div className="prodcuct-title-text">
            <p className="font-bold text-lg">Roller Rabbit</p>
            <p className="text-xs">Vado Odelle Dress</p>

            <div className="rating-stars flex">
              <div className="stars flex items-center">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <span className="text-xs">(320 Review)</span>
              </div>
            </div>
          </div>

          <div className="product-increae-decrease w-auto">
            <div className="btn flex justify-center items-center bg-gray-200 py-1 rounded-full">
              <button
                onClick={() => handleCount("decrease")}
                className="outline-none border-none px-1 bg-none cursor-pointer"
              >
                -
              </button>
              <p className="px-3">{count}</p>
              <button
                onClick={() => handleCount("increase")}
                className="outline-none border-none px-1 bg-none cursor-pointer"
              >
                +
              </button>
            </div>
            <p className="text-xs">Available in stock</p>
          </div>
        </div>

        <div className="product-desc-size flex flex-col mt-4">
          <h4 className="text-sm font-bold">Size</h4>
          <div className="size-btns flex mt-2">
            <button
              id="sizeBtn"
              onClick={() => handleSize("small")}
              className={
                small === true
                  ? "bg-black text-white border-gray-600 w-10 h-10 flex justify-center items-center outline-none p-3 text-xs rounded-full"
                  : "border-gray-600 w-10 h-10 flex justify-center items-center outline-none bg-gray-100 p-3 text-xs rounded-full"
              }
            >
              S
            </button>
            <button
              id="sizeBtn"
              onClick={() => handleSize("medium")}
              className={
                medium === true
                  ? "bg-black text-white border-gray-600 w-10 h-10 flex justify-center items-center outline-none p-3 text-xs rounded-full ml-1"
                  : "border-gray-600 w-10 h-10 flex justify-center items-center outline-none bg-gray-100 p-3 text-xs rounded-full ml-1"
              }
            >
              M
            </button>
            <button
              id="sizeBtn"
              onClick={() => handleSize("large")}
              className={
                large === true
                  ? "bg-black text-white border-gray-600 w-10 h-10 flex justify-center items-center outline-none p-3 text-xs rounded-full ml-1"
                  : "border-gray-600 w-10 h-10 flex justify-center items-center outline-none bg-gray-100 p-3 text-xs rounded-full ml-1"
              }
            >
              L
            </button>
            <button
              id="sizeBtn"
              onClick={() => handleSize("extra large")}
              className={
                extraLarge === true
                  ? "bg-black text-white border-gray-600 w-10 h-10 flex justify-center items-center outline-none p-3 text-xs rounded-full ml-1"
                  : "border-gray-600 w-10 h-10 flex justify-center items-center outline-none bg-gray-100 p-3 text-xs rounded-full ml-1"
              }
            >
              XL
            </button>
            <button
              id="sizeBtn"
              onClick={() => handleSize("double extra large")}
              className={
                extraDoubleLarge === true
                  ? "bg-black text-white border-gray-600 w-10 h-10 flex justify-center items-center outline-none p-3 text-xs rounded-full ml-1"
                  : "border-gray-600 w-10 h-10 flex justify-center items-center outline-none bg-gray-100 p-3 text-xs rounded-full ml-1"
              }
            >
              XXL
            </button>
          </div>
        </div>

        <div className="product-desc-text mt-4">
          <h4 className="text-sm font-bold">Description</h4>
          <p className="text-xs mt-2">
            Get a little lift from these Sam Edelman sandals featuring ruched
            straps and leather lace-up ties, while a braided jute sole makes a
            fresh statement for summer.
          </p>
        </div>

        <div className="product-desc-cart flex justify-between items-center mt-4">
          <div className="price">
            <p className="text-xs">Total Price</p>
            <h3 className="font-bold text-lg">${price}.00</h3>
          </div>
          <div className="cart-btn">
            {/* navigates to payment page */}
            <Link to="/payment">
              <button className="py-3 px-6 bg-black flex justify-between items-center text-white rounded-full">
                <img src={buyIcon} className="text-sm" alt="buy" />
                <p className="ml-5 text-sm">Buy Now</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
