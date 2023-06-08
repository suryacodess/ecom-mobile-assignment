import { BrowserRouter, Routes, Route } from "react-router-dom"; //react router
import Home from "./pages/Home"; //home page
import Products from "./pages/Products"; //product page
import Payment from "./pages/Payment"; //payment page

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* to home page */}
          <Route path="/" element={<Home />} />
          {/* to product page  */}
          <Route path="/products" element={<Products />} />
          {/* to payment page  */}
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
