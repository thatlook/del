import React, { useState } from 'react';
import Close from './Vector.png';

const Item = ({ data }) => {
  const { title, sub_title, brand_name, discountPercentage, price, image_url, brand_image_url, follower } = data;
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="item-box">
        <div
          className="item-box-upper"
          onClick={() => {
            setShow(true);
          }}
        >
          <img src={image_url ? image_url : brand_image_url} alt='img'/>
        </div>

        <div className="item-box-lower">
          <div className="item-box-title">
            <div>{title ? title : brand_name}</div>
            {discountPercentage ? <div>{`${discountPercentage}%`}</div> : null}
            {follower ? <div>관심고객수</div> : null}
          </div>
          <div className="item-box-percent">{price ? price : follower}</div>
          <div className="item-box-subtitle">{sub_title}</div>
        </div>
      </div>
      {show ? (
        <div
          className="image-modal"  
        >
          <div className="image-modal-box">
            <img src={image_url ? image_url : brand_image_url} alt='img' />
            <div className='close' onClick={() => { setShow(false) }}>
              <img src={Close} alt='img'></img>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Item;