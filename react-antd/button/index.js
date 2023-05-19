import React, { useState, useCallback } from 'react';
import { Button, Tooltip } from 'antd';
import _ from 'lodash';

import { CommonIcon } from '../../common';
import { I18N } from '../../components';

import './button.scss';

const BiStateButton = I18N(
  ({
    name,
    labelOn,
    labelOff,
    iconOn,
    size,
    iconOff,
    onChange,
    onBlur,
    value,
    buttonType,
    hint,
    initialValue
  }) => {
    const [checked, setChecked] = useState(value || initialValue);

    const handleClick = useCallback(
      () => {
        const newValue = !checked;
        setChecked(!checked);
        onChange(newValue);
      },
      [onChange, checked]
    );

    let inner;
    if (buttonType === 'icon') {
      inner = (
        <CommonIcon
          onClick={handleClick}
          size={size}
          alt={name}
          src={checked ? iconOn : iconOff}
        />

      );
    } else {
      inner = (
        <Button
          onClick={handleClick}
          size={size}
          onBlur={onBlur}
          type={checked ? 'primary' : 'default'}
        >{checked ? labelOn : labelOff}</Button>
      );
    }

    return (
      <div className="lf-control-button" data-lf-field-name={name}>
        {!_.isEmpty(hint) && (
          <Tooltip title={hint}>
            {inner}
          </Tooltip>
        )}
        {_.isEmpty(hint) && inner}
      </div>
    );
  },
  ['labelOn', 'labelOff', 'hint']
);

export { BiStateButton as Button };
