import React from 'react';
import {FaEarthAfrica} from 'react-icons/fa6'

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="nav--icon"><FaEarthAfrica/>
                </div>
                <h1 className="nav--logo">My Travel Journey</h1>
            </div>
        </>
    )
};

export default Navbar
