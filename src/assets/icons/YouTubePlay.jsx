import React from 'react';

const YouTubePlay = ({style}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none" style={style}>
            <mask id="mask0_782_14141"  maskUnits="userSpaceOnUse" x="0" y="0" width="42"
                  height="42">
                <path
                    d="M21 41C32.046 41 41 32.046 41 21C41 9.954 32.046 1 21 1C9.954 1 1 9.954 1 21C1 32.046 9.954 41 21 41Z"
                    fill="white" stroke="white" strokeWidth="1.66667" strokeLinejoin="round"/>
                <path d="M17 21.0003V14.0723L23 17.5363L29 21.0003L23 24.4643L17 27.9283V21.0003Z" fill="black"
                      stroke="black" strokeWidth="1.66667" strokeLinejoin="round"/>
            </mask>
            <g mask="url(#mask0_782_14141)">
                <path d="M-3.00049 -3H44.9995V45H-3.00049V-3Z" fill="black"/>
            </g>
        </svg>
    );
};

export default YouTubePlay;