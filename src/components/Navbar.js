import React from 'react';
import '../componentStyle/Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <nav className="navbar">
            <Link to="/"><h1 className="heading">Shopping Cart</h1></Link>
            <Link to="/cart"><img src="./assets/icons/cart.png" className="icon" alt="Cart Icon"></img></Link>
        </nav>
        );
}
 
export default Navbar;