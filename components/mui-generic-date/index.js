import React, { useId } from 'react';
import _ from 'lodash';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

import { isValidDayjsFormat } from '../../helpers/is-valid-dayjs-format';
import { passRest } from '../../helpers/pass-rest';
import { makeWidthStyle } from '../../helpers/make-width-style';
import { tryParseDateDayJs } from '../../helpers/try-parse-date-dayjs';
import { makeClassName } from '../../helpers/make-class-name';

// DOC: https://mui.com/x/api/date-pickers/date-picker/
//      https://mui.com/x/react-date-pickers/adapters-locale/

const MuiGenericDate = ({
  name,
  label,
  hint,
  value,
  onChange,
  onBlur,
  error,
  className,
  size,
  variant,
  color,
  readOnly = false,
  required,
  fullWidth = false,
  placeholder,
  floatingLabel,
  width,
  displayWeekNumber,
  format,
  maxDate,
  minDate,
  maxDateTime,
  minDateTime,
  lfLocale,
  datetime = false,
  views,
  component,
  ...rest
}) => {
  const controlId = useId();
  const localeCode = lfLocale && _.isString(lfLocale) ? lfLocale.split('-')[0] : undefined;
  const Component = datetime ? DateTimePicker : DatePicker;

  // set locale for dates
  let defaultValue;
  if (value) {
    defaultValue = dayjs(value);
    if (defaultValue && localeCode) {
      defaultValue = defaultValue.locale(localeCode);
    }
  }

  // parse dates
  const parsedMinDate = tryParseDateDayJs(minDate);
  const parsedMaxDate = tryParseDateDayJs(maxDate);
  const parsedMinDateTime = tryParseDateDayJs(minDateTime);
  const parsedMaxDateTime = tryParseDateDayJs(maxDateTime);

  return (
    <div {...makeClassName(component, name, className)}>
      <FormControl
        required={required}
        error={error != null}
        fullWidth={fullWidth}
        style={makeWidthStyle(fullWidth, width)}
      >
        {label && !floatingLabel && (
          <FormLabel htmlFor={controlId}>{label}</FormLabel>
        )}
        <Component
          id={controlId}
          required={floatingLabel ? required : undefined}
          label={floatingLabel ? label : undefined}
          placeholder={placeholder}
          slotProps={{ textField: {
            size: size ?? undefined,
            variant: variant ?? undefined,
            color: color ?? undefined,
            required: !!(floatingLabel && required)
          }}}
          readOnly={readOnly}
          onChange={onChange}
          defaultValue={defaultValue}
          onBlur={onBlur}
          views={!_.isEmpty(views) ? views : ['day', 'year']}
          displayWeekNumber={displayWeekNumber}
          format={isValidDayjsFormat(format) ? format : undefined}
          minDate={parsedMinDate}
          maxDate={parsedMaxDate}
          minDateTime={parsedMinDateTime}
          maxDateTime={parsedMaxDateTime}
          {...passRest(rest)}
        />
        {hint && !error && <FormHelperText>{hint}</FormHelperText>}
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </div>
  );
};

export { MuiGenericDate };
