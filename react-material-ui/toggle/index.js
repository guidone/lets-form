import React, { useCallback } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';

import { I18N } from '../../components/i18n';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';
import { passRest } from '../../helpers/pass-rest';

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
        {...passRest(rest)}
      />
    );

    return (
      <FormGroup {...makeClassName('toggle', name, className)}>
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
lfLog('Loaded MUI.Toggle');

export default Toggle;