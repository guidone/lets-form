/* LetsForm Generator v0.7.12 - ESM */
import { I as I18N, l as lfLog, _ as _isString, r as _isEmpty } from './index-DRF8thTp.js';
import React__default, { useCallback } from 'react';
import { a as Form } from './Form-BHWv5NM5.js';
import { R as RequiredIcon } from './index-qy17-i57.js';
import './createWithBsPrefix-Dm2davyO.js';
import 'prop-types';

// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

var Slider = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    error = _ref.error,
    required = _ref.required,
    placeholder = _ref.placeholder,
    min = _ref.min,
    max = _ref.max,
    step = _ref.step;
  var handleChange = useCallback(function (e) {
    onChange(e.target.value);
  }, [onChange]);
  return /*#__PURE__*/React__default.createElement(Form.Group, {
    className: "lf-control-input-text",
    "data-lf-field-name": name
  }, /*#__PURE__*/React__default.createElement(Form.Label, null, label, required && /*#__PURE__*/React__default.createElement(RequiredIcon, null)), /*#__PURE__*/React__default.createElement(Form.Range, {
    name: name,
    defaultValue: value,
    onChange: handleChange,
    min: min,
    max: max,
    step: step,
    placeholder: placeholder,
    onBlur: onBlur,
    disabled: disabled,
    readOnly: readOnly,
    isInvalid: error != null
  }), hint && !error && /*#__PURE__*/React__default.createElement(Form.Text, null, hint), _isString(error) && !_isEmpty(error) && /*#__PURE__*/React__default.createElement(Form.Control.Feedback, {
    type: "invalid"
  }, error));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded ReactBootrap.Slider');

export { Slider as default };
