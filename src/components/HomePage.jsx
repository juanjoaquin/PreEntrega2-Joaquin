import React from "react";
import shopping from "../assets/images/shopping.jpg";
import shopping2 from "../assets/images/shopping2.jpg";

const HomePage = () => {
    return (
        <div>
            <h1 className="tituloHome">Welcome to <br /> Shop Online</h1>
            <h4 className="subHome">Search for the best produdcts</h4>
            <h5 className="textHome">Go to our catalogue to see the best opportunities 's</h5>
            <img className="imgHome" src={shopping} alt="logo"/> 
            <img className="imgHome2" src={shopping2} alt="logo"/> 
        </div>
    );
};

export default HomePage;