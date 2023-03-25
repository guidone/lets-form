import React from 'react';

import { TextField } from '@mui/material';

// DOC: https://mui.com/material-ui/api/input/

const TextInput = ({
  name,
  label,
  hint,
  value,
  onChange,
  onBlur,
  size,
  disabled = false,
  readOnly = false,
  required,
  // TODO implementare readonly and plaintext
  fullWidth = false,
  variant,
  margin,
  placeholder,
  color
}) => {


  return (
    <div>
      <TextField
        id="outlined-select-currency"
        size={size}
        margin={margin}
        placeholder={placeholder}
        value={value}
        color={color}
        readOnly={readOnly}
        required={required}
        variant={variant}
        onChange={event => {
          onChange(event.target.value);
        }}
        onBlur={onBlur}
        disabled={disabled}
        label={label}
        fullWidth={fullWidth}
        helperText={hint}
      />
    </div>
  );
};

export { TextInput };