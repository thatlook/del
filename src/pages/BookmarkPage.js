import React from 'react';
import Product from './ProductPage';

const Bookmark = ({ bookmarks }) => {
    console.log(bookmarks)
    return (
        <Product productItems={bookmarks}/>
    )
};

export default Bookmark;