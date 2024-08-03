import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import VerifyOrder from "./pages/VerifyOrder/VerifyOrder";
import MyOrders from "./pages/MyOrders/MyOrders";
import Terms from "./pages/Terms&Conditions/Terms";
import Refund from "./pages/Refund&Cancellation/Refund";
import Privacy from "./pages/PrivacyPolicy/Privacy";
import Contact from "./pages/Contact/Contact";
import ShipingPolicy from "./pages/Shipingpolicy/ShipingPolicy";

const App = () => {

  const [ShowLogin, setShowLogin] = useState(false)
  
  return (
    <>
      {
        ShowLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <> </>
      }
    
      <div className="app">
        <Navbar  setShowLogin={setShowLogin}/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="order" element={<PlaceOrder/>}/>
          <Route path="/verify" element={<VerifyOrder/>}/>
          <Route path="/myorders" element={<MyOrders/>}/>
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/refund" element={<Refund/>}/>
          <Route path="/privacy" element={<Privacy/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/shippolicy" element={<ShipingPolicy/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  );
};

export default App;


// fragment
// <> </>