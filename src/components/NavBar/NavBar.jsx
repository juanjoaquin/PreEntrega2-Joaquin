import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <div>
            <nav className="navApp">
                <ul>
                    <Link to="/" >
                <img className="logoNav" src={logo} alt="logo"/> 
                    </Link>
                    <li><Link to="/catalogo">Catalogue</Link></li>
                    <li><Link to="/catalogo/men's clothing">Men's clothing</Link></li>
                    <li><Link to="/catalogo/jewelery">Jewelery</Link></li>
                    <li><Link to="/catalogo/electronics">Electronics</Link></li>
                    <li><CartWidget /></li>
                </ul>
                
            </nav>
            
        </div>
    );
};

export default NavBar;