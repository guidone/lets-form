/* LetsForm react-rsuite5 v0.12.14 - ESM */
import { s as styleInject, _ as _objectWithoutProperties, a as _extends, m as makeClassName, c as makeWidthStyle, b as _isString, p as passRest } from './index-CgEy3rGV.js';
import React from 'react';
import { Form, DatePicker } from 'rsuite';
import { R as RequiredIcon } from './index-HvrDGvq4.js';
import { R as RSuite5FieldControl } from './index-D3BCygDN.js';

var css_248z = ".lf-control-date.lf-full-width .rs-picker-date {\n  width: 100%;\n}";
styleInject(css_248z);

var _excluded = ["name", "label", "hint", "value", "placeholder", "tooltip", "disabled", "readOnly", "required", "fullWidth", "width", "error", "onChange", "onBlur", "appearance", "format", "lfLocale", "className", "component"];
var RSuiteGenericDate = function RSuiteGenericDate(_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    placeholder = _ref.placeholder,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    fullWidth = _ref.fullWidth,
    width = _ref.width,
    error = _ref.error,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    appearance = _ref.appearance,
    format = _ref.format;
    _ref.lfLocale;
    var className = _ref.className,
    component = _ref.component,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Group, _extends({}, makeClassName(component, name, className, {
    'lf-full-width': fullWidth || width != null
  }), {
    style: makeWidthStyle(fullWidth, width)
  }), label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(RSuite5FieldControl, {
    errorMessage: _isString(error) ? error : undefined
  }, /*#__PURE__*/React.createElement(DatePicker, _extends({
    appearance: appearance !== null && appearance !== void 0 ? appearance : undefined,
    name: name,
    format: format || 'yyyy-MM-dd',
    defaultValue: value,
    onChange: onChange,
    readOnly: readOnly,
    onBlur: onBlur,
    disabled: disabled,
    placeholder: placeholder
  }, passRest(rest)))), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
};

export { RSuiteGenericDate as R };
