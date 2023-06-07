import React from "react";
import mobileBtn from "../pngs/mobile-btn.png";
import mobileLogo from "../pngs/mobile-logo.png";
import "../index.css";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-24 w-full px-6 py-2">
      <div className="h-12 w-12">
        <img src={mobileBtn} className="h-12 w-12" alt="" />
      </div>
      <div className="mobile-logo bg-gray-300 rounded-full h-12 w-12">
        <img src={mobileLogo} alt="" />
      </div>
    </header>
  );
}
