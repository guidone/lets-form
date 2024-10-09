/* LetsForm Generator v0.11.1 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, b as _extends, m as makeWidthStyle, p as passRest, _ as _isString, r as _isEmpty } from './index-VMY6Gm-l.js';
import React, { useCallback } from 'react';
import Form from 'react-bootstrap/Form';
import { R as RequiredIcon } from './index-Dz8vM04U.js';
import 'react-hook-form';

var _excluded = ["name", "label", "hint", "value", "onChange", "onBlur", "size", "disabled", "readOnly", "error", "required", "rows", "placeholder", "width", "fullWidth"];

// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

var Textarea = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    size = _ref.size,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    error = _ref.error,
    required = _ref.required,
    rows = _ref.rows,
    placeholder = _ref.placeholder,
    width = _ref.width,
    fullWidth = _ref.fullWidth,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    onChange(e.target.value);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(Form.Group, {
    className: "lf-control-input-text",
    "data-lf-field-name": name
  }, /*#__PURE__*/React.createElement(Form.Label, null, label, required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(Form.Control, _extends({
    name: name,
    as: "textarea",
    rows: rows,
    value: value,
    onChange: handleChange,
    size: size,
    placeholder: placeholder,
    onBlur: onBlur,
    disabled: disabled,
    readOnly: readOnly,
    isInvalid: error != null,
    style: makeWidthStyle(fullWidth, width)
  }, passRest(rest))), hint && !error && /*#__PURE__*/React.createElement(Form.Text, null, hint), _isString(error) && !_isEmpty(error) && /*#__PURE__*/React.createElement(Form.Control.Feedback, {
    type: "invalid"
  }, error));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded ReactBootrap.Textarea');

export { Textarea as default };
