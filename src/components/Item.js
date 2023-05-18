import React, { useState } from 'react';

import Star from '../components/Star';
import Close from './Vector.png';

// todo: use modal

const Item = ({ data, alreadyLiked }) => {
  const {
    title,
    sub_title,
    brand_name,
    discountPercentage,
    price,
    image_url,
    brand_image_url,
    follower,
    type
  } = data;
  const [show, setShow] = useState(false);

  let realTitle = type === 'Category' ? `# ${title}` : title || brand_name;
  return (
    <>
      <div className="item-box">
        <div className="item-box-upper">
          <div className="item-box-upper-area">
            <img
              src={image_url ? image_url : brand_image_url}
              alt="img"
              onClick={() => {
                setShow(true);
              }}
            />
            <Star className={'star-item'} alreadyLiked={alreadyLiked} />
          </div>
        </div>

        <div className="item-box-lower">
          <div className="item-box-title">
            <div>{realTitle}</div>
            {discountPercentage ? (
              <div className="percent-text">{`${discountPercentage}%`}</div>
            ) : null}
            {follower ? <div>관심고객수</div> : null}
          </div>
          <div className="item-box-percent">
            {price ? `${price}원` : follower}
          </div>
          <div className="item-box-subtitle">{sub_title}</div>
        </div>
      </div>
      {show ? (
        <div className="image-modal">
          <div className="image-modal-box">
            <img src={image_url ? image_url : brand_image_url} alt="img" />
            <div className="star-modal-area">
              <div
                className="close"
                onClick={() => {
                  setShow(false);
                }}
              >
                <img src={Close} alt="img"></img>
              </div>
              <div className="star-modal-area-text">
                <Star className={'star-modal'} alreadyLiked={alreadyLiked} />
                <span className="">{realTitle}</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Item;
