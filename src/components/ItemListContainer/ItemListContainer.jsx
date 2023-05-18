import React from "react";

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <p style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "black",
        fontWeight: "600",
        color: "white"}}>
            {greeting}</p>
        </div>
    );
};

export default ItemListContainer;
