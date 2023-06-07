import React from "react";
import bag from "../pngs/bag.png";
import shoe from "../pngs/shoe.png";
import "../index.css";

export default function Arrivals() {
  return (
    <>
      <section className="arrivals px-6 mt-5">
        <header className="flex justify-between items-center h-11 w-full">
          <div className="title">
            <h2 className="font-bold text-lg">New Arrivals</h2>
          </div>
          <div className="view">
            <p className="text-sm">View All</p>
          </div>
        </header>
        <section className="products flex flex-wrap justify-between">
          <div className="product mt-3 text-center">
            <img className="h-32 w-32" src={bag} alt="" />
            <div className="product-text w-full">
              <h4 className="font-bold">The Marc Jacobs</h4>
              <p className="text-sm">Traveler Tote</p>
              <h4>$195.00</h4>
            </div>
          </div>
          <div className="product my-3 text-center">
            <img className="h-32 w-32 rounded-xl" src={shoe} alt="" />
            <div className="product-text">
              <h4 className="font-bold"> Axel Arigato</h4>
              <p className="text-sm">Clean 90</p>
              <h4>$245.00</h4>
            </div>
          </div>
          <div className="product mt-3 text-center">
            <img className="h-32 w-32" src={bag} alt="" />
            <div className="product-text w-full">
              <h4 className="font-bold">The Marc Jacobs</h4>
              <p className="text-sm">Traveler Tote</p>
              <h4>$195.00</h4>
            </div>
          </div>
          <div className="product my-3 text-center">
            <img className="h-32 w-32 rounded-xl" src={shoe} alt="" />
            <div className="product-text">
              <h4 className="font-bold"> Axel Arigato</h4>
              <p className="text-sm">Clean 90</p>
              <h4>$245.00</h4>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
