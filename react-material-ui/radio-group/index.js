import React, { useCallback } from 'react';
import { Radio, FormLabel, FormControl, RadioGroup, FormHelperText, FormControlLabel } from '@mui/material';

import { I18N } from '../../components';
import { passRest } from '../../helpers';

// DOCS: https://mui.com/material-ui/api/checkbox/

const RadioGroupMUI = I18N(
  ({
    name,
    label,
    value,
    options,
    disabled = false,
    color,
    onChange,
    error,
    size,
    row,
    hint,
    labelPlacement,
    onBlur,
    required,
    ...rest
  }) => {
    const handleChange = useCallback(
      e => {
        onChange(e.target.value);
      },
      [onChange]
    );

    return (
      <FormControl
        data-lf-field-name={name}
        className="lf-control-radio-group"
        required={required}
        error={error != null}
      >
        <FormLabel id={`lf-control-radio-group-${name}`}>{label}</FormLabel>
        <RadioGroup
          aria-labelledby={`lf-control-radio-group-${name}`}
          value={value}
          name={name}
          row={row}
          disabled={disabled}
          onChange={handleChange}
          onBlur={onBlur}
          {...passRest(rest)}
        >
          {(options || []).map(option => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              labelPlacement={labelPlacement ?? undefined}
              control={
                <Radio
                  size={size ?? undefined}
                  color={color ?? undefined}
                />
              }
              label={option.label}
            />
          ))}
        </RadioGroup>
        {hint && !error && <FormHelperText sx={{ marginLeft: '0px' }}>{hint}</FormHelperText>}
        {error && <FormHelperText sx={{ marginLeft: '0px' }}>{error}</FormHelperText>}
      </FormControl>
    );
  },
  ['label', 'hint'],
  {
    options: (value, i18n) => (value ?? []).map(value => ({ ...value, label: i18n(value.label) }))
  }
);

export { RadioGroupMUI as RadioGroup };
