import React from 'react';
import { Link } from 'react-router-dom';
import './BackgroundImage.css'

function BackgroundImage(){
    return(
        <div className="image-container">
            <img className="background-image" src='images/boat4.jpg' alt=""/>
            <div className="overlay">
                <div className="text1">Book a Yacht</div>
                <div className="text2">Book your dream vacation !</div>
                <Link className="text-link" to="/add-booking" >BOOK NOW</Link>
            </div>
        </div>
    )
}

export default BackgroundImage