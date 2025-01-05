import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import './columns.scss';

const Columns = ({
  name,
  children,
  columns
}) => {
  return (
    <div
      data-lf-field-name={name}
      className="lf-control-columns"
    >
      {(columns || []).map(column => (
        <div
          key={column.name}
          className={classNames(
            'lf-column',
            `lf-column-${column.name}`,
            column.layout && `layout-${column.layout}`,
            column.hidden && 'lf-column-hidden'
          )}
          style={{
            alignSelf: column.alignment ? column.alignment : undefined,
            flexGrow: column.size != null ? column.size : undefined
          }}
        >
          {_.isFunction(children) && children(column.name)}
        </div>
      ))}
    </div>
  );
};

export { Columns };
