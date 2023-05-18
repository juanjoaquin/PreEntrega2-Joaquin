import React from "react";
import CartWidget from "./CartWidget/CartWidget";


const NavBar = ({BackColor, ColorText}) => {
    return(
        <div className="navApp">
            <nav style={{backgroundColor: BackColor}}>
                <ul style={{display: "flex",
            justifyContent:"space-around",
            alignItems:"center",
            listStyle:"none",
            fontSize:"21px",
            fontWeight: "500",
            margin:"0px",
            padding: "0px",
            height: "56px"
            }}>
                    <li><a href="" style={{textDecoration:"none", padding: "5px", color: ColorText}}>Inicio</a></li>
                    <li><a href=""style={{textDecoration:"none", padding: "5px", color: ColorText}}>Motos</a></li>
                    <li><a href=""style={{textDecoration:"none", padding: "5px", color: ColorText}}>Contáctanos</a></li>
                    <li><a href=""style={{textDecoration:"none", padding: "5px", color: ColorText,}}>Marcas</a></li>
                    <CartWidget  />
                    
                </ul>
                
            </nav>
        </div>
    );
};

export default NavBar;