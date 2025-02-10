/* LetsForm react-bootstrap v0.12.11 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, f as filterOptions, a as _extends, p as passRest, m as makeClassName, b as _isString, c as _isEmpty, i as i18nOptions } from './index-BKQVI7ny.js';
import React, { useCallback } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { R as RequiredIcon } from './index-Wt6hhzgw.js';

var _excluded = ["name", "label", "hint", "value", "size", "placeholder", "options", "disabled", "readOnly", "required", "error", "onChange", "onBlur", "floatingLabel", "filterKey", "filterValue", "className"];
var Select = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    size = _ref.size,
    placeholder = _ref.placeholder,
    options = _ref.options,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    error = _ref.error,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    _ref$floatingLabel = _ref.floatingLabel,
    floatingLabel = _ref$floatingLabel === void 0 ? false : _ref$floatingLabel,
    filterKey = _ref.filterKey,
    filterValue = _ref.filterValue,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    onChange(e.target.value !== placeholder ? e.target.value : undefined);
  }, [onChange, placeholder]);
  var filteredOptions = filterOptions(options, filterValue, filterKey);
  var inner = /*#__PURE__*/React.createElement(Form.Select, _extends({
    name: name,
    value: value,
    onChange: handleChange,
    size: size,
    placeholder: placeholder,
    onBlur: onBlur,
    disabled: disabled,
    readOnly: readOnly,
    isInvalid: error != null
  }, passRest(rest)), placeholder && /*#__PURE__*/React.createElement("option", null, placeholder), (filteredOptions !== null && filteredOptions !== void 0 ? filteredOptions : []).map(function (_ref2) {
    var value = _ref2.value,
      label = _ref2.label;
    return /*#__PURE__*/React.createElement("option", {
      value: value,
      key: value
    }, label);
  }));
  return /*#__PURE__*/React.createElement(Form.Group, makeClassName('select', name, className), !floatingLabel && /*#__PURE__*/React.createElement(Form.Label, null, label, required && /*#__PURE__*/React.createElement(RequiredIcon, null)), !floatingLabel && inner, floatingLabel && /*#__PURE__*/React.createElement(FloatingLabel, {
    label: label
  }, inner), hint && !error && /*#__PURE__*/React.createElement(Form.Text, null, hint), _isString(error) && !_isEmpty(error) && /*#__PURE__*/React.createElement(Form.Control.Feedback, {
    type: "invalid"
  }, error));
}, ['label', 'hint', 'placeholder'], {
  options: i18nOptions
});
lfLog('Loaded ReactBootrap.Select');

export { Select as default };
