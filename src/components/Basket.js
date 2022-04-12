import React from 'react';
import BasketItem from "./BasketItem";



function Basket({basket , resetBasket, total, products}) {
    return (
        <>
        {
            basket.map(
                item => (
                 <BasketItem item={item} product = {products.find (p => p.id === item.id)} />
                ))
        }
        <div>
            Toplam : $ {total}
        </div>

            <button onClick={resetBasket}>Sepeti Temizle</button>
        </>
    )
}

export default Basket;