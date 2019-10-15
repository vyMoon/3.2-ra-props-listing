import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types'

const Listing = ({ items }) => {
    const elements = items.map( (el) => {
        const title = (el.title.length > 49) ? el.title.slice(0, 49) + '...' : el.title;
        return <Item 
                 key={el.listing_id}
                 itemUrl={el.url}
                 picUrl={el.MainImage.url_570xN}
                 title={title}
                 currency={el.currency_code}
                 price={el.price}
                 quantity={el.quantity}
               />
     });

    return (
        <div className="item-list">
            {elements}
        </div>
    )
}

Listing.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
}

Listing.defaultProps = {
    items: []
}

export default Listing;