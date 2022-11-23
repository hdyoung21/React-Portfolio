import React from 'react';
import { Link } from "react-router-dom";
import "../styles/navbar.css"

function Navbar() {
    return (
        <div className='navbar'>
            <div className='tabs'>
                <Link to="/"> About </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/contact"> Contact </Link>
            </div>
            </div>
    )
}
        

            export default Navbar;