import React, { useState } from 'react';

import { Star, StarBorder } from '@mui/icons-material';

const StarComponent = ({ className, alreadyLiked }) => {
  const [liked, setLiked] = useState(alreadyLiked);

  return (
    <div
      className={`${className} ${liked ? 'liked' : ''}`}
      onClick={() => {
        // todo: show snackbar
        alert('hi');
        setLiked(!liked);
      }}
    >
      star
    </div>
  );
};
export default StarComponent;
