import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";


const ItemListContainer = () =>{
const categoria = useParams().categoria;


    const [products, setProducts] = useState([]);
    const [titulo, setTitulo] = useState("Products");



const obtenerProductos = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products?limit=10");
        const data = await response.json();
        return data
    }
    catch(error) {
        alert("error")
    }
}


useEffect(() => {
    obtenerProductos()
    .then((data) => {
        if (categoria) {
        setProducts(data.filter((prod) => prod.category === categoria));
        setTitulo(categoria)
        } else {
        setProducts(data);
        setTitulo("Products");
        }
    });
}, [categoria]);


    return(
        <div>
            <Item data={products} titulo={titulo}/>
            
        </div>
    );
};

export default ItemListContainer;