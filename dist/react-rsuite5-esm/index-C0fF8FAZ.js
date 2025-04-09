/* LetsForm react-rsuite5 v0.12.17 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, m as makeClassName, b as _isString, p as passRest } from './index-BSFGBgwN.js';
import React from 'react';
import { Form, Rate } from 'rsuite';
import { R as RequiredIcon } from './index-BuJ-sFTB.js';
import { R as RSuite5FieldControl } from './index-FOg6Ludt.js';

var _excluded = ["name", "label", "hint", "value", "size", "tooltip", "disabled", "readOnly", "required", "error", "allowHalf", "cleanable", "max", "color", "onChange", "onBlur", "className"];
var RateRSuite = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    size = _ref.size,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    error = _ref.error,
    _ref$allowHalf = _ref.allowHalf,
    allowHalf = _ref$allowHalf === void 0 ? false : _ref$allowHalf,
    _ref$cleanable = _ref.cleanable,
    cleanable = _ref$cleanable === void 0 ? true : _ref$cleanable,
    max = _ref.max,
    color = _ref.color,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Group, _extends({
    controlId: name
  }, makeClassName('rate', name, className)), label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(RSuite5FieldControl, {
    errorMessage: _isString(error) ? error : undefined
  }, /*#__PURE__*/React.createElement(Rate, _extends({
    name: name,
    value: value,
    onChange: onChange,
    onBlur: onBlur,
    disabled: disabled,
    size: size,
    max: max,
    color: color,
    allowHalf: allowHalf,
    cleanable: cleanable,
    readOnly: readOnly
  }, passRest(rest)))), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded RSuite5.Rate');

export { RateRSuite as default };
