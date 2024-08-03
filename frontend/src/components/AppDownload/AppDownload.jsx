import React from 'react';
import "./AppDownload.css"
import { contentFiles } from '../../contentFiles/contentFiles';

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p> For Better Experience Download <br />Foodie App</p>
            <div className="app-download-platforms"> 
                <img src={contentFiles.play_store} alt="" />
                <img src={contentFiles.app_store} alt="" />
            </div>
        </div>
    );
}

export default AppDownload;
