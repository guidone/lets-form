import React from 'react';

import './divider.scss';
import { lfLog } from '../../helpers/lf-log';

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
lfLog('Loaded Common.Divider');

export default Divider;