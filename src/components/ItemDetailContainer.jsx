import React, { useEffect, useState } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
const { id } = useParams();
const [products, setProducts] = useState([]);


useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
    .then((res) => res.json())
    .then((data) => {
        if (id) {
        const filteredProducts = data.filter(
            (product) => product.id === parseInt(id)
        );
        setProducts(filteredProducts);
        } else {
        setProducts(data);
        }
    });
}, [id]);



return (
    <div>
    
    {products && 
    
    <Item data={products} 
    
    />}
    
    </div>
);
};

export default ItemDetailContainer;
