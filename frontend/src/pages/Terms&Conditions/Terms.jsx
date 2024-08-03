import React from "react"
import "./Terms.css"

const Terms = () => {
    return (
        <div className="terms">
            <h1>Terms Of Service</h1>
            <div className="terms-container">
                <div className="terms-conditions">
                    <div className="agreement">
                        <h2>1. Introduction</h2>
                        <p>These Terms and Conditions govern your access to and use of the <b>FOODIE</b> website and the services offered by "FOODIE Commerce Private Limited"</p>
                    </div>
                    <div className="introduction">
                        <h2>2. User Agreement</h2>
                        <p>By accessing or using the Website, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access or use the Website.</p>
                    </div>
                    <div className="user-account">
                        <h2>3. User Accounts</h2>
                        <p>You may be required to create an account to access certain features of the Website. You are responsible for maintaining the confidentiality of your account information and for all activity that occurs under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</p>
                    </div>
                    <div className="orders">
                        <h2>4. Orders</h2>
                        <p>When you place an order through the Website, you are offering to purchase the selected food items at the prices listed. We reserve the right to reject or cancel any order for any reason, including but not limited to: item availability, errors in pricing or product information, or fraud.</p>
                    </div>
                    <div className="payment">
                        <h2>5. Payment</h2>
                        <p>You agree to pay all charges associated with your orders, including any applicable taxes and fees. </p>
                    </div>
                    <div className="delivery">
                        <h2>6. Delivery</h2>
                        <p>The Website contains content owned by us or licensed to us. The Website's Content is protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, transmit, display, reproduce, publish, license, or create derivative works from the Content without our express written permission.</p>
                    </div>
                    <div className="user-conduct">
                        <h2>7. User Conduct</h2>
                        <p>You agree to use the Website in a lawful manner and in accordance with these Terms. You agree not to use the Website for any purpose that is prohibited by law or these Terms, including but not limited to:
                        <span>Uploading any unlawful, harmful, or offensive Content.
                            Interfering with or disrupting the Website or servers used to operate the Website.
                            Violating the security of the Website.
                            Using the Website to transmit spam, unsolicited emails, or chain letters.</span>
                        </p>
                    </div>
                    <div className="disclaimer">
                        <h2>8. Disclaimer</h2>
                        <p>The Website and the services offered are provided "as is" and without warranties of any kind, express or implied. We disclaim all warranties, including but not limited to, warranties of merchantability, fitness for a particular purpose, and non-infringement.
                        We do not warrant that the Website will be uninterrupted or error-free, that defects will be corrected, or that the Website or the server that makes it available are free of viruses or other harmful components.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Terms;
