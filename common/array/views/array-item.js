import React, { useState } from 'react';
import _ from 'lodash';
// TODO togliere
import { IconButton } from 'rsuite';

import { PlusCircle, MinusCircle } from '../../../assets/icons';


const ArrayItem = ({
  name,
  children,
  item,
  disabled,
  readOnly,
  onAdd = () => {},
  onRemove = () => {},
  disableAdd = false,
  showAdd = false,
  leftMargin = 10
}) => {
  return (
    <div
      className="lf-control-common-array-item"
    >
      <div className="inner-form">
        {children}
      </div>
      <div className="buttons">
        {showAdd && (
          <IconButton
            disabled={disableAdd || disabled || readOnly}
            className="arrow"
            appearance="link"
            icon={<PlusCircle height={16} width={16} color="#3498ff" />}
            size="sm"
            onClick={onAdd}
          />
        )}
        {!showAdd && (
          <IconButton
            className="arrow"
            disabled={disabled || readOnly}
            appearance="link"
            icon={<MinusCircle height={16} width={16} color="#3498ff" />}
            size="sm"
            onClick={event => {
              onRemove(item);
            }}
          />
        )}
      </div>
    </div>
  );
};

export { ArrayItem };
