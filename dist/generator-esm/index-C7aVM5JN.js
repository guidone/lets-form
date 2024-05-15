/* LetsForm Generator v0.7.13-beta-10 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, b as _extends, m as makeWidthStyle, p as passRest } from './index-BAXBRwhg.js';
import React, { useCallback } from 'react';
import { Form, Input } from 'antd';
import 'react-hook-form';

var _excluded = ["name", "label", "hint", "value", "size", "placeholder", "showCount", "tooltip", "disabled", "readOnly", "required", "maxLength", "error", "allowClear", "bordered", "onChange", "onBlur", "width", "fullWidth"];
var TextareaAntd = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    size = _ref.size,
    placeholder = _ref.placeholder,
    showCount = _ref.showCount,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    maxLength = _ref.maxLength,
    error = _ref.error,
    allowClear = _ref.allowClear,
    bordered = _ref.bordered,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    width = _ref.width,
    fullWidth = _ref.fullWidth,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    return onChange(e.target.value);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(Form.Item, {
    "data-lf-field-name": name,
    className: "lf-control-textarea",
    label: label,
    name: name,
    help: error != null ? error : hint && !tooltip ? hint : undefined,
    required: required,
    tooltip: tooltip && hint,
    hasFeedback: error != null,
    validateStatus: error ? 'error' : undefined
  }, /*#__PURE__*/React.createElement(Input.TextArea, _extends({
    placeholder: placeholder,
    readOnly: readOnly,
    onChange: handleChange,
    onBlur: onBlur,
    value: value,
    size: size,
    allowClear: allowClear,
    disabled: disabled,
    showCount: showCount,
    maxLength: maxLength,
    bordered: bordered,
    style: makeWidthStyle(fullWidth, width)
  }, passRest(rest))));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded AntD.Textarea');

export { TextareaAntd as default };
