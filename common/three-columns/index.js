import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import './three-columns.scss';

const ThreeColumns = ({
  name,
  layout,
  children,
  leftAlignment,
  centerAlignment,
  rightAlignment
}) => {
  return (
    <div
      data-lf-field-name={name}
      className={classNames('lf-control-three-columns', layout)}
    >
      <div
        className="left"
        style={{ alignSelf: leftAlignment ? leftAlignment : undefined }}
      >
        {_.isFunction(children) && children('left')}
      </div>
      <div
        className="center"
        style={{ alignSelf: centerAlignment ? centerAlignment : undefined }}
      >
      {_.isFunction(children) && children('center')}
      </div>
      <div
        className="right"
        style={{ alignSelf: rightAlignment ? rightAlignment : undefined }}
      >
      {_.isFunction(children) && children('right')}
      </div>
    </div>
  );
}

export { ThreeColumns };
