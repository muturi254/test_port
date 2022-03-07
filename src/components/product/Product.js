import React from "react";
import "./product.css"

const Product = ({img, link}) => {
    return (
        <div className="product">
            <div className="product-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="hello" className="product-image" />
            </a>
        </div>
    )
}

export default Product;