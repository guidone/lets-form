/* LetsForm react v0.12.15 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, b as _isString, m as makeClassName, a as _extends, c as makeWidthStyle, p as passRest } from './index-jUXjlxSE.js';
import React, { useCallback } from 'react';
import { R as RequiredIcon } from './index-CSNUrHOc.js';

var _excluded = ["name", "label", "hint", "value", "onChange", "onBlur", "error", "disabled", "readOnly", "required", "size", "rows", "width", "fullWidth", "className"];
var Textarea = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    error = _ref.error,
    disabled = _ref.disabled,
    readOnly = _ref.readOnly,
    required = _ref.required,
    size = _ref.size,
    rows = _ref.rows,
    width = _ref.width,
    fullWidth = _ref.fullWidth,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var hasError = error && _isString(error);
  var handleChange = useCallback(function (e) {
    return onChange(e.target.value);
  }, [onChange]);
  return /*#__PURE__*/React.createElement("div", makeClassName('textarea', name, 'lf-form-react-control-group', className), /*#__PURE__*/React.createElement("label", {
    for: name
  }, label, required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement("textarea", _extends({
    type: "text",
    id: name,
    rows: rows,
    onChange: handleChange,
    onBlur: onBlur,
    className: size && "lf-form-react-input-".concat(size),
    style: makeWidthStyle(fullWidth, width),
    required: error != null,
    disabled: disabled,
    readOnly: readOnly
  }, passRest(rest)), value), hint && !hasError && /*#__PURE__*/React.createElement("div", {
    className: "lf-form-react-message"
  }, hint), hasError && /*#__PURE__*/React.createElement("div", {
    className: "lf-form-react-error-message"
  }, error));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded React.Textarea');

export { Textarea as default };
