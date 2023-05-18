import React, { useState } from 'react';
import { Star, StarBorder } from '@mui/icons-material'

function BookmarkItem({ className }) {
    const [bookmarked, setBookmarked] = useState(false)
    return (
        <>
            <div className={className}
                onClick={() => {
                    alert('hi');
                    setBookmarked(!bookmarked);
                }}
            >
                {bookmarked ? <Star /> : <StarBorder />}
            </div>
        </>
    );
}

export default BookmarkItem;