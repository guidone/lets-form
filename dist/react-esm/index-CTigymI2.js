/* LetsForm react v0.12.12 - ESM */
import { _ as _objectWithoutProperties, b as _isString, m as makeClassName, a as _extends, p as passRest, I as I18N, l as lfLog } from './index-CkMVpnZ6.js';
import React, { useCallback } from 'react';
import { R as RequiredIcon } from './index-DhFzESQH.js';

var _excluded$1 = ["name", "label", "lfLocale", "className", "inputType", "hint", "value", "defaultValue", "onChange", "onBlur", "error", "disabled", "readOnly", "required"];
var ReactGenericCheckbox = function ReactGenericCheckbox(_ref) {
  var name = _ref.name,
    label = _ref.label;
    _ref.lfLocale;
    var className = _ref.className,
    inputType = _ref.inputType,
    hint = _ref.hint,
    value = _ref.value;
    _ref.defaultValue;
    var onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    error = _ref.error,
    disabled = _ref.disabled,
    readOnly = _ref.readOnly,
    required = _ref.required,
    rest = _objectWithoutProperties(_ref, _excluded$1);
  var hasError = error && _isString(error);
  return /*#__PURE__*/React.createElement("div", makeClassName('checkbox', name, 'lf-form-react-control-group', className), /*#__PURE__*/React.createElement("label", {
    for: name,
    className: "lf-form-react-checkbox"
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: inputType,
    id: name,
    onChange: onChange,
    onBlur: onBlur,
    required: error != null,
    disabled: disabled,
    readOnly: readOnly,
    defaultChecked: value
  }, passRest(rest))), " ", label, " ", required && /*#__PURE__*/React.createElement(RequiredIcon, null)), hint && !hasError && /*#__PURE__*/React.createElement("div", {
    className: "lf-form-react-form-message"
  }, hint), hasError && /*#__PURE__*/React.createElement("div", {
    className: "lf-form-react-error-message"
  }, error));
};

var _excluded = ["onChange"];
var Checkbox = I18N(function (_ref) {
  var onChange = _ref.onChange,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    onChange(e.target.checked);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(ReactGenericCheckbox, _extends({
    inputType: "checkbox",
    onChange: handleChange
  }, rest));
}, ['hint', 'label']);
lfLog('Loaded React.Checkbox');

export { Checkbox as default };
