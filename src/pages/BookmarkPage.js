import React from 'react';
import Product from './ProductPage';

const Bookmark = ({ bookmarks }) => {
    return (
        <Product items={bookmarks} />
    )
};

export default Bookmark;