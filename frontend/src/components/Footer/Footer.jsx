import React from 'react';
import "./Footer.css"
import { contentFiles } from '../../contentFiles/contentFiles';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();

    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={contentFiles.logo} height="100px" width="250px" alt="" />
                    <p> <b>Launched in 2024</b>, Our technology platform connects customers serving their multiple needs. Customers use our platform to search food items, order food delivery and make payments. We provide high quality food to our customers. We also provide our delivery partners with transparent and flexible earning opportunities.</p>
                    <div className="footer-social-icons">
                        <img src={contentFiles.facebook_icon} alt="" />
                        <img src={contentFiles.twitter_icon} alt="" />
                        <img src={contentFiles.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li> Delivery</li>
                        <li> About Us</li>
                        <li onClick={() => navigate("/privacy")}> Privacy Policy</li>
                        <li onClick={() => navigate("/shippolicy")}> Shipping Policy</li>
                        <li onClick={() => navigate("/terms")}> Terms & Conditions </li>
                        <li onClick={()=> navigate("/refund")}> Refund/Cancellation Policy</li>
                        <li onClick={()=> navigate("/contact")}> Contact Us</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                        <h2>FOR FOODIES</h2>
                        <ul>
                            <li>Code Of Conduct</li>
                            <li>Blogger Help</li>
                        </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'> Copyright 2024 @ Foodie.com - All Rights Reserved</p>
        </div>
    );
}

export default Footer;
