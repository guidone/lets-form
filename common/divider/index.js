import React from 'react';

import './divider.scss';
import { lfLog } from '../../helpers/lf-log';

import { makeClassName } from '../../helpers/make-class-name';

const Divider = ({
  name,
  size,
  className,
  color
}) => {
  return (
    <div {...makeClassName('divider', name, className)}>
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
