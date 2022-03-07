import React from "react";
import { products } from "../../data";
import Product from "../product/Product";
import "./productlist.css"

const ProductList = () => {
    return (
        <div className="product-list">
            <div className="product-list-texts">
                <h1 className="product-list-title">Create & Inspire. Its Lama</h1>
                <p className="product-list-desc">
                    lama is a creative portfolio that your work has been waiting for. Beautiful homes, stunning portfolio styles & a whole lot more awaits inside. 
                </p>
            </div>
            <div className="product-list-list">
                {products.map(product => <Product img={product.img} key={product.id} link={product.link} />)}
            </div>
        </div>
    )
}

export default ProductList;