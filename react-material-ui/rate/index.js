import React, { useCallback } from 'react';
import { Rating, FormControl, FormControlLabel, FormLabel, FormHelperText } from '@mui/material';

import { I18N } from '../../components';

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
    error
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
      />
    );

    return (
      <div className="lf-control-rate">
        <FormControl
          required
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

export { Rate };
