import React, { useState } from 'react';
import BookmarkItem from './BookmarkItem';
import Close from '../assets/Vector.png';
// import { Star } from '@mui/icons-material';

const Item = ({ data }) => {
  const {
    type,
    title,
    sub_title,
    brand_name,
    discountPercentage,
    price,
    image_url,
    brand_image_url,
    follower,
  } = data;
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="item">
        <img className='item-img' src={image_url ? image_url : brand_image_url} alt="img"
          onClick={() => {
            setShow(true);
          }}
        />
        <div><BookmarkItem className='item-img-star' /></div>
        <div className="item-title">
          <div>{type === 'Category' ? `# ${title}` : title || brand_name}</div>
          {discountPercentage ? <div className='percent'>{`${discountPercentage}%`}</div> : null}
          {follower ? <div>관심고객수</div> : null}
        </div>
        <div className="item-price">{price ? `${price}원` : follower}</div>
        <div className="item-subtitle">{sub_title}</div>
      </div>
      {show ? (
        <div className="image-modal" >
          <div className="image-modal-box">
            <img src={image_url ? image_url : brand_image_url} alt='img' />
            <div className='close'>
              <img src={Close} alt='img'
                onClick={() => {
                  setShow(false);
                }}
              />
            </div>
            <div className='image-modal-title'>{title ? title : brand_name}</div>
            <BookmarkItem className={'modal-star'} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Item;