import React from "react";
import Arrivals from "../components/Arrivals";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Search from "../components/Search";
import "../index.css";

export default function Home() {
  return (
    <div className="container min-h-screen w-full pb-24">
      <Header />
      <Hero />
      <Search />
      <Features />
      <Arrivals />
      <Footer />
    </div>
  );
}
