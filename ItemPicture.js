import React from 'react';

const ItemPicture = ({ itemUrl, picUrl}) => {
    return (
        <div className="item-image">
            <a href={itemUrl}>
                <img src={picUrl} />
            </a>
        </div>
    )
}

export default ItemPicture;