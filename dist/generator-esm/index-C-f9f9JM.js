/* LetsForm Generator v0.7.15 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, _ as _isString, b as _extends, m as makeWidthStyle, p as passRest } from './index-BlDYFeHM.js';
import React__default, { useCallback } from 'react';
import { R as RequiredIcon } from './index-BALQq0mg.js';

var _excluded = ["name", "label", "hint", "value", "onChange", "onBlur", "error", "disabled", "readOnly", "required", "size", "rows", "width", "fullWidth"];
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
    rest = _objectWithoutProperties(_ref, _excluded);
  var hasError = error && _isString(error);
  var handleChange = useCallback(function (e) {
    return onChange(e.target.value);
  }, [onChange]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "lf-control-textarea lf-form-react-control-group",
    "data-lf-field-name": name
  }, /*#__PURE__*/React__default.createElement("label", {
    for: name
  }, label, required && /*#__PURE__*/React__default.createElement(RequiredIcon, null)), /*#__PURE__*/React__default.createElement("textarea", _extends({
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
  }, passRest(rest)), value), hint && !hasError && /*#__PURE__*/React__default.createElement("div", {
    className: "lf-form-react-message"
  }, hint), hasError && /*#__PURE__*/React__default.createElement("div", {
    className: "lf-form-react-error-message"
  }, error));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded React.Textarea');

export { Textarea as default };
