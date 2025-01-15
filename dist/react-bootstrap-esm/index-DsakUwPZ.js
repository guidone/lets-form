/* LetsForm react-bootstrap v0.12.6 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, m as makeClassName, a as _extends, p as passRest, b as _isString, c as _isEmpty } from './index-BXuCsvqI.js';
import React, { useCallback } from 'react';
import Form from 'react-bootstrap/Form';
import { R as RequiredIcon } from './index-D129WsmY.js';
import 'react-hook-form';

var _excluded = ["name", "label", "hint", "value", "onChange", "onBlur", "disabled", "readOnly", "error", "required", "placeholder", "min", "max", "step", "className"];

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
    step = _ref.step,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    onChange(e.target.value);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(Form.Group, makeClassName('slider', name, className), /*#__PURE__*/React.createElement(Form.Label, null, label, required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(Form.Range, _extends({
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
  }, passRest(rest))), hint && !error && /*#__PURE__*/React.createElement(Form.Text, null, hint), _isString(error) && !_isEmpty(error) && /*#__PURE__*/React.createElement(Form.Control.Feedback, {
    type: "invalid"
  }, error));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded ReactBootrap.Slider');

export { Slider as default };
