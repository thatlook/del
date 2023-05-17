import React, { useState } from 'react';

const Star = ({ className, isBookmark }) => {
  const [liked, setLiked] = useState(isBookmark);
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
export default Star;
