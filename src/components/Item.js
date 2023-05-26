import React, { useState } from 'react';
import styled from 'styled-components';

import ModalImage from './ModalImage';
import StarButton from './StarButton';

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 264px;
`;
const ItemTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

const ItemImage = styled.img`
  border-radius: 12px;
  width: 264px;
  height: 210px;
  object-fit: cover;
`;
const ItemPrice = styled.div`
  text-align: right;
`;
const Percent = styled.div`
  color: blue;
`;
const StarSection = styled.div`
  transform: translate(0, -150%);
`;

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
    follower
  } = data;
  const [show, setShow] = useState(false);

  return (
    <>
      <ItemWrapper>
        <ItemImage
          src={image_url ? image_url : brand_image_url}
          alt="img"
          onClick={() => {
            setShow(true);
          }}
        />
        <StarSection>
          <StarButton />
        </StarSection>
        <ItemTitle>
          <div>{type === 'Category' ? `# ${title}` : title || brand_name}</div>
          {discountPercentage ? (
            <Percent>{`${discountPercentage}%`}</Percent>
          ) : null}
          {follower ? <div>관심고객수</div> : null}
        </ItemTitle>
        <ItemPrice>{price ? `${price}원` : follower}</ItemPrice>
        <div>{sub_title}</div>
      </ItemWrapper>
      {show ? (
        <ModalImage
          image={image_url ? image_url : brand_image_url}
          setShow={setShow}
          title={title ? title : brand_name}
        />
      ) : null}
    </>
  );
};

export default Item;
