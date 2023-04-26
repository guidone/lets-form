import React, { useCallback } from 'react';
import _ from 'lodash';
import { InputLabel, MenuItem, FormControl, Select, FormHelperText } from '@mui/material';

import { I18N } from '../../components';
import { passRest, filterOptions } from '../../helpers';

// DOC: https://mui.com/material-ui/api/select/

const MuiSelect = I18N(
  ({
    name,
    label,
    hint,
    value,
    placeholder,
    options,
    filterKey,
    filterValue,
    disabled = false,
    readOnly = false,
    required = false,
    error,
    fullWidth,
    width,
    floatingLabel,
    autoWidth,
    size,
    variant,
    onChange,
    onBlur,
    ...rest
  }) => {
    const handleChange = useCallback(
      e => {
        onChange(e.target.value);
      },
      [onChange]
    );
    const filteredOptions = filterOptions(options, filterValue, filterKey);

    return (
      <div
        className="lf-control-select"
        data-lf-field-name={name}
      >
        <FormControl
          size={size}
          disabled={disabled}
          required={required}
          error={error != null}
          sx={{ mt: 2 }}
          variant={variant ?? undefined}
          fullWidth={fullWidth}
        >
          {label && (
            <InputLabel id={`mui_select_${name}`}>{label}</InputLabel>
          )}
          <Select
            id={name}
            labelId={`mui_select_${name}`}
            value={value}
            onChange={handleChange}
            onBlur={onBlur}
            placeholder={placeholder}
            label={floatingLabel ? label : undefined}
            style={_.isNumber(width) && !fullWidth ? { width: `${parseInt(width, 10)}px` } : undefined}
            autoWidth={autoWidth}
            inputProps={readOnly ? { readOnly: true } : undefined }
            {...passRest(rest)}
          >
            {(filteredOptions || []).map(({ value, label }) => (
              <MenuItem key={value} value={value}>{label}</MenuItem>
            ))}
          </Select>
          {hint && !error && <FormHelperText>{hint}</FormHelperText>}
          {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
      </div>
    );
  },
  ['label', 'hint', 'placeholder'],
  {
    options: (value, i18n) => (value ?? []).map(value => ({ ...value, label: i18n(value.label) }))
  }
);

export { MuiSelect as Select };