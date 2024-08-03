import React from "react"
import "./ShipingPolicy.css"

const Privacy = () => {
    return (
        <div className="shipping">
            <h1>Shipping Policy</h1>
            <div className="shipping-container">
                <div className="shipping-conditions">
                    <div className="agreement">
                        <h2>1. Introduction</h2>
                        <p>This Shipping Policy outlines how <b>FOODIE</b> delivers food orders placed through our website, "FOODIE Commerce Private Limited.".</p>
                    </div>
                    <div className="introduction">
                        <h2>2. Delivery fees</h2>
                        <p>The delivery fee will be applied to each order. The delivery fee will be displayed during checkout before you confirm your order. </p>
                    </div>
                    <div className="orders">
                        <h2>3. Minimum Order</h2>
                        <p>There may be a minimum order amount required to qualify for delivery. The minimum order amount will be displayed on the checkout page.</p>
                    </div>
                    <div className="user-account">
                        <h2>4. Delivery Timeframes</h2>
                        <p>We aim to deliver your food orders within half an hour after the restaurant confirms your order. This timeframe is an estimate and may vary depending on factors such as:
                                <ul className="unordered-list">
                                    <li>Restaurant preparation time</li>
                                    <li>Traffic conditions</li>
                                    <li>Weather conditions</li>
                                </ul>
                                You will receive an estimated delivery timeframe during checkout and order confirmation.
                        </p>
                    </div>
                    
                    <div className="payment">
                        <h2>5. Order Cancellation</h2>
                        <p>You may be able to cancel your order before it is prepared by the restaurant. Please refer to our Cancellation Policy for details on how to cancel an order and our refund policy.</p>
                    </div>
                    <div className="delivery">
                        <h2>6. Delivery Guarantee</h2>
                        <p>We strive to deliver your food fresh and within the estimated timeframe. However, we cannot guarantee delivery times due to unforeseen circumstances.</p>
                    </div>
                    <div className="user-conduct">
                        <h2>7. Damaged And Missing items</h2>
                        <p>If your order arrives damaged or contains missing items, please contact us within <b>3</b> days of receiving your order. We will investigate the issue and offer a solution, such as a full or partial refund, or redelivery of the missing items.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Privacy;
