import React from 'react';

export const ChevronDown = ({ width = 24, height = 24, color = '#000000' }) => (
  <svg width={`${width}px`} height={`${height}px`} fill={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17,8H7a1,1,0,0,0-.768,1.641l5,6a1,1,0,0,0,1.536,0l5-6A1,1,0,0,0,17,8Zm-5,5.438L9.135,10h5.73Z"/>
  </svg>
);
