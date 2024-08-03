import React from 'react';
import "./Navbar.css"
import {contentFiles} from "../../contentFiles/contentFiles"

const Navbar = () => {
    return (
        <div className='navbar'>
            <img className='logo' src={contentFiles.logo} alt="" />
            <p> Admin Panel </p>
            <img className='profile' src={contentFiles.profile_image} alt="" />

            
        </div>
    );
}

export default Navbar;
