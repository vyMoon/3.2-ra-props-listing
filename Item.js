import React from 'react';

import ItemPicture from './ItemPicture';
import ItemDescription from './ItemDescription'

const Item = ({ itemUrl, picUrl, title, currency, price, quantity }) => {
    return (
        <div className="item">
            <ItemPicture 
                itemUrl={itemUrl}
                picUrl={picUrl}
            />
            <ItemDescription 
                title={title}
                currency={currency}
                price={price}
                quantity={quantity}  
            />
        </div>
    )
}

export default Item;