/* LetsForm Generator v0.11.6 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, _ as _isString, f as filterOptions, H as _toConsumableArray, b as _extends, m as makeWidthStyle, p as passRest, i as i18nOptions } from './index-BL-8Kev-.js';
import React, { useCallback } from 'react';
import { R as RequiredIcon } from './index-DxC-z_D-.js';
import 'react-hook-form';

var _excluded = ["name", "lfLocale", "label", "hint", "value", "onChange", "onBlur", "error", "disabled", "placeholder", "readOnly", "required", "size", "width", "fullWidth", "options", "filterValue", "filterKey"];
var Select = I18N(function (_ref) {
  var _filterOptions;
  var name = _ref.name;
    _ref.lfLocale;
    var label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    error = _ref.error,
    disabled = _ref.disabled,
    placeholder = _ref.placeholder,
    readOnly = _ref.readOnly,
    required = _ref.required;
    _ref.size;
    var width = _ref.width,
    fullWidth = _ref.fullWidth,
    options = _ref.options,
    filterValue = _ref.filterValue,
    filterKey = _ref.filterKey,
    rest = _objectWithoutProperties(_ref, _excluded);
  var hasError = error && _isString(error);
  var handleChange = useCallback(function (e) {
    return onChange(e.target.value === '' ? null : e.target.value);
  }, [onChange]);
  var opts = (_filterOptions = filterOptions(options, filterValue, filterKey)) !== null && _filterOptions !== void 0 ? _filterOptions : [];
  if (placeholder) {
    opts = [{
      value: '',
      label: placeholder
    }].concat(_toConsumableArray(opts));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-control-select lf-form-react-control-group",
    "data-lf-field-name": name
  }, /*#__PURE__*/React.createElement("label", {
    for: name
  }, label, required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement("select", _extends({
    id: name,
    value: value,
    onChange: handleChange,
    onBlur: onBlur,
    placeholder: placeholder,
    style: makeWidthStyle(fullWidth, width),
    disabled: disabled,
    readOnly: readOnly
  }, passRest(rest)), opts.map(function (option) {
    return /*#__PURE__*/React.createElement("option", {
      key: option.value,
      value: option.value
    }, option.label);
  })), hint && !hasError && /*#__PURE__*/React.createElement("div", {
    className: "lf-form-react-message"
  }, hint), hasError && /*#__PURE__*/React.createElement("div", {
    className: "lf-form-react-error-message"
  }, error));
}, ['label', 'hint', 'placeholder'], {
  options: i18nOptions
});
lfLog('Loaded React.Select');

export { Select as default };
