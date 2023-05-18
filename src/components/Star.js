import React, { useState } from 'react';

import { Star, StarBorder } from '@mui/icons-material';

const StarComponent = ({ className, alreadyLiked }) => {
  const [liked, setLiked] = useState(alreadyLiked);

  return (
    <>
      <div
        className={className}
        onClick={() => {
          // todo: show snackbar
          alert('hi');
          setLiked(!liked);
        }}
      >
        {liked ? <Star /> : <StarBorder />}
      </div>
    </>
  );
};
export default StarComponent;
