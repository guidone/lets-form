import React, { useId } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import FormLabel from '@mui/material/FormLabel';

import { I18N } from '../../components';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';
import { CommonCurrency } from '../../common/currency';
import { passRest } from '../../helpers/pass-rest';
import { TextOrIcon } from '../../common/text-or-icon';

// DOC: https://mui.com/material-ui/api/input/

const Currency = I18N(
  ({
    name,
    label,
    hint,
    value,
    error,
    disabled = false,
    readOnly = false,
    required,
    floatingLabel,
    className,
    lfLocale,
    align,
    ...rest
  }) => {
    const controlId = useId();

    return (
      <div {...makeClassName('currency', name, className)}>
        <FormControl
          required={required}
          error={error != null}
          variant={rest.variant ?? undefined}
          fullWidth={rest.fullWidth}
        >
          {label && !floatingLabel && (
            <FormLabel id={controlId}>{label}</FormLabel>
          )}
          <CommonCurrency
            defaultValue={value}
            control={TextField}
            locale={lfLocale}
            required={floatingLabel ? rest.required : undefined}
            style={_.isNumber(rest.width) && !rest.fullWidth ? { width: `${parseInt(rest.width, 10)}px` } : undefined}
            InputProps={{
              startAdornment: rest.prefix ? <InputAdornment position="start">{TextOrIcon(rest.prefix)}</InputAdornment> : undefined,
              endAdornment: rest.postfix ? <InputAdornment position="end">{TextOrIcon(rest.postfix)}</InputAdornment>: undefined,
              disableUnderline: rest.disableUnderline,
              readOnly,
              autoComplete: rest.autocomplete,
              style: { [align ? 'text-align' : undefined]: align }
            }}
            variant={rest.variant ?? undefined}
            label={floatingLabel ? rest.label : undefined}
            {...passRest(rest)}
          />
          {hint && !error && <FormHelperText>{hint}</FormHelperText>}
          {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
      </div>
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded MUI.Currency');

export default Currency;
