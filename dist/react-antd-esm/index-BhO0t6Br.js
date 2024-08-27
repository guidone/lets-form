/* LetsForm react-antd v0.10.5 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, m as makeWidthStyle, p as passRest } from './index-C4UqwSwQ.js';
import React, { useCallback } from 'react';
import { Form, Input } from 'antd';
import 'react-hook-form';

var _excluded = ["name", "label", "hint", "value", "tooltip", "required", "error", "onChange", "onBlur", "width", "fullWidth"];
var TextareaAntd = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    error = _ref.error,
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
    validateStatus: error ? 'error' : undefined,
    valuePropName: null
  }, /*#__PURE__*/React.createElement(Input.TextArea, _extends({
    onChange: handleChange,
    onBlur: onBlur,
    defaultValue: value,
    style: makeWidthStyle(fullWidth, width)
  }, passRest(rest))));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded AntD.Textarea');

export { TextareaAntd as default };
