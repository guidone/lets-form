/* LetsForm Generator v0.8.0 - ESM */
import { a as _objectWithoutProperties, _ as _isString, e as classNames, b as _extends, m as makeWidthStyle, p as passRest } from './index-DJvejY4p.js';
import React, { useCallback } from 'react';
import { R as RequiredIcon } from './index-GfN9vNCZ.js';

var _excluded = ["name", "label", "lfLocale", "hint", "value", "onChange", "onBlur", "error", "className", "disabled", "readOnly", "required", "submitOnEnter", "size", "width", "fullWidth", "placeholder", "autocomplete", "inputType", "inputMode", "component", "lfOnEnter"];
var ReactGenericInput = function ReactGenericInput(_ref) {
  var name = _ref.name,
    label = _ref.label,
    lfLocale = _ref.lfLocale,
    hint = _ref.hint,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    error = _ref.error,
    className = _ref.className,
    disabled = _ref.disabled,
    readOnly = _ref.readOnly,
    required = _ref.required,
    _ref$submitOnEnter = _ref.submitOnEnter,
    submitOnEnter = _ref$submitOnEnter === void 0 ? false : _ref$submitOnEnter;
    _ref.size;
    var width = _ref.width,
    fullWidth = _ref.fullWidth,
    placeholder = _ref.placeholder,
    autocomplete = _ref.autocomplete,
    inputType = _ref.inputType,
    inputMode = _ref.inputMode;
    _ref.component;
    var _ref$lfOnEnter = _ref.lfOnEnter,
    lfOnEnter = _ref$lfOnEnter === void 0 ? function () {} : _ref$lfOnEnter,
    rest = _objectWithoutProperties(_ref, _excluded);
  var hasError = error && _isString(error);
  var handleKeyUp = useCallback(function (e) {
    return e.keyCode === 13 && lfOnEnter();
  }, [lfOnEnter]);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(className, 'lf-form-react-control-group'),
    "data-lf-field-name": name
  }, /*#__PURE__*/React.createElement("label", {
    for: name
  }, label, required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement("input", _extends({
    type: inputType,
    lang: lfLocale,
    id: name,
    defaultValue: value,
    onChange: onChange,
    onBlur: onBlur,
    onKeyUp: submitOnEnter ? handleKeyUp : undefined,
    placeholder: placeholder,
    style: makeWidthStyle(fullWidth, width),
    autoComplete: autocomplete,
    inputMode: inputMode,
    disabled: disabled,
    readOnly: readOnly
  }, passRest(rest))), hint && !hasError && /*#__PURE__*/React.createElement("div", {
    className: "lf-form-react-message"
  }, hint), hasError && /*#__PURE__*/React.createElement("div", {
    className: "lf-form-react-error-message"
  }, error));
};

export { ReactGenericInput as R };
