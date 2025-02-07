/* LetsForm Generator v0.12.9 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, m as makeClassName, c as makeWidthStyle, p as passRest } from './index-C3mTkrR6.js';
import React from 'react';
import { Form, InputNumber } from 'antd';
import { T as TextOrIcon } from './index-DK2fJMU7.js';

var _excluded = ["name", "label", "hint", "value", "showCount", "tooltip", "required", "maxLength", "error", "onChange", "onBlur", "width", "fullWidth", "showControl", "prefix", "postfix", "className"];
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
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Item, _extends({
    label: label,
    name: name
  }, makeClassName('input-number', name, className), {
    help: error != null ? error : hint && !tooltip ? hint : undefined,
    required: required,
    tooltip: tooltip && hint,
    hasFeedback: error != null,
    validateStatus: error ? 'error' : undefined,
    valuePropName: null
  }), /*#__PURE__*/React.createElement(InputNumber, _extends({
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
