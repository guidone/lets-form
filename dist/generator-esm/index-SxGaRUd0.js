/* LetsForm Generator v0.13.0 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, b as _isString, a as _extends, m as makeClassName, p as passRest } from './index-Df19TMKV.js';
import React from 'react';
import { Form, Rate } from 'antd';

var _excluded = ["name", "label", "hint", "value", "size", "placeholder", "showCount", "count", "tooltip", "disabled", "readOnly", "required", "maxLength", "error", "prefix", "postfix", "allowClear", "allowHalf", "bordered", "onChange", "onBlur", "width", "tooltips", "className"];
var RateAntd = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value;
    _ref.size;
    _ref.placeholder;
    _ref.showCount;
    var count = _ref.count,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required;
    _ref.maxLength;
    var error = _ref.error;
    _ref.prefix;
    _ref.postfix;
    var allowClear = _ref.allowClear,
    allowHalf = _ref.allowHalf;
    _ref.bordered;
    var onChange = _ref.onChange,
    onBlur = _ref.onBlur;
    _ref.width;
    var tooltips = _ref.tooltips,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var mappedTooltips = (tooltips !== null && tooltips !== void 0 ? tooltips : []).map(function (item) {
    if (_isString(item)) {
      return item;
    } else if (_isString(item.tooltip)) {
      return item.tooltip;
    }
    return null;
  }).filter(Boolean);
  return /*#__PURE__*/React.createElement(Form.Item, _extends({}, makeClassName('rate', name, className), {
    label: label,
    name: name,
    help: error != null ? error : hint && !tooltip ? hint : undefined,
    required: required,
    tooltip: tooltip && hint,
    hasFeedback: error != null,
    validateStatus: error ? 'error' : undefined,
    valuePropName: null
  }), /*#__PURE__*/React.createElement(Rate, _extends({
    defaultValue: value,
    disabled: disabled,
    allowClear: allowClear,
    readOnly: readOnly,
    allowHalf: allowHalf,
    onChange: onChange,
    onBlur: onBlur,
    count: count,
    tooltips: mappedTooltips
  }, passRest(rest))));
}, ['label', 'hint']);
lfLog('Loaded AntD.Rate');

export { RateAntd as default };
