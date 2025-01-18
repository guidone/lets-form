import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import { makeClassName } from '../../helpers/make-class-name';

import './columns.scss';

const Columns = ({
  name,
  className,
  children,
  columns
}) => {
  return (
    <div {...makeClassName('columns', name, className)}>
      {(columns || [])
        .filter(column => column.hidden !== true)
        .map(column => (
          <div
            key={column.name}
            className={classNames(
              'lf-column',
              `lf-column-${column.name}`,
              column.className,
              column.layout && `layout-${column.layout}`
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
