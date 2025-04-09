/* LetsForm Generator v0.12.17 - ESM */
import { _ as _objectWithoutProperties, b as _isString, m as makeClassName, a as _extends, p as passRest } from './index-DTpeATkX.js';
import React from 'react';
import { R as RequiredIcon } from './index-CS0jucl0.js';
import { C as CommonCurrency } from './index-BcVjBt1M.js';

var _excluded = ["name", "label", "lfLocale", "hint", "value", "error", "className", "required"];
var ReactInput = function ReactInput(props) {
  return /*#__PURE__*/React.createElement("input", _extends({
    type: "text"
  }, props));
};
var Currency = function Currency(_ref) {
  var name = _ref.name,
    label = _ref.label,
    lfLocale = _ref.lfLocale,
    hint = _ref.hint,
    value = _ref.value,
    error = _ref.error,
    className = _ref.className,
    required = _ref.required,
    rest = _objectWithoutProperties(_ref, _excluded);
  var hasError = error && _isString(error);
  return /*#__PURE__*/React.createElement("div", makeClassName('currency', name, 'lf-form-react-control-group', className), /*#__PURE__*/React.createElement("label", {
    for: name
  }, label, required && label && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(CommonCurrency, _extends({
    defaultValue: value,
    control: ReactInput,
    locale: lfLocale
  }, passRest(rest))), hint && !hasError && /*#__PURE__*/React.createElement("div", {
    className: "lf-form-react-message"
  }, hint), hasError && /*#__PURE__*/React.createElement("div", {
    className: "lf-form-react-error-message"
  }, error));
};

export { Currency as default };
