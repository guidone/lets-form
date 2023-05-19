import React from 'react';
import _ from 'lodash';
import { FormControl, FormHelperText } from '@mui/material';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { isValidDayjsFormat, passRest } from '../../helpers';
import { MuiIfNotPlaintext } from '../mui-plaintext';

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
  maxDate,
  minDate,
  reduceAnimations,
  showDaysOutsideCurrentMonth,
  lfLocale,
  datetime = false,
  views,
  plaintext,
  component,
  ...rest
}) => {
  const localeCode = lfLocale && _.isString(lfLocale) ? lfLocale.split('-')[0] : undefined;
  const Component = datetime ? DateTimePicker : DatePicker;

  // set locale for dates
  let defaultValue = dayjs(value);
  if (defaultValue && localeCode) {
    defaultValue = defaultValue.locale(localeCode);
  }

  return (
    <div
      data-lf-field-name={name}
      className={className}
    >
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale={localeCode ?? undefined}
      >
        <MuiIfNotPlaintext value={value} component={component} plaintext={plaintext} label={label}>
          <FormControl
            required={required}
            error={error != null}
            fullWidth={fullWidth}
          >
            <Component
              placeholder={placeholder}
              readOnly={readOnly}
              required={required}
              style={_.isNumber(width) && !fullWidth ? { width: `${parseInt(width, 10)}px` } : undefined}
              onChange={onChange}
              defaultValue={defaultValue}
              variant={variant ?? undefined}
              onBlur={onBlur}
              disabled={disabled}
              label={label}
              views={!_.isEmpty(views) ? views : ['day', 'year']}
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
              {...passRest(rest)}
            />
            {hint && !error && <FormHelperText>{hint}</FormHelperText>}
            {error && <FormHelperText>{error}</FormHelperText>}
          </FormControl>
        </MuiIfNotPlaintext>
      </LocalizationProvider>
    </div>
  );
};

export { MuiGenericDate };
