import React from "react";
import searchBtn from "../pngs/search-btn.png"; //png

//search component
export default function Search() {
  return (
    <section className="search px-4 mt-4">
      <div className="search-input flex justify-center items-center">
        <input
          type="search"
          placeholder="Search..."
          className="h-12 w-full px-1 bg-slate-100 outline-none rounded-3xl border-gray-900"
        />
        <img src={searchBtn} className="ml-4" alt="search filter" />
      </div>
    </section>
  );
}
