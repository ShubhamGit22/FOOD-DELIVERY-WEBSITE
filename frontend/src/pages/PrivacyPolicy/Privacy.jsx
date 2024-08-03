import React from "react"
import "./Privacy.css"

const Privacy = () => {
    return (
        <div className="privacy">
            <h1>Privacy And Policy</h1>
            <div className="privacy-container">
                <div className="privacy-conditions">
                    <div className="agreement">
                        <h2>1. Introduction</h2>
                        <p>This Privacy Policy describes how <b>FOODIE</b> collects, uses, and discloses your personal information when you use our website, <b>FOODIE</b> website and the services offered by "FOODIE Commerce Private Limited."</p>
                    </div>
                    <div className="introduction">
                        <h2>2. Information We Collect</h2>
                        <p>We collect the following types of information when you use our Website and Services:
                            <ul className="unordered-list">
                                <li>Account Information: When you create an account, we collect information such as your name, email address, phone number, and delivery address.</li>
                                <li>Order Information: When you place an order, we collect information such as your order details, payment information, and delivery instructions.</li>
                                <li>Usage Data: We may collect information about your activity on the Website, such as pages you visit, searches you perform, and features you use. This information is collected through  and similar tracking technologies.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="user-account">
                        <h2>3. How We Use Your Information</h2>
                        <p>We use the information we collect for the following purposes:
                            <ul className="unordered-list">
                                <li>To fulfill your orders and deliver your food.</li>
                                <li>To send you order confirmations, delivery updates, and promotional offers.</li>
                                <li>To personalize your experience on the Website, such as recommending restaurants based on your location or past orders.</li>
                                <li>To improve the Website and Services.</li>
                                <li>To comply with legal and regulatory requirements.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="orders">
                        <h2>4. Sharing Your Information</h2>
                        <p>We may share your information with third-party vendors who provide services to us, such as payment processors and delivery companies. We will only share the information necessary for them to perform their services. We may also share your information in the following circumstances:
                            <ul className="unordered-list">
                                <li>To comply with a legal obligation or court order.</li>
                                <li>To investigate suspected fraud or illegal activity.</li>
                                <li> To protect the rights and safety of ourselves, our users, or others.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="payment">
                        <h2>5. Data Security</h2>
                        <p>We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no website or internet transmission is completely secure. </p>
                    </div>
                    <div className="delivery">
                        <h2>6. Delivery</h2>
                        <p>Our Website and Services are not directed to children under the age of 12. We do not knowingly collect personal information from children under the age of 12.</p>
                    </div>
                    <div className="user-conduct">
                        <h2>7. Changes to This Policy</h2>
                        <p>We may update this Policy from time to time. We will notify you of any changes by posting the new Policy on this page.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Privacy;
