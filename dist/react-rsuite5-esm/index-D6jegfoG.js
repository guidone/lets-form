/* LetsForm react-rsuite5 v0.7.13-beta-10 - ESM */
import { a as _objectWithoutProperties, _ as _isString, b as _extends, p as passRest } from './index-BzPDww6W.js';
import React from 'react';
import Form from 'rsuite/Form';
import DatePicker from 'rsuite/DatePicker';
import { R as RequiredIcon } from './index-DmYEEntQ.js';
import { R as RSuite5FieldControl } from './index-BBI3t8s5.js';

var _excluded = ["name", "label", "hint", "value", "placeholder", "tooltip", "disabled", "readOnly", "required", "error", "onChange", "onBlur", "appearance", "format", "lfLocale"];
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
    error = _ref.error,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    appearance = _ref.appearance,
    format = _ref.format;
    _ref.lfLocale;
    var rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Group, {
    "data-lf-field-name": name,
    className: "lf-control-date"
  }, label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
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
    errorMessage: _isString(error) ? error : undefined,
    disabled: disabled,
    placeholder: placeholder
  }, passRest(rest)))), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
};

export { RSuiteGenericDate as R };
