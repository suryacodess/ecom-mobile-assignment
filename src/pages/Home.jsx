import React from "react";
import Header from "../components/Header"; // header component
import Hero from "../components/Hero"; // hero component
import Search from "../components/Search"; // search component
import Features from "../components/Features"; // feature component
import Arrivals from "../components/Arrivals"; // arrivals component
import Footer from "../components/Footer"; // footer component
import "../index.css"; //styles

// home page
export default function Home() {
  return (
    <div className="home container min-h-screen w-full pb-24">
      <Header />
      <Hero />
      <Search />
      <Features />
      <Arrivals />
      <Footer />
    </div>
  );
}
