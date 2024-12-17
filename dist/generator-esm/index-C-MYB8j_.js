/* LetsForm Generator v0.11.6 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, b as _extends, m as makeWidthStyle, p as passRest } from './index-BL-8Kev-.js';
import React from 'react';
import { Form, InputNumber } from 'antd';
import { T as TextOrIcon } from './index-DhlFFsTh.js';
import 'react-hook-form';

var _excluded = ["name", "label", "hint", "value", "showCount", "tooltip", "required", "maxLength", "error", "onChange", "onBlur", "width", "fullWidth", "showControl", "prefix", "postfix"];
var InputNumberAntd = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value;
    _ref.showCount;
    var _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required;
    _ref.maxLength;
    var error = _ref.error,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    width = _ref.width,
    fullWidth = _ref.fullWidth,
    showControl = _ref.showControl,
    prefix = _ref.prefix,
    postfix = _ref.postfix,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Item, {
    label: label,
    name: name,
    "data-lf-field-name": name,
    className: "lf-control-input-number",
    help: error != null ? error : hint && !tooltip ? hint : undefined,
    required: required,
    tooltip: tooltip && hint,
    hasFeedback: error != null,
    validateStatus: error ? 'error' : undefined,
    valuePropName: null
  }, /*#__PURE__*/React.createElement(InputNumber, _extends({
    onChange: onChange,
    onBlur: onBlur,
    defaultValue: value,
    controls: showControl,
    style: makeWidthStyle(fullWidth, width),
    prefix: TextOrIcon(prefix),
    suffix: TextOrIcon(postfix)
  }, passRest(rest))));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded AntD.InputNumber');

export { InputNumberAntd as default };
