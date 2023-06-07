import React from "react";
import menu from "../pngs/menu.png";
import mobileLogo from "../pngs/mobile-logo.png";
import "../index.css";

export default function Header() {
  return (
    <header className="header flex justify-between items-center h-20 w-full px-4 py-2">
      <div className="h-8 w-8">
        <img src={menu} className="h-8 w-8" alt="menu" />
      </div>
      <div className="mobile-logo bg-gray-300 rounded-full h-12 w-12">
        <img src={mobileLogo} alt="user logo" />
      </div>
    </header>
  );
}
