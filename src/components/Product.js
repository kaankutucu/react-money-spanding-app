import React from 'react';

function Product({product}) {
    return (
        <div className="product">
            <h6>{product.title}</h6>
            <div className="price"> ${product.price}</div>
            <div className="actions">
                <button className="sellbutton">Sat</button>
                <span className="amount">0</span>
                <button className="buybutton">Satın Al</button>
            </div>
        </div>
    );
}

export default Product;