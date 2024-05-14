/* LetsForm Generator v0.7.12 - ESM */
import { a as _objectWithoutProperties, b as _extends, m as makeWidthStyle, p as passRest } from './index-DRF8thTp.js';
import React__default from 'react';
import { Form, DatePicker } from 'antd';
import { d as dayjs } from './dayjs.min-D0DJWlqb.js';

var _excluded = ["name", "label", "hint", "value", "tooltip", "required", "error", "fullWidth", "width", "lfLocale"];
var AntdGenericDate = function AntdGenericDate(_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    error = _ref.error,
    fullWidth = _ref.fullWidth,
    width = _ref.width,
    lfLocale = _ref.lfLocale,
    rest = _objectWithoutProperties(_ref, _excluded);
  // set locale for dates
  var defaultValue = dayjs(value);
  if (defaultValue && lfLocale) {
    defaultValue = defaultValue.locale(lfLocale);
  }
  return /*#__PURE__*/React__default.createElement(Form.Item, {
    label: label
    // not needed, breaks in case date is set
    //name={name}
    ,
    "data-lf-field-name": name,
    help: error != null ? error : hint && !tooltip ? hint : undefined,
    required: required,
    tooltip: tooltip && hint,
    hasFeedback: error != null,
    validateStatus: error ? 'error' : undefined
  }, /*#__PURE__*/React__default.createElement(DatePicker, _extends({
    key: "".concat(name, "-").concat(lfLocale !== null && lfLocale !== void 0 ? lfLocale : '') // add key or will not re-render if locale is changed
    ,
    defaultValue: defaultValue,
    style: makeWidthStyle(fullWidth, width)
  }, passRest(rest))));
};

export { AntdGenericDate as A };
