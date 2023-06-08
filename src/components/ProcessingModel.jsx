import React from "react";
import "../index.css"; //styles


//preloader - processing modal component
export default function ProcessingModel() {
  return (
    <section className="model">
      <div className="model-inner flex justify-center items-center flex-col">
        <div className="lds-spinner w-10 h-10">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h4 className="font-bold">Payment is Processing...</h4>
        <p className="text-sm">Please wait, do not close this screen</p>
      </div>
    </section>
  );
}
