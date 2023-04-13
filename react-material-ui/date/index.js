import React, { useCallback } from 'react';
import _ from 'lodash';
import { FormControl, FormHelperText } from '@mui/material';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { isValidDayjsFormat, passRest } from '../../helpers';
import { I18N } from '../../components';

// DOC: https://mui.com/x/api/date-pickers/date-picker/
//      https://mui.com/x/react-date-pickers/adapters-locale/

const Date = I18N(
  ({
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
    maxDate,
    minDate,
    reduceAnimations,
    showDaysOutsideCurrentMonth,
    lfLocale,
    ...rest
  }) => {
    const localeCode = lfLocale && _.isString(lfLocale) ? lfLocale.split('-')[0] : undefined;
    const handleChange = useCallback(
      d => onChange(d.toDate ? d.toDate() : undefined),
      [onChange]
    );

    // set locale for dates
    let defaultValue = dayjs(value);
    if (defaultValue && localeCode) {
      defaultValue = defaultValue.locale(localeCode);
    }

    return (
      <div className="lf-control-date">
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale={localeCode ?? undefined}
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
              {...passRest(rest)}
            />
            {hint && !error && <FormHelperText>{hint}</FormHelperText>}
            {error && <FormHelperText>{error}</FormHelperText>}
          </FormControl>
        </LocalizationProvider>
      </div>
    );
  },
  ['label', 'hint', 'placeholder']
);

export { Date };
