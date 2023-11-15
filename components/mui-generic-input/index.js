import React, { useCallback } from 'react';
import _ from 'lodash';
import { TextField } from '@mui/material';
import { FormControl, FormHelperText, InputAdornment } from '@mui/material';

import { passRest } from '../../helpers';
import { TextOrIcon } from '../../common';
import { MuiLabel } from '../mui-label';

// DOC: https://mui.com/material-ui/api/input/

const MuiGenericInput = ({
  name,
  label,
  hint,
  value,
  onChange,
  onBlur,
  inputType,
  autocomplete,
  inputMode,
  size,
  error,
  disabled = false,
  readOnly = false,
  required,
  submitOnEnter = false,
  fullWidth = false,
  variant,
  floatingLabel,
  placeholder,
  color,
  width,
  prefix,
  postfix,
  component,
  disableUnderline,
  className,
  lfOnEnter = () => {},
  ...rest
}) => {
  const handleKeyUp = useCallback(e => e.keyCode === 13 && lfOnEnter(), [lfOnEnter]);

  return (
    <div
      data-lf-field-name={name}
      className={className}
    >
      <FormControl
        required={required}
        error={error != null}
        variant={variant ?? undefined}
        fullWidth={fullWidth}
      >
        {label && !floatingLabel && (
          <MuiLabel id={`mui_input_text_${name}`}>{label}</MuiLabel>
        )}
        <TextField
          size={size}
          placeholder={placeholder}
          value={value}
          color={color}
          required={floatingLabel ? required : undefined}
          style={_.isNumber(width) && !fullWidth ? { width: `${parseInt(width, 10)}px` } : undefined}
          onChange={onChange}
          onKeyUp={submitOnEnter ? handleKeyUp : undefined}
          type={inputType}
          InputProps={{
            startAdornment: prefix ? <InputAdornment position="start">{TextOrIcon(prefix)}</InputAdornment> : undefined,
            endAdornment: postfix ? <InputAdornment position="end">{TextOrIcon(postfix)}</InputAdornment>: undefined,
            disableUnderline,
            readOnly,
            autoComplete: autocomplete
          }}
          variant={variant ?? undefined}
          onBlur={onBlur}
          disabled={disabled}
          label={floatingLabel ? label : undefined}
          {...passRest(rest)}
        />
        {hint && !error && <FormHelperText>{hint}</FormHelperText>}
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </div>
  );
};

export { MuiGenericInput };
