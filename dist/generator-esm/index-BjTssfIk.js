/* LetsForm Generator v0.9.4 - ESM */
import { j as _isDate, _ as _isString, k as isValidDate, a as _objectWithoutProperties, m as makeWidthStyle, b as _extends, t as _isEmpty, N as isValidDayjsFormat, p as passRest } from './index-CR64ICt9.js';
import React, { useId } from 'react';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { d as dayjs } from './dayjs.min-hNl-IXx3.js';

var tryParseDateDayJs = function tryParseDateDayJs(value) {
  if (_isDate(value)) {
    return dayjs(value);
  } else if (_isString(value)) {
    var d = new Date(value);
    if (isValidDate(d)) {
      return dayjs(d);
    }
  }
  return undefined;
};

var _excluded = ["name", "label", "hint", "value", "onChange", "onBlur", "error", "className", "size", "variant", "color", "readOnly", "required", "fullWidth", "placeholder", "floatingLabel", "width", "displayWeekNumber", "format", "maxDate", "minDate", "maxDateTime", "minDateTime", "lfLocale", "datetime", "views", "component"];

// DOC: https://mui.com/x/api/date-pickers/date-picker/
//      https://mui.com/x/react-date-pickers/adapters-locale/

var MuiGenericDate = function MuiGenericDate(_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    error = _ref.error,
    className = _ref.className,
    size = _ref.size,
    variant = _ref.variant,
    color = _ref.color,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    required = _ref.required,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
    placeholder = _ref.placeholder,
    floatingLabel = _ref.floatingLabel,
    width = _ref.width,
    displayWeekNumber = _ref.displayWeekNumber,
    format = _ref.format,
    maxDate = _ref.maxDate,
    minDate = _ref.minDate,
    maxDateTime = _ref.maxDateTime,
    minDateTime = _ref.minDateTime,
    lfLocale = _ref.lfLocale,
    _ref$datetime = _ref.datetime,
    datetime = _ref$datetime === void 0 ? false : _ref$datetime,
    views = _ref.views;
    _ref.component;
    var rest = _objectWithoutProperties(_ref, _excluded);
  var controlId = useId();
  var localeCode = lfLocale && _isString(lfLocale) ? lfLocale.split('-')[0] : undefined;
  var Component = datetime ? DateTimePicker : DatePicker;

  // set locale for dates
  var defaultValue;
  if (value) {
    defaultValue = dayjs(value);
    if (defaultValue && localeCode) {
      defaultValue = defaultValue.locale(localeCode);
    }
  }

  // parse dates
  var parsedMinDate = tryParseDateDayJs(minDate);
  var parsedMaxDate = tryParseDateDayJs(maxDate);
  var parsedMinDateTime = tryParseDateDayJs(minDateTime);
  var parsedMaxDateTime = tryParseDateDayJs(maxDateTime);
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
    required: floatingLabel ? required : undefined,
    label: floatingLabel ? label : undefined,
    placeholder: placeholder,
    slotProps: {
      textField: {
        size: size !== null && size !== void 0 ? size : undefined,
        variant: variant !== null && variant !== void 0 ? variant : undefined,
        color: color !== null && color !== void 0 ? color : undefined,
        required: !!(floatingLabel && required)
      }
    },
    readOnly: readOnly,
    onChange: onChange,
    defaultValue: defaultValue,
    onBlur: onBlur,
    views: !_isEmpty(views) ? views : ['day', 'year'],
    displayWeekNumber: displayWeekNumber,
    format: isValidDayjsFormat(format) ? format : undefined,
    minDate: parsedMinDate,
    maxDate: parsedMaxDate,
    minDateTime: parsedMinDateTime,
    maxDateTime: parsedMaxDateTime
  }, passRest(rest))), hint && !error && /*#__PURE__*/React.createElement(FormHelperText, null, hint), error && /*#__PURE__*/React.createElement(FormHelperText, null, error)));
};

export { MuiGenericDate as M };
