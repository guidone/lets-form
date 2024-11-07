/* LetsForm Generator v0.11.5 - ESM */
import { s as styleInject, I as I18N, l as lfLog, _ as _isString } from './index-C0Shetui.js';
import React from 'react';
import { Form, TagInput } from 'rsuite';
import { R as RequiredIcon } from './index-D_hb6Isy.js';
import { R as RSuite5FieldControl } from './index-eb90nghx.js';
import 'react-hook-form';

var css_248z = ".lf-control-input-tag .rs-picker-input {\n  min-width: 120px;\n}";
styleInject(css_248z);

var InputTag = I18N(function (_ref) {
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
    trigger = _ref.trigger,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur;
  return /*#__PURE__*/React.createElement(Form.Group, {
    "data-lf-field-name": name,
    className: "lf-control-input-tag"
  }, label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(RSuite5FieldControl, {
    errorMessage: _isString(error) ? error : undefined
  }, /*#__PURE__*/React.createElement(TagInput, {
    name: name,
    value: value,
    onChange: onChange,
    onBlur: onBlur,
    disabled: disabled,
    size: size,
    trigger: trigger,
    readOnly: readOnly
  })), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded RSuite5.InputTag');

export { InputTag as default };
