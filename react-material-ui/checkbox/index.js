import React, { useCallback } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { I18N } from '../../components/i18n';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';
import { passRest } from '../../helpers/pass-rest';

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
    disableRipple,
    className,
    ...rest
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
        {...passRest(rest)}
      />
    );

    return (
      <FormGroup {...makeClassName('checkbox', name, className)}>
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
