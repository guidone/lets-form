import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import './two-columns.scss';

const TwoColumns = ({
  name,
  children,
  layout,
  leftAlignment,
  rightAlignment
}) => {
  return (
    <div className={classNames('lf-two-columns', layout)}>
      <div
        className="left"
        style={{ alignSelf: leftAlignment ? leftAlignment : undefined }}
      >
        {_.isFunction(children) && children('left')}
      </div>
      <div
        className="right"
        style={{ alignSelf: rightAlignment ? rightAlignment : undefined }}
      >
      {_.isFunction(children) && children('right')}
      </div>
    </div>
  );
};

export { TwoColumns };
