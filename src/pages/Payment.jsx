import React, { useState } from "react";
import "../index.css"; // styles
import CompletedModel from "../components/CompletedModel"; // payment completed modal component

//payment page
export default function Payment() {
  const [cardNumber, setCardNumber] = useState(); //state
  const [nameOnCard, setNameOnCard] = useState(); //state
  const [expirationDate, setExpirationDate] = useState(); //state
  const [securityCode, setSecurityCode] = useState(); //state

  const [model, setProcessingModel] = useState(false); // state

  //card number function
  const cardNum = (e) => {
    let val = e.target.value;
    if (val.length < 12 || val.length > 12) {
      e.target.style.border = "1px solid red";
    } else {
      e.target.style.border = "1px solid green";
    }
  };

  //name on card function
  const nameCard = (e) => {
    let val = e.target.value;
    if (val.length <= 3 || val.length > 15) {
      e.target.style.border = "1px solid red";
    } else {
      e.target.style.border = "1px solid green";
    }
  };

  //expiration date - month, year function
  const monthYear = (e) => {
    let val = e.target.value;
    if (val.length < 4 || val.length > 4) {
      e.target.style.border = "1px solid red";
    } else {
      e.target.style.border = "1px solid green";
    }
  };

  //security code function
  const security = (e) => {
    let val = e.target.value;
    if (val.length < 3 || val.length > 3) {
      e.target.style.border = "1px solid red";
    } else {
      e.target.style.border = "1px solid green";
    }
  };

  //form submit functionality
  const handleSubmit = () => {
    //error handling
    try {
      if (cardNumber.length === " ") {
        throw new Error("enter your card number");
      }

      if (cardNumber.length !== 12) {
        throw new Error("enter valid card number of 12 digits");
      }

      if (nameOnCard.length <= 3 || isNaN(nameOnCard) === false) {
        throw new Error("enter valid full name");
      }

      if (expirationDate.length !== 4) {
        throw new Error("enter valid expiration code, eg: 1224");
      }

      if (isNaN(securityCode) === true || securityCode.length !== 3) {
        throw new Error("enter valid 3 digits security code");
      } else {
        setProcessingModel(true);
      }
    } catch (error) {
      alert(error.message); //catches error and alerts message
    }
  };

  return (
    <>
      {model && <CompletedModel />}
      <main className="payment min-h-screen w-full flex justify-center items-center">
        <section className="payment-inner w-50 h-auto flex justify-center items-center bg-red-50 px-4">
          <div className="pay py-4 p-0">
            <div className="card card-number my-2">
              <label className="text-xs">Card number</label>
              <input
                onKeyUp={(e) => cardNum(e)}
                placeholder="Number"
                onChange={(e) => setCardNumber(e.target.value)}
                className="input w-full py-2 px-2 outline-none border-black text-xs"
                type="number"
              />
            </div>

            <div className="card card-name my-2">
              <label className="text-xs">Name on card</label>
              <input
                onKeyUp={(e) => nameCard(e)}
                placeholder="Name"
                onChange={(e) => setNameOnCard(e.target.value)}
                className="input w-full py-2 px-2 outline-none border-black text-xs"
                type="text"
              />
            </div>

            <div className="flex my-2">
              <div className="card expiration-date mr-1">
                <label className="text-xs">Expiration date</label>
                <input
                  onKeyUp={(e) => monthYear(e)}
                  placeholder="MM/YY"
                  onChange={(e) => setExpirationDate(e.target.value)}
                  type="number"
                  className="input py-2 px-2 outline-none border-black w-full text-xs"
                />
              </div>
              <div className="card security-code  ml-1">
                <label className="text-xs">Security code</label>
                <form action="">
                  <input
                    onKeyUp={(e) => security(e)}
                    placeholder="CVV"
                    onChange={(e) => setSecurityCode(e.target.value)}
                    type="password"
                    autoComplete="off"
                    className="input w-full py-2 px-2 outline-none border-black text-xs"
                  />
                </form>
              </div>
            </div>

            <div className="submit-btn my-2 mt-3">
              <input
                onClick={handleSubmit}
                type="submit"
                className="input rounded-md w-full text-xs py-3 bg outline-none bg-black text-white cursor-pointer"
                value="Pay now"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
