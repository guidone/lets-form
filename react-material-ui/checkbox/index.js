import React, { useCallback } from 'react';
import { Checkbox, FormGroup, FormControlLabel } from '@mui/material';

import { I18N } from '../../components';

// DOCS: https://mui.com/material-ui/api/checkbox/

const CheckboxMUI = I18N(
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

    const checkboxCtrl = (
      <Checkbox
        checked={value}
        onChange={handleChange}
        disabled={disabled}
        onBlur={onBlur}
        color={color}
        size={size}
        required={required}
        disableRipple={disableRipple}
      />
    );

    return (
      <FormGroup
        data-lf-field-name={name}
        className="lf-control-checkbox"
      >
        {label && (
          <FormControlLabel
            labelPlacement={labelPlacement ? labelPlacement : undefined}
            disabled={disabled}
            label={label}
            control={checkboxCtrl}
          />
        )}
        {!label && checkboxCtrl}
      </FormGroup>
    );
  },
  ['label', 'hint']
);

export { CheckboxMUI as Checkbox };
