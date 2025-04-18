/* LetsForm react-rsuite5 v0.13.0 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, b as _isString, a as _extends, c as makeWidthStyle, p as passRest, m as makeClassName, k as _defineProperty } from './index-3aHKanhW.js';
import React from 'react';
import { Form, Input } from 'rsuite';
import { R as RequiredIcon } from './index-DGoeffJz.js';
import { R as RSuite5FieldControl } from './index-BQ2vPUSv.js';

var _excluded = ["name", "label", "hint", "value", "size", "placeholder", "tooltip", "disabled", "readOnly", "required", "error", "onChange", "onBlur", "fullWidth", "width", "rows", "className"];
var ControlTextare = function ControlTextare(props) {
  return /*#__PURE__*/React.createElement(Input, _extends({
    as: "textarea"
  }, props));
};
var Textarea = I18N(function (_ref) {
  var _makeClassName;
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    size = _ref.size,
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
    fullWidth = _ref.fullWidth,
    width = _ref.width,
    _ref$rows = _ref.rows,
    rows = _ref$rows === void 0 ? 10 : _ref$rows,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var inner = /*#__PURE__*/React.createElement(RSuite5FieldControl, {
    errorMessage: _isString(error) ? error : undefined
  }, /*#__PURE__*/React.createElement(ControlTextare, _extends({
    name: name,
    rows: rows,
    value: value,
    size: size,
    onChange: onChange,
    onBlur: onBlur,
    disabled: disabled,
    placeholder: placeholder,
    readOnly: readOnly,
    style: makeWidthStyle(fullWidth, width)
  }, passRest(rest))));
  return /*#__PURE__*/React.createElement(Form.Group, _extends({}, makeClassName('textarea', name, className, (_makeClassName = {}, _defineProperty(_makeClassName, "lf-size-".concat(size), size != null), _defineProperty(_makeClassName, 'lf-full-width', fullWidth || width != null), _makeClassName)), {
    style: makeWidthStyle(fullWidth, width)
  }), label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), inner, hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded RSuite5.Textarea');

export { Textarea as default };
