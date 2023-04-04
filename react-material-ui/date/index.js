import React, { useCallback } from 'react';
import _ from 'lodash';
import { FormControl, InputLabel, FormHelperText } from '@mui/material';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { isValidDayjsFormat } from '../../helpers';

// DOC: https://mui.com/x/api/date-pickers/date-picker/
//      https://mui.com/x/react-date-pickers/adapters-locale/

const Date = ({
  label,
  hint,
  value,
  onChange,
  onBlur,
  error,
  disabled = false,
  readOnly = false,
  required,
  fullWidth = false,
  variant,
  placeholder,
  width,
  disableFuture,
  disableHighlightToday,
  disableOpenPicker,
  disablePast,
  displayWeekNumber,
  format,
  locale,
  maxDate,
  minDate,
  reduceAnimations,
  showDaysOutsideCurrentMonth
}) => {
  const handleChange = useCallback(
    d => onChange(d.toDate ? d.toDate() : undefined),
    [onChange]
  );

  // set locale for dates
  let defaultValue = dayjs(value);
  if (defaultValue && locale) {
    defaultValue = defaultValue.locale(locale);
  }

  return (
    <div className="lf-control-date">
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale={locale ?? undefined}
      >
        <FormControl
          required={required}
          error={error != null}
          sx={{ mt: 2 }}
          fullWidth={fullWidth}
        >
          <DatePicker
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            style={_.isNumber(width) && !fullWidth ? { width: `${parseInt(width, 10)}px` } : undefined}
            onChange={handleChange}
            defaultValue={defaultValue}
            variant={variant ?? undefined}
            onBlur={onBlur}
            disabled={disabled}
            label={label}
            disableFuture={disableFuture}
            disableHighlightToday={disableHighlightToday}
            disableOpenPicker={disableOpenPicker}
            disablePast={disablePast}
            displayWeekNumber={displayWeekNumber}
            format={isValidDayjsFormat(format) ? format : undefined}
            maxDate={maxDate && dayjs(maxDate)}
            minDate={minDate && dayjs(minDate)}
            reduceAnimations={reduceAnimations}
            showDaysOutsideCurrentMonth={showDaysOutsideCurrentMonth}
          />
          {hint && !error && <FormHelperText>{hint}</FormHelperText>}
          {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
      </LocalizationProvider>
    </div>
  );
};

export { Date };
