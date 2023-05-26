import { useState } from 'react';
import Item from '../components/Item';
import FilterItem from '../components/FilterItem';

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
          <FilterItem
            name={name}
            setType={setType}
            image={image}
            korName={korName}
            isSelected={name === type}
          />
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
