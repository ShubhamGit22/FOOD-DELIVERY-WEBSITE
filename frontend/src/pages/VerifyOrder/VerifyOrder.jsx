import React, { useContext, useEffect } from "react";
import "./VerifyOrder.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/storeContext";
import axios from "axios";

const VerifyOrder= () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  console.log(success, orderId)

  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

const verifyPayment = async() => {
    const response = await axios.post(url+ "/api/order/verify",{success,orderId})
    if(response.data.success){
        navigate("/myorders")
    }
    else{
        navigate("/")
    }
}

    useEffect(()=>{
        verifyPayment();
    },[])

  return (
    <div className="verifyOrder">
      <div className="spinner">
      
      </div>
    </div>
  );
};

export default VerifyOrder;
