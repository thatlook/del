import React, { useState, useEffect } from 'react';

import Item from '../components/Item';

import all from '../components/product-all.png';
import brand from '../components/product-brand.png';
import category from '../components/product-category.png';
import exhibition from '../components/product-plan.png';
import product from '../components/product-product.png';

function ItemList({ items, type, setType, isBookmark }) {
  if (!items) {
    return null;
  }
  return (
    <div className="item-list-page">
      <div className="item-list-circles">
        {[
          [all, 'all', '전체'],
          [brand, 'Product', '상품'],
          [category, 'Category', '카테고리'],
          [exhibition, 'Exhibition', '기획전'],
          [product, 'Brand', '브랜드']
        ].map(([image, name, korName]) => (
          <div
            className="item-list-circle-item"
            onClick={() => {
              setType(name);
            }}
          >
            <img src={image} />
            <div
              className={
                name === type
                  ? 'item-type-current item-type-none'
                  : 'item-type-none'
              }
            >
              {korName}
            </div>
          </div>
        ))}
      </div>
      <div className="item-list-boxes">
        {items.map(d => {
          if (type !== 'all' && d.type !== type) {
            return null;
          }

          return <Item data={d} isBookmark={isBookmark} />;
        })}
      </div>
    </div>
  );
}

export default ItemList;
