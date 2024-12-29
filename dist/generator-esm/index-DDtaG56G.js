/* LetsForm Generator v0.12.2 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, M as isValidTime, m as makeWidthStyle, b as _extends, p as passRest } from './index-C4M6Y7eO.js';
import React, { useId, useCallback } from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { t as timeToDayJSTime } from './time-to-dayjs-time-DMpmp3ic.js';
import 'react-hook-form';
import './dayjs.min-cRHl8MnR.js';

var _excluded = ["name", "label", "hint", "value", "onChange", "onBlur", "fullWidth", "width", "floatingLabel", "disabled", "readOnly", "required", "className", "timeStepsHours", "timeStepsMinutes", "timeStepsSeconds", "size", "variant", "color", "error", "maxTime", "minTime", "forceMobile", "format"];

// DOC: https://mui.com/x/api/date-pickers/time-picker/

var Time = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    fullWidth = _ref.fullWidth,
    width = _ref.width,
    floatingLabel = _ref.floatingLabel;
    _ref.disabled;
    _ref.readOnly;
    var required = _ref.required,
    className = _ref.className,
    timeStepsHours = _ref.timeStepsHours,
    timeStepsMinutes = _ref.timeStepsMinutes,
    timeStepsSeconds = _ref.timeStepsSeconds,
    size = _ref.size,
    variant = _ref.variant,
    color = _ref.color,
    error = _ref.error,
    maxTime = _ref.maxTime,
    minTime = _ref.minTime,
    forceMobile = _ref.forceMobile,
    _ref$format = _ref.format,
    format = _ref$format === void 0 ? 'HH:mm:ss' : _ref$format,
    rest = _objectWithoutProperties(_ref, _excluded);
  var controlId = useId();
  var Component = forceMobile ? MobileTimePicker : DesktopTimePicker;
  // default value
  var defaultValue;
  if (isValidTime(value)) {
    defaultValue = timeToDayJSTime(value);
  }
  var handleChange = useCallback(function (d) {
    onChange(d.format(format));
  }, [onChange, format]);
  // set time steps
  var timeSteps;
  if (timeStepsHours || timeStepsMinutes || timeStepsSeconds) {
    timeSteps = {
      hours: timeStepsHours !== null && timeStepsHours !== void 0 ? timeStepsHours : 1,
      minutes: timeStepsMinutes !== null && timeStepsMinutes !== void 0 ? timeStepsMinutes : 5,
      seconds: timeStepsSeconds !== null && timeStepsSeconds !== void 0 ? timeStepsSeconds : 5
    };
  }
  var parsedMaxTime;
  if (isValidTime(maxTime)) {
    parsedMaxTime = timeToDayJSTime(maxTime);
  }
  var parsedMinTime;
  if (isValidTime(minTime)) {
    parsedMinTime = timeToDayJSTime(minTime);
  }
  return /*#__PURE__*/React.createElement("div", {
    "data-lf-field-name": name,
    className: className
  }, /*#__PURE__*/React.createElement(FormControl, {
    required: required,
    error: error != null,
    fullWidth: fullWidth,
    style: makeWidthStyle(fullWidth, width)
  }, label && !floatingLabel && /*#__PURE__*/React.createElement(FormLabel, {
    htmlFor: controlId
  }, label), /*#__PURE__*/React.createElement(Component, _extends({
    id: controlId,
    label: floatingLabel ? label : undefined,
    slotProps: {
      textField: {
        size: size !== null && size !== void 0 ? size : undefined,
        variant: variant !== null && variant !== void 0 ? variant : undefined,
        color: color !== null && color !== void 0 ? color : undefined,
        required: !!(floatingLabel && required)
      }
    },
    onChange: handleChange,
    onBlur: onBlur,
    timeSteps: timeSteps,
    maxTime: parsedMaxTime,
    minTime: parsedMinTime,
    defaultValue: defaultValue
  }, passRest(rest))), hint && !error && /*#__PURE__*/React.createElement(FormHelperText, null, hint), error && /*#__PURE__*/React.createElement(FormHelperText, null, error)));
}, ['label', 'hint']);
lfLog('Loaded MUI.Time');

export { Time as default };
