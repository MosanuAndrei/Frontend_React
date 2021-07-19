import React from 'react';
import './Header.css'
import {NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShip} from '@fortawesome/free-solid-svg-icons'

function Header(){
    return(
        <div>
            <div className="header-logo">
                <FontAwesomeIcon className="header-img" icon={faShip}></FontAwesomeIcon>
                <p className="header-title" >WATERBOAT</p>
            </div>
            <nav className="header-nav">
                <NavLink className="header-link" to="/">
                    HOME
                </NavLink>
                <NavLink className="header-link" to="/add-booking">
                    BOOK NOW
                </NavLink>
                <NavLink className="header-link" to="/booking-list">
                    BOOKING LIST
                </NavLink>
            </nav>
        </div>
    )
}

export default Header;