/* LetsForm Generator v0.12.16 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, m as makeClassName, g as _defineProperty, b as _isString, a as _extends, p as passRest } from './index-C17qSwW1.js';
import React from 'react';
import { Form, Input } from 'rsuite';
import { R as RequiredIcon } from './index-wUiIMWZM.js';
import { R as RSuite5FieldControl } from './index-DYwALftT.js';
import { C as CommonCurrency } from './index-Cbh7WIAi.js';

var _excluded = ["name", "label", "hint", "value", "tooltip", "required", "error", "className", "lfLocale"];
var Currency = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    error = _ref.error,
    className = _ref.className,
    lfLocale = _ref.lfLocale,
    rest = _objectWithoutProperties(_ref, _excluded);
  // TODO get locale from context

  console.log('current locale', lfLocale);
  return /*#__PURE__*/React.createElement(Form.Group, makeClassName('currency', name, className, _defineProperty({}, "lf-size-".concat(rest.size), rest.size != null)), label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(RSuite5FieldControl, {
    errorMessage: _isString(error) ? error : undefined
  }, /*#__PURE__*/React.createElement(CommonCurrency, _extends({
    defaultValue: value,
    control: Input,
    locale: lfLocale
  }, passRest(rest)))), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded RSuite.Currency');

export { Currency as default };
