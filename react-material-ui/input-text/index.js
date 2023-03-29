import React, { useCallback } from 'react';
import _ from 'lodash';

import { TextField } from '@mui/material';
import { FormControl, InputLabel, FormHelperText, InputAdornment } from '@mui/material';

// DOC: https://mui.com/material-ui/api/input/

const TextInput = ({
  name,
  label,
  hint,
  value,
  onChange,
  onBlur,
  size,
  error,
  disabled = false,
  readOnly = false,
  required,
  fullWidth = false,
  variant,
  floatingLabel,
  placeholder,
  color,
  width,
  prefix,
  postfix,
  disableUnderline
}) => {
  const handleChange = useCallback(
    event => {
      onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <div className="lf-control-input-text">
      <FormControl
        required={required}
        error={error != null}
        sx={{ mt: 2 }}
        variant={variant ?? undefined}
        fullWidth={fullWidth}
      >
        {label && !floatingLabel && (
          <InputLabel id={`mui_input_text_${name}`}>{label}</InputLabel>
        )}
        <TextField
          size={size}
          placeholder={placeholder}
          value={value}
          color={color}
          required={floatingLabel ? required : undefined}
          style={_.isNumber(width) && !fullWidth ? { width: `${parseInt(width, 10)}px` } : undefined}
          onChange={handleChange}
          InputProps={{
            startAdornment: prefix ? <InputAdornment position="start">{prefix}</InputAdornment> : undefined,
            endAdornment: postfix ? <InputAdornment position="end">{postfix}</InputAdornment>: undefined,
            disableUnderline,
            readOnly
          }}
          variant={variant ?? undefined}
          onBlur={onBlur}
          disabled={disabled}
          label={floatingLabel ? label : undefined}
        />
        {hint && !error && <FormHelperText>{hint}</FormHelperText>}
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </div>
  );

};

export { TextInput };