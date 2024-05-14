/* LetsForm Generator v0.7.12 - ESM */
import { I as I18N, l as lfLog, _ as _isString } from './index-DRF8thTp.js';
import React__default from 'react';
import Form from 'rsuite/Form';
import Rate from 'rsuite/Rate';
import { R as RequiredIcon } from './index-qy17-i57.js';
import { R as RSuite5FieldControl } from './index-Cpj1TaZx.js';
import 'rsuite/Whisper';
import 'rsuite/Popover';

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
    onBlur = _ref.onBlur;
  return /*#__PURE__*/React__default.createElement(Form.Group, {
    controlId: name,
    className: "lets-form-input-tag"
  }, label && /*#__PURE__*/React__default.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React__default.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React__default.createElement(RequiredIcon, null)), /*#__PURE__*/React__default.createElement(RSuite5FieldControl, {
    errorMessage: _isString(error) ? error : undefined
  }, /*#__PURE__*/React__default.createElement(Rate, {
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
    readOnly: readOnly,
    errorMessage: _isString(error) ? error : undefined
  })), hint && !tooltip && /*#__PURE__*/React__default.createElement(Form.HelpText, null, hint));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded RSuite5.Rate');

export { RateRSuite as default };
