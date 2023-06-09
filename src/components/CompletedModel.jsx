import React, { useState } from "react";
import ProcessingModel from "./ProcessingModel"; // processing moal
import "../index.css";

//completed modal component
export default function CompletedModel() {
  const [processingModel, setProcessingModel] = useState(true); //state - adding processing modal

  //this functions runs after 4 seconds
  setTimeout(() => {
    setProcessingModel(false); // removing processing modal
  }, 4000);

  return (
    <div>
      {processingModel === true ? (
        <ProcessingModel />
      ) : (
        <section className="model">
          <div className="model-inner flex justify-center items-center text-center flex-col">
            <img
              className="h-10 w-10"
              src="https://media.tenor.com/BSY1qTH8g-oAAAAM/check.gif"
              alt="completed"
            />
            <div className="model-text mt-4">
              <h4 className="font-bold">Payment received!</h4>
              <p className="text-xs mt-2">
                Your order is now on the way,
                <br /> Please check your email for the receipt.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
