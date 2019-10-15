import React from 'react';

const ItemDescription = ({  currency, price, quantity, title }) => {

    const itemPrice = (currency === 'USD') ? '$' + price : 
                    (currency === 'EUR') ? '€' + price : 
                    price + ' ' + currency;
    
    
    const add = (quantity < 11) ? ' level-low' : 
                (quantity > 10 && quantity <= 20) ? ' level-medium' : 
                ' level-high';

    const quantityClassName = 'item-quantity' + add;

    return (
        <div className="item-details">
            <p className="item-title">{title}</p>
            <p className="item-price">{itemPrice}</p>
            <p className={quantityClassName}>{quantity + ' left'}</p>
        </div>
    )
}

export default ItemDescription;