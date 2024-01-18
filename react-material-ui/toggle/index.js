import React, { useCallback } from 'react';
import { Switch, FormGroup, FormControlLabel } from '@mui/material';

import { I18N } from '../../components';

const Toggle = I18N(
  ({
    name,
    label,
    value,
    disabled = false,
    color,
    onChange,
    size,
    labelPlacement,
    onBlur,
    required,
    disableRipple
  }) => {

    const handleChange = useCallback(
      e => {
        onChange(e.target.checked);
      },
      [onChange]
    );

    const switchCtrl = (
      <Switch
        checked={value}
        onChange={handleChange}
        disabled={disabled}
        onBlur={onBlur}
        color={color || undefined}
        size={size || undefined}
        required={required}
        disableRipple={disableRipple}
      />
    );

    return (
      <FormGroup
        data-lf-field-name={name}
        className="lf-control-toggle"
      >
        {label && (
          <FormControlLabel
            labelPlacement={labelPlacement || undefined}
            disabled={disabled}
            label={label}
            control={switchCtrl}
          />
        )}
        {!label && switchCtrl}
      </FormGroup>
    );
  },
  ['label', 'hint']
);

export { Toggle };