/* LetsForm Generator v0.7.12 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, _ as _isString, b as _extends, m as makeWidthStyle, p as passRest, e as classNames, g as _defineProperty } from './index-DRF8thTp.js';
import React__default from 'react';
import Form from 'rsuite/Form';
import Input from 'rsuite/Input';
import { R as RequiredIcon } from './index-qy17-i57.js';
import { R as RSuite5FieldControl } from './index-Cpj1TaZx.js';
import 'rsuite/Whisper';
import 'rsuite/Popover';

var _excluded = ["name", "label", "hint", "value", "size", "placeholder", "tooltip", "disabled", "readOnly", "required", "error", "onChange", "onBlur", "fullWidth", "width", "rows"];
var ControlTextare = function ControlTextare(props) {
  return /*#__PURE__*/React__default.createElement(Input, _extends({
    as: "textarea"
  }, props));
};
var Textarea = I18N(function (_ref) {
  var _classNames;
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
    rest = _objectWithoutProperties(_ref, _excluded);
  var inner = /*#__PURE__*/React__default.createElement(RSuite5FieldControl, {
    errorMessage: _isString(error) ? error : undefined
  }, /*#__PURE__*/React__default.createElement(ControlTextare, _extends({
    name: name,
    rows: rows,
    value: value,
    size: size,
    onChange: onChange,
    onBlur: onBlur,
    disabled: disabled,
    placeholder: placeholder,
    readOnly: readOnly,
    errorMessage: _isString(error) ? error : undefined,
    style: makeWidthStyle(fullWidth, width)
  }, passRest(rest))));
  return /*#__PURE__*/React__default.createElement(Form.Group, {
    className: classNames('lf-control-textarea', (_classNames = {}, _defineProperty(_classNames, "lf-size-".concat(size), size != null), _defineProperty(_classNames, 'lf-full-width', fullWidth || width != null), _classNames)),
    "data-lf-field-name": name,
    style: makeWidthStyle(fullWidth, width)
  }, label && /*#__PURE__*/React__default.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React__default.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React__default.createElement(RequiredIcon, null)), inner, hint && !tooltip && /*#__PURE__*/React__default.createElement(Form.HelpText, null, hint));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded RSuite5.Textarea');

export { Textarea as default };
