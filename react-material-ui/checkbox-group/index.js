import React, { useCallback, useState } from 'react';
import _ from 'lodash';
import { FormLabel, Checkbox, FormControl, FormGroup, FormHelperText, FormControlLabel } from '@mui/material';

import { I18N } from '../../components';
import { passRest } from '../../helpers';

// DOCS: https://mui.com/material-ui/api/checkbox/

const CheckboxGroup = I18N(
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
    readOnly,
    onBlur,
    required,
    ...rest
  }) => {
    const [currentValue, setCurrentValue] = useState(_.isArray(value) ? value : [])
    const handleChange = useCallback(
      e => {
        let newValue;
        if (e.target.checked) {
          newValue = [...new Set(currentValue).add(e.target.name)];
        } else {
          const newSet = new Set(currentValue);
          newSet.delete(e.target.name);
          newValue = [...newSet];
        }
        setCurrentValue(newValue);
        onChange(newValue);
      },
      [currentValue, onChange]
    );

    return (
      <FormControl
        data-lf-field-name={name}
        className="lf-control-radio-group"
        required={required}
        error={error != null}
      >
        <FormLabel id={`lf-control-radio-group-${name}`}>{label}</FormLabel>
        <FormGroup
          aria-labelledby={`lf-control-radio-group-${name}`}
        >
          {(options || []).map(option => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              labelPlacement={labelPlacement ?? undefined}
              control={
                <Checkbox
                  disabled={disabled || readOnly}
                  size={size ?? undefined}
                  color={color ?? undefined}
                  checked={currentValue.includes(option.value)}
                  onChange={handleChange}
                  name={option.value}
                />
              }
              label={option.label}
            />
          ))}
        </FormGroup>
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

export { CheckboxGroup };
