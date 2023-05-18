import React, { useEffect, useState } from 'react';
import Item from '../components/Item';

const Main = ({ bookmarks }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        'http://cozshopping.codestates-seb.link/api/v1/products?count=4'
      ).then(resp => resp.json());
      return data;
    };

    getData().then(d => {
      setItems(d);
    })
  }, []);

  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div className="item-list-row">
          <div id="item-list-title">상품 리스트</div>
          <div className="item-list-items">
            {items.map(d => (
              <Item data={d} />
            ))}
          </div>
          <div id="item-list-title">북마크 리스트</div>
          <div className="item-list-items">
            {bookmarks.map(d => (
              <Item data={d} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;