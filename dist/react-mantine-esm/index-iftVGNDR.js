/* LetsForm react-mantine v0.12.2 - ESM */
import { _ as _objectWithoutProperties, a as _extends, m as makeWidthStyle, b as _isString, p as passRest, z as _isDate, A as isValidDate } from './index-Ca9mPPZD.js';
import React from 'react';
import { DateTimePicker, DatePickerInput } from '@mantine/dates';

var _excluded = ["hint", "minDate", "maxDate", "error", "onBlur", "fullWidth", "width", "lfLocale", "withTime"];
var tryDate = function tryDate(value) {
  if (_isDate(value)) {
    return value;
  } else if (_isString(value)) {
    var d = new Date(value);
    if (isValidDate(d)) {
      return d;
    }
  }
  return undefined;
};
var MantineGenericDate = function MantineGenericDate(_ref) {
  var hint = _ref.hint,
    minDate = _ref.minDate,
    maxDate = _ref.maxDate,
    error = _ref.error;
    _ref.onBlur;
    var fullWidth = _ref.fullWidth,
    width = _ref.width,
    lfLocale = _ref.lfLocale,
    _ref$withTime = _ref.withTime,
    withTime = _ref$withTime === void 0 ? false : _ref$withTime,
    rest = _objectWithoutProperties(_ref, _excluded);
  var Component = withTime ? DateTimePicker : DatePickerInput;
  return /*#__PURE__*/React.createElement(Component, _extends({
    className: "lf-control-date",
    "data-lf-field-name": name,
    style: makeWidthStyle(fullWidth, width),
    description: hint,
    error: _isString(error) ? error : undefined,
    inputWrapperOrder: ['label', 'input', 'description', 'error'],
    locale: lfLocale,
    minDate: tryDate(minDate),
    maxDate: tryDate(maxDate)
  }, passRest(rest)));
};

export { MantineGenericDate as M };
