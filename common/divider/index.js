import React from 'react';

import './divider.scss';

const Divider = ({
  name,
  size,
  color
}) => {
  return (
    <div className="lf-control-divider" data-lf-field-name={name}>
      <div
        className="bar"
        style={{
          height: `${size}px`,
          backgroundColor: color
        }}
      >
        &npsb;
      </div>
    </div>
  );
};

export { Divider };