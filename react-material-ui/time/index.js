import React, { useCallback, useId } from 'react';
import Rating from '@mui/material/Rating';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';

import { I18N } from '../../components/i18n';
import { lfLog } from '../../helpers/lf-log';
import { passRest } from '../../helpers/pass-rest';

import { isValidTime } from '../../helpers/is-valid-time';
import { timeToDayJSTime } from '../../helpers/time-to-dayjs-time';

// DOC: https://mui.com/x/api/date-pickers/time-picker/

const Time = I18N(
  ({
    name,
    label,
    hint,
    value,
    onChange,
    onBlur,
    size,
    variant,
    fullWidth,
    floatingLabel,
    disabled = false,
    readOnly = false,
    required,
    className,
    timeStepsHours,
    timeStepsMinutes,
    timeStepsSeconds,
    error,
    maxTime,
    minTime,
    forceMobile = true,
    format = 'HH:mm:ss',
    ...rest
  }) => {
    const controlId = useId();
    const Component = forceMobile ? MobileTimePicker : DesktopTimePicker;
    // default value
    let defaultValue;
    if (isValidTime(value)) {
      defaultValue = timeToDayJSTime(value);
    }

    const handleChange = useCallback(
      d => {
        onChange(d.format(format));
      },
      [onChange, format]
    );
    // set time steps
    let timeSteps;
    if (timeStepsHours || timeStepsMinutes || timeStepsSeconds) {
      timeSteps = {
        hours: timeStepsHours ?? 1,
        minutes: timeStepsMinutes ?? 5,
        seconds: timeStepsSeconds ?? 5
      };
    }

    let parsedMaxTime;
    if (isValidTime(maxTime)) {
      parsedMaxTime = timeToDayJSTime(maxTime);
    }
    let parsedMinTime;
    if (isValidTime(minTime)) {
      parsedMinTime = timeToDayJSTime(minTime);
    }

    return (
      <div
        data-lf-field-name={name}
        className={className}
      >
        <FormControl
          required={required}
          error={error != null}
          fullWidth={fullWidth}
        >
          {label && !floatingLabel && (
            <FormLabel htmlFor={controlId}>{label}</FormLabel>
          )}
          <Component
            id={controlId}
            required={floatingLabel ? required : undefined}
            onChange={handleChange}
            onBlur={onBlur}
            label={floatingLabel ? label : undefined}
            timeSteps={timeSteps}
            maxTime={parsedMaxTime}
            minTime={parsedMinTime}
            defaultValue={defaultValue}
            {...passRest(rest)}
          />
          {hint && !error && <FormHelperText>{hint}</FormHelperText>}
          {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
      </div>
    );
  },
  ['label', 'hint']
);
lfLog('Loaded MUI.Time');

export default Time;
