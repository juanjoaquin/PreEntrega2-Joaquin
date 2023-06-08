import React from "react";


import { Link } from "react-router-dom";

const Item = ({data, titulo}) => { 
    return (
        <div >
            <h2 className="titleCategory">{titulo}</h2>
            <div className="cardGrid">
        {data.map((product) => {
            return (
            <div className="cardItem" key={product.id}>
                <h4 className="title-card">{product.title}</h4>
                <img className="imgMap" src={product.image} alt="" />
                <p className="cardPrice">${product.price}</p>
                <Link to={`/category/${product.id}`} className="showMoreButton">Show more</Link>
            </div>)
})}
        </div>
    </div>
    );
};


export default Item