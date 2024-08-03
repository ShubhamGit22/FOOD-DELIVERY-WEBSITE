import React from "react"
import "./Refund.css"

const Refund = () => {
    return (
        <div className="refund">
            <h1>Refund & Cancellation </h1>
            <div className="refund-container">
                <div className="refund-conditions">
                <div className="agreement">
                        <h2>1. Introduction</h2>
                        <p>These Terms and Conditions govern your access to and use of the <b>FOODIE</b> website and the services offered by <b> "FOODIE Commerce Private Limited.</b>"</p>
                    </div>
                    <div className="user-agreement">
                        <h2>2. Order Cancellations</h2>
                        <p>You may cancel your order before it is prepared by contacting us through the Website or by phone at <b> +91 9960172144</b>. We will process your cancellation request and issue a full refund for the order amount.
                            Orders cannot be cancelled once they are marked as "prepared" on the Website. This is because we begin preparing your food as soon as your order is confirmed.</p>
                    </div>
                    <div className="user-account">
                        <h2>3. Order Modifications</h2>
                        <p>Unfortunately, we cannot modify orders once they are placed. If you need to make changes to your order, please contact us as soon as possible. We will do our best to accommodate your request, but we cannot guarantee that we can modify an order once it has been confirmed.</p>
                    </div>
                    <div className="refunds">
                        <h2>4. Refunds</h2>
                        <p>We strive to provide a seamless and enjoyable experience. We offer refunds in the following situations:
                            <ul className="unordered-list">
                                <li>  Missing or Incorrect Items: If your order is missing items or contains incorrect items compared to your confirmation, please contact us within <b>3</b> days of receiving your order. We will verify the discrepancy and issue a full refund for the missing or incorrect items.</li>
                                <li> Damaged Food: If your order arrives damaged or spoiled, please contact us within <b>3</b> days of receiving your order. We may request photographic evidence of the damage. We will then issue a full refund for the damaged items.</li>
                                <li> Late Delivery: If your order arrives significantly later than the estimated delivery timeframe provided at checkout and the delay negatively impacts the quality of the food, you may be eligible for a partial or full refund. Please contact us within <b>3</b> days of receiving your order to discuss the situation.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="payment">
                        <h2>5. Non-Refundable Situations</h2>
                        <p>We cannot offer refunds for:
                            Orders cancelled after they are marked as "preparing" or "prepared" on the Website.
                            Orders where you change your mind or decide not to want the food after it has been prepared.
                            Allergies or dietary restrictions that were not communicated during the ordering process.
                            Delays caused by circumstances beyond our control, such as inclement weather or traffic congestion.</p>
                    </div>
                    <div className="delivery">
                        <h2>6. Processing Refunds</h2>
                        <p>The Website contains content owned by us or licensed to us. The Website's Content is protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, transmit, display, reproduce, publish, license, or create derivative works from the Content without our express written permission.</p>
                    </div>
                    <div className="user-conduct">
                        <h2>7. User Conduct</h2>
                        <p>Refunds will be processed to the original payment method used for the order within <b> 7-8 business days </b>. You will receive a notification email confirming the refund once it is processed.</p>
                    </div>
                    <div className="disclaimer">
                        <h2>8. Contact Us</h2>
                        <p>For any questions or concerns regarding refunds and cancellations, please contact us at <b> shubhamchavan258@gmail.com </b> or by phone at <b> +91 9960172144</b>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Refund;
