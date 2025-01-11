import React, { useCallback } from 'react';
import Rating from '@mui/material/Rating';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';

import { I18N } from '../../components/i18n';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';
import { passRest } from '../../helpers/pass-rest';

// DOC: https://mui.com/material-ui/api/rating/

const Rate = I18N(
  ({
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
    max,
    precision,
    color,
    labelPlacement,
    error,
    className,
    ...rest
  }) => {
    const handleChange = useCallback(
      event => {
        onChange(parseFloat(event.target.value));
      },
      [onChange]
    );

    const ctrl = (
      <Rating
        size={size ?? undefined}
        max={max}
        precision={precision ?? 1}
        value={value}
        color={color}
        readOnly={readOnly}
        required={required}
        onChange={handleChange}
        onBlur={onBlur}
        disabled={disabled}
        {...passRest(rest)}
      />
    );

    return (
      <div {...makeClassName('rate', name, className)}>
        <FormControl
          required={required}
          error={error != null}
          sx={{ mt: 2 }}
          variant="standard"
        >
          {label && !labelPlacement && (
            <FormLabel>{label}</FormLabel>
          )}
          {label && labelPlacement && (
            <FormControlLabel
              labelPlacement={labelPlacement ? labelPlacement : undefined}
              disabled={disabled}
              label={label}
              control={ctrl}
              error={error}
            />
          )}
          {!(label && labelPlacement) && ctrl}
          {hint && !error && <FormHelperText>{hint}</FormHelperText>}
          {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
      </div>
    );
  },
  ['label', 'hint']
);
lfLog('Loaded MUI.Rate');

export default Rate;
