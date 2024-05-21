/* LetsForm react-antd v0.7.15 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, m as makeWidthStyle, p as passRest } from './index-BabwANoa.js';
import React from 'react';
import { Form, InputNumber } from 'antd';

var _excluded = ["name", "label", "hint", "value", "size", "placeholder", "showCount", "tooltip", "disabled", "readOnly", "required", "maxLength", "error", "prefix", "postfix", "allowClear", "bordered", "onChange", "onBlur", "width", "fullWidth", "showControl", "min", "max", "step"];
var InputNumberAntd = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    size = _ref.size,
    placeholder = _ref.placeholder;
    _ref.showCount;
    var _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required;
    _ref.maxLength;
    var error = _ref.error,
    prefix = _ref.prefix,
    postfix = _ref.postfix,
    allowClear = _ref.allowClear,
    bordered = _ref.bordered,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    width = _ref.width,
    fullWidth = _ref.fullWidth,
    showControl = _ref.showControl,
    min = _ref.min,
    max = _ref.max,
    step = _ref.step,
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
    validateStatus: error ? 'error' : undefined
  }, /*#__PURE__*/React.createElement(InputNumber, _extends({
    placeholder: placeholder,
    readOnly: readOnly,
    onChange: onChange,
    onBlur: onBlur,
    defaultValue: value,
    size: size,
    prefix: prefix,
    suffix: postfix,
    allowClear: allowClear,
    bordered: bordered,
    disabled: disabled,
    controls: showControl,
    min: min,
    max: max,
    step: step,
    style: makeWidthStyle(fullWidth, width)
  }, passRest(rest))));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded AntD.InputNumber');

export { InputNumberAntd as default };
