import React, { useState, useEffect } from 'react';

import ItemList from '../components/ItemList';

const ProductPage = () => {
  const [items, setItems] = useState([]);
  const [type, setType] = useState('all');

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        'http://cozshopping.codestates-seb.link/api/v1/products'
      ).then(resp => resp.json());
      return data;
    };

    getData().then(d => {
      setItems(d);
    });
  }, []);

  return <ItemList items={items} type={type} setType={setType} />;
};

export default ProductPage;
