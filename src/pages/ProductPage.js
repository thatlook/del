import { useState } from 'react';
import Item from '../components/Item';

import all from '../assets/product-all.png';
import product from '../assets/product-product.png';
import category from '../assets/product-category.png';
import exhibition from '../assets/product-plan.png';
import brand from '../assets/product-brand.png';
import useFetch from '../hooks/useFetch';

const Product = () => {
  const [productItems] = useFetch(
    'http://cozshopping.codestates-seb.link/api/v1/products'
  );
  const [type, setType] = useState('all');

  if (!productItems) {
    return null;
  }

  return (
    <div className="product-page">
      <div className="product-circles">
        {[
          [all, 'all', '전체'],
          [product, 'Product', '상품'],
          [category, 'Category', '카테고리'],
          [exhibition, 'Exhibition', '기획전'],
          [brand, 'Brand', '브랜드']
        ].map(([image, name, korName]) => (
          <div
            className="product-circle-item"
            onClick={() => {
              setType(name);
            }}
          >
            <img src={image} alt="img" />
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
      <div className="product-boxes">
        {productItems.map(d => {
          if (type !== 'all' && d.type !== type) {
            return null;
          }

          return <Item data={d} />;
        })}
      </div>
    </div>
  );
};

export default Product;
