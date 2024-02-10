import React, { useCallback } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { I18N } from '../../components';
import { lfLog } from '../../helpers/lf-log';

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
lfLog('Loaded MUI.Checkbox');

export default CheckboxMUI;
