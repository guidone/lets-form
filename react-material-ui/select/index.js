import React, { useCallback } from 'react';

import { InputLabel, MenuItem, FormControl, Select, FormHelperText } from '@mui/material';

// DOC: https://mui.com/material-ui/api/select/

const MuiSelect = ({
  name,
  label,
  hint,
  value,
  placeholder,
  options,
  disabled = false,
  readOnly = false,
  required = false,
  // TODO implement error, but first error layout
  error,
  minWidth,
  autoWidth,
  size,
  variant,
  onChange,
  onBlur
}) => {

  const handleChange = useCallback(
    e => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <FormControl
      sx={minWidth ? { minWidth} : undefined}
      variant={variant}
      size={size}
      disabled={disabled}
      required={required}
    >
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={name}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        placeholder={placeholder}
        label={label}
        autoWidth={autoWidth}
        inputProps={readOnly ? { readOnly: true } : undefined }
      >
        {(options || []).map(({ value, label }) => (
          <MenuItem key={value} value={value}>{label}</MenuItem>
        ))}
      </Select>
      {hint && <FormHelperText>{hint}</FormHelperText>}
    </FormControl>
  );
};

export { MuiSelect as Select };