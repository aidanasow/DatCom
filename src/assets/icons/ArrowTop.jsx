import React from 'react';

const ArrowTop = ({color="#262626"}) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 10.5L8 6.5L4 10.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>

    );
};

export default ArrowTop;