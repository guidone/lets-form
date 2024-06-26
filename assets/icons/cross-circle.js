import React from 'react';

export const CrossCirle = ({ width = 24, height = 24, color = '#000000', yOffset = 0 }) => (
  <svg width={`${width}px`} height={`${height}px`} viewBox={`0 ${yOffset} 24 24`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
