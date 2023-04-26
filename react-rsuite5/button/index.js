import React, { useState, useCallback } from 'react';
import { Button, IconButton, Whisper, Tooltip } from 'rsuite';
import _ from 'lodash';

import { I18N } from '../../components';

import './button.scss';

const BiStateButton = I18N(
  ({
    name,
    labelOn,
    labelOff,
    iconOn,
    size,
    appearance,
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
        <IconButton
          size={size}
          onClick={handleClick}
          appearance={appearance}
          onBlur={onBlur}
          icon={<img className="lf-icon" src={checked ? iconOn : iconOff} alt={name} />}
        />
      );
    } else {
      inner = (
        <Button
          onClick={handleClick}
          size={size}
          onBlur={onBlur}
          appearance={checked ? 'primary' : 'ghost'}
        >{checked ? labelOn : labelOff}</Button>
      );
    }

    return (
      <div className="lf-control-button" data-lf-field-name={name}>
        {!_.isEmpty(hint) && (
          <Whisper
            placement="top"
            trigger="hover"
            speaker={<Tooltip>{hint}</Tooltip>}
          >
            {inner}
          </Whisper>
        )}
        {_.isEmpty(hint) && inner}
      </div>
    );
  },
  ['labelOn', 'labelOff', 'hint']
);

export { BiStateButton as Button };
