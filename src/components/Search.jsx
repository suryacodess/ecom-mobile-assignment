import React from "react";
import searchBtn from "../pngs/search-btn.png";

export default function Search() {
  return (
    <section className="searchBar px-6 mt-4">
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
