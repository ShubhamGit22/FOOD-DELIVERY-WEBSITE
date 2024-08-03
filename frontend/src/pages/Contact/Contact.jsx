import React from "react"
import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <div className="contact-container">
                <div className="contact-conditions">
                <div className="agreement">
                        <p>We're here to help! Whether you have questions about your order, feedback on our service, or suggestions for improvement, we'd love to hear from you.</p>
                    </div>
                    <div className="user-account">
                        <h2>Here are a few ways to reach us:</h2>
                        <p><b>Phone Number</b>: +91 9960172245 (Available from <b>09:00 </b>to <b> 19:00 hrs</b>)</p>
                        <p> <b>Email</b>: shubhamchavan22@gmail.com</p>
                    </div>
                    <div className="address">
                        <i class="fa-solid fa-location-dot"></i>
                        <h4>Our office is located in India at Unit Nos. 3A & 4, 20th Floor, One Lodha Place, Senapati Bapat Marg, Lower Parel, Mumbai -400013, Maharashtra.</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
