import React from "react";
import "../index.css";
import star from "../pngs/star.png";
import buyIcon from "../pngs/buy-icon.png";

import { useState } from "react";

export default function Products() {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState("198");
  const [size, setSize] = useState(false);
  

  const handleCount = (value) => {
    if (value === "increase") {
      setCount(count + 1);
      let originalPrice = 198.0;
      let totalPrice = parseInt(price);
      setPrice(totalPrice + originalPrice);
    }
    if (value === "decrease") {
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
        <img
          src="https://assets.ajio.com/medias/sys_master/root/20230522/HFk7/646b8b91d55b7d0c63ce052f/-473Wx593H-469505114-white-MODEL.jpg"
          alt=""
        />
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
            <button className="border-gray-600 w-7 h-7 flex justify-center items-center outline-none bg-gray-100 p-3 text-sm rounded-full">
              S
            </button>
            <button className="border-gray-600 w-7 h-7 flex justify-center items-center outline-none bg-gray-100 p-3 text-sm rounded-full ml-2">
              M
            </button>
            <button className="border-gray-600 w-7 h-7 flex justify-center items-center outline-none bg-gray-100 p-3 text-sm rounded-full ml-2">
              L
            </button>
            <button className="border-gray-600 w-7 h-7 flex justify-center items-center outline-none bg-gray-100 p-3 text-sm rounded-full ml-2">
              XL
            </button>
            <button className="border-gray-600 w-7 h-7 flex justify-center items-center outline-none bg-gray-100 p-3 text-sm rounded-full ml-2">
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
            <button className="py-3 px-6 bg-black flex justify-between items-center text-white rounded-full">
              <img src={buyIcon} className="text-sm" alt="buy" />
              <p className="ml-5 text-sm">Buy Now</p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
