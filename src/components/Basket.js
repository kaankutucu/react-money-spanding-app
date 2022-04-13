import React from 'react';
import BasketItem from "./BasketItem";



function Basket({basket , resetBasket, total, products}) {
    return (
        <>

            <div className="container basket-container">
       <ul>
           {
               basket.map(
                   item => (
                       <BasketItem key={item.id} item={item} product = {products.find (p => p.id === item.id)} />
                   ))
           }
       </ul>
        <div className="total">
            Toplam : $ {total}
        </div>

            <button className="basket-reset-btn" onClick={resetBasket}>Sepeti Temizle</button>

            </div>
        </>
    )
}

export default Basket;