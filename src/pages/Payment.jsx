import React, { useRef, useState } from "react";
import "../index.css";
import CompletedModel from "../components/CompletedModel";

export default function Payment() {
  const [cardNumber, setCardNumber] = useState();
  const [nameOnCard, setNameOnCard] = useState();
  const [expirationDate, setExpirationDate] = useState();
  const [securityCode, setSecurityCode] = useState();

  const [model, setProcessingModel] = useState(false);

  const cardNum = useRef();
  cardNum.current = cardNumber;
  const name = useRef();
  name.current = nameOnCard;
  const expiration = useRef();
  expiration.current = expirationDate;
  const security = useRef();
  security.current = securityCode;
  const handleSubmit = () => {
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
        alert(error.message);
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
                placeholder="Number"
                onChange={(e) => setCardNumber(e.target.value)}
                className="input w-full py-2 px-2 outline-none border-black text-xs"
                type="number"
              />
            </div>

            <div className="card card-name my-2">
              <label className="text-xs">Name on card</label>
              <input
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
                  placeholder="MM/YY"
                  onChange={(e) => setExpirationDate(e.target.value)}
                  type="number"
                  pattern="^[0-9]{3,4}$"
                  className="input py-2 px-2 outline-none border-black w-full text-xs"
                />
              </div>
              <div className="card security-code  ml-1">
                <label className="text-xs">Security code</label>
                <form action="">
                  <input
                    placeholder="CVV"
                    onChange={(e) => setSecurityCode(e.target.value)}
                    type="password"
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
