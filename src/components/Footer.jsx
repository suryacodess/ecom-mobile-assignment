import React from "react";
import profile from "../pngs/profile.png"; //png
import notification from "../pngs/notification.png"; //png
import cart from "../pngs/cart.png"; //png
import home from "../pngs/home.png"; //png
import "../index.css"; //styles

import { Link } from "react-router-dom"; // react router dom

//footer component
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
            {/* navigates to producsts page */}
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
