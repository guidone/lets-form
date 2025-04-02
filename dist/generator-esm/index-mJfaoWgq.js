/* LetsForm Generator v0.12.15 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, m as makeClassName, p as passRest } from './index-7LChbcm9.js';
import React from 'react';
import { Form, Input } from 'antd';
import { C as CommonCurrency } from './index-DLcLI_CJ.js';

var _excluded = ["name", "label", "hint", "value", "tooltip", "disabled", "readOnly", "required", "error", "lfLocale", "className"];
var Currency = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip;
    _ref.disabled;
    _ref.readOnly;
    var _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    error = _ref.error,
    lfLocale = _ref.lfLocale,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Item, _extends({}, makeClassName('currency', name, className), {
    label: label,
    name: name,
    help: error != null ? error : hint && !tooltip ? hint : undefined,
    required: required,
    tooltip: tooltip && hint,
    hasFeedback: error != null,
    validateStatus: error ? 'error' : undefined,
    valuePropName: null
  }), /*#__PURE__*/React.createElement(CommonCurrency, _extends({
    defaultValue: value,
    control: Input,
    locale: lfLocale
  }, passRest(rest))));
}, ['label', 'hint']);
lfLog('Loaded AntD.Currency');

export { Currency as default };
