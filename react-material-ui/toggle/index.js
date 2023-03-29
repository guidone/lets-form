import React, { useCallback } from 'react';

import { Switch, FormGroup, FormControlLabel } from '@mui/material';

const Toggle = ({
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
      color={color}
      size={size}
      required={required}
      disableRipple={disableRipple}
    />
  );

  return (
    <FormGroup>
      {label && (
        <FormControlLabel
          labelPlacement={labelPlacement ? labelPlacement : undefined}
          disabled={disabled}
          label={label}
          control={switchCtrl}
        />
      )}
      {!label && switchCtrl}
    </FormGroup>
  );
};

export { Toggle };