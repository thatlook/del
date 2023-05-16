import React from 'react';

function Main () {
  

    fetch('http://cozshopping.codestates-seb.link/api/v1/products?count=4')
    .then((resp) => resp.json())
    .then((data) => console.log(data))


    return (
        <div id="item-list-container">
          <div id="item-list-body">
            <div id="item-list-title">상품 리스트</div>
            <div id="item-list-title">북마크 리스트</div>
            {/* <img alt='img'></img> */}
            {/* {items.map((item) => {
              return (

              <div key={item.id} className='item'>
                <img className='item-img' src={item.image_url} alt={item.name}></img>
              
              </div>

              ) */}



              {/* return (
                <div key={item.id} className="item">
                <img className="item-img" src={item.img} alt={item.name}></img>
                <span className="item-name">{item.name}</span>
                <span className="item-price">{item.price}</span>
                <button className="item-button" onClick={(e) => handleClick(e, item.id)}>장바구니 담기</button>
              </div>
              ) */}
          </div>
        </div>
      );
}

export default Main;