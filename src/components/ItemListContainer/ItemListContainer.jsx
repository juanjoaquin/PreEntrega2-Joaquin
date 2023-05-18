import React from "react";

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <p style={{color: "black",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "black",
        fontWeight: "600",
        color: "whitesmoke"}}>{greeting}</p>
        </div>
    );
};

export default ItemListContainer;
