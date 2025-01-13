import React, { useCallback, useId } from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';

import { I18N } from '../../components/i18n';
import { lfLog } from '../../helpers/lf-log';
import { passRest } from '../../helpers/pass-rest';
import { makeClassName } from '../../helpers/make-class-name';
import { isValidTime } from '../../helpers/is-valid-time';
import { timeToDayJSTime } from '../../helpers/time-to-dayjs-time';
import { makeWidthStyle } from '../../helpers/make-width-style';

// DOC: https://mui.com/x/api/date-pickers/time-picker/

const Time = I18N(
  ({
    name,
    label,
    hint,
    value,
    onChange,
    onBlur,
    fullWidth,
    width,
    floatingLabel,
    disabled = false,
    readOnly = false,
    required,
    className,
    timeStepsHours,
    timeStepsMinutes,
    timeStepsSeconds,
    size,
    variant,
    color,
    error,
    maxTime,
    minTime,
    forceMobile,
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
      <div {...makeClassName('time', name, className)}>
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
            label={floatingLabel ? label : undefined}
            slotProps={{ textField: {
              size: size ?? undefined,
              variant: variant ?? undefined,
              color: color ?? undefined,
              required: !!(floatingLabel && required)
            }}}
            onChange={handleChange}
            onBlur={onBlur}
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
