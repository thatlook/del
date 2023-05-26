// import React, { useEffect, useState } from 'react';
import Item from '../components/Item';

const Main = ({ items, bookmarks }) => {
  // const [items, setItems] = useState([]);
  
  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await fetch(
  //       'http://cozshopping.codestates-seb.link/api/v1/products?count=4'
  //     ).then(resp => resp.json());
  //     return data;
  //   };

  //   getData().then(d => {
  //     setItems(d);
  //   })
  // }, [setItems]);

  return (
    <div className="item-list-container">
      <div className="item-list-body">
        <div className="item-list-row">
          <div className="item-list-title">상품 리스트</div>
          <div className="item-list-items">
            {items.map(d => (
              <Item data={d} />
            ))}
          </div>
          <div className="item-list-title">북마크 리스트</div>
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