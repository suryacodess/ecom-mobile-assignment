import React from "react";
import "../index.css";
import profile from "../pngs/profile.png";
import notification from "../pngs/notification.png";
import cart from "../pngs/cart.png";
import home from "../pngs/home.png";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer flex justify-center items-center w-full h-20 px-4">
      <nav className="footer-nav w-full">
        <ul className="flex w-full justify-between items-center">
          <li className="flex w-auto pr-3 justify-between items-center bg-gray-200 rounded-full">
            <img src={home} alt="home" />
            <span className="text-xs pl-2">Home</span>
          </li>
          <li>
            <Link to="/products">
              <img src={cart} alt="cart" />
            </Link>
          </li>
          <li>
            <img src={notification} alt="notification" />
          </li>
          <li>
            <img src={profile} alt="profile" />
          </li>
        </ul>
      </nav>
    </footer>
  );
}
