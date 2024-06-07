import React from 'react';

import './left-dots-with-fixed-right.scss';

/**
 * LetfDotsWithFixedRight
 * Layout component to have a fixed view on the right and a expandable view on the left
 * which takes all remaining space and show ellipsis if the text overflows
 * @param {*} param0
 * @returns
 */
const LetfDotsWithFixedRight = ({ left, right }) => {
  return (
    <div className="lf-left-dots-with-fixed-right">
      <div className="lf-left-dots">{left}</div>
      <div className="lf-right-fixed">{right}</div>
    </div>
  );
};

export { LetfDotsWithFixedRight };
