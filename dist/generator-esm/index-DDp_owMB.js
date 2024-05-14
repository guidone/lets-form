/* LetsForm Generator v0.7.13-beta-9 - ESM */
import { a as _objectWithoutProperties, _ as _isString, b as _extends, C as _isNumber, r as _isEmpty, K as isValidDayjsFormat, p as passRest } from './index-BK4tt4jT.js';
import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { d as dayjs } from './dayjs.min-ublHporg.js';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

var _excluded = ["name", "label", "hint", "value", "onChange", "onBlur", "error", "className", "disabled", "readOnly", "required", "fullWidth", "variant", "placeholder", "width", "disableFuture", "disableHighlightToday", "disableOpenPicker", "disablePast", "displayWeekNumber", "format", "maxDate", "minDate", "reduceAnimations", "showDaysOutsideCurrentMonth", "lfLocale", "datetime", "views", "component"];

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
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    required = _ref.required,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
    variant = _ref.variant,
    placeholder = _ref.placeholder,
    width = _ref.width,
    disableFuture = _ref.disableFuture,
    disableHighlightToday = _ref.disableHighlightToday,
    disableOpenPicker = _ref.disableOpenPicker,
    disablePast = _ref.disablePast,
    displayWeekNumber = _ref.displayWeekNumber,
    format = _ref.format,
    maxDate = _ref.maxDate,
    minDate = _ref.minDate,
    reduceAnimations = _ref.reduceAnimations,
    showDaysOutsideCurrentMonth = _ref.showDaysOutsideCurrentMonth,
    lfLocale = _ref.lfLocale,
    _ref$datetime = _ref.datetime,
    datetime = _ref$datetime === void 0 ? false : _ref$datetime,
    views = _ref.views;
    _ref.component;
    var rest = _objectWithoutProperties(_ref, _excluded);
  var localeCode = lfLocale && _isString(lfLocale) ? lfLocale.split('-')[0] : undefined;
  var Component = datetime ? DateTimePicker : DatePicker;

  // set locale for dates
  var defaultValue = dayjs(value);
  if (defaultValue && localeCode) {
    defaultValue = defaultValue.locale(localeCode);
  }
  return /*#__PURE__*/React.createElement("div", {
    "data-lf-field-name": name,
    className: className
  }, /*#__PURE__*/React.createElement(FormControl, {
    required: required,
    error: error != null,
    fullWidth: fullWidth
  }, /*#__PURE__*/React.createElement(Component, _extends({
    placeholder: placeholder,
    readOnly: readOnly,
    required: required,
    style: _isNumber(width) && !fullWidth ? {
      width: "".concat(parseInt(width, 10), "px")
    } : undefined,
    onChange: onChange,
    defaultValue: defaultValue,
    variant: variant !== null && variant !== void 0 ? variant : undefined,
    onBlur: onBlur,
    disabled: disabled,
    label: label,
    views: !_isEmpty(views) ? views : ['day', 'year'],
    disableFuture: disableFuture,
    disableHighlightToday: disableHighlightToday,
    disableOpenPicker: disableOpenPicker,
    disablePast: disablePast,
    displayWeekNumber: displayWeekNumber,
    format: isValidDayjsFormat(format) ? format : undefined,
    maxDate: maxDate && dayjs(maxDate),
    minDate: minDate && dayjs(minDate),
    reduceAnimations: reduceAnimations,
    showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth
  }, passRest(rest))), hint && !error && /*#__PURE__*/React.createElement(FormHelperText, null, hint), error && /*#__PURE__*/React.createElement(FormHelperText, null, error)));
};

export { MuiGenericDate as M };
