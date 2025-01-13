import React, { useCallback } from 'react';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';

import { I18N } from '../../components/i18n';
import { i18nOptions } from '../../helpers/i18n-options';
import { passRest } from '../../helpers/pass-rest';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

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
    className,
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
        {...makeClassName('radio-group', name, className)}
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
    options: i18nOptions
  }
);
lfLog('Loaded MUI.RadioGroup');

export default RadioGroupMUI;
