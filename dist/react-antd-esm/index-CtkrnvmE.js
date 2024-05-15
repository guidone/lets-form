/* LetsForm react-antd v0.7.13-beta-10 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, d as _isString } from './index-CVq0bQaT.js';
import React from 'react';
import { Form, Rate } from 'antd';
import 'react-hook-form';

var _excluded = ["name", "label", "hint", "value", "size", "placeholder", "showCount", "count", "tooltip", "disabled", "readOnly", "required", "maxLength", "error", "prefix", "postfix", "allowClear", "allowHalf", "bordered", "onChange", "onBlur", "width", "tooltips"];
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
    var tooltips = _ref.tooltips;
    _objectWithoutProperties(_ref, _excluded);
  var mappedTooltips = (tooltips !== null && tooltips !== void 0 ? tooltips : []).map(function (item) {
    if (_isString(item)) {
      return item;
    } else if (_isString(item.tooltip)) {
      return item.tooltip;
    }
    return null;
  }).filter(Boolean);
  return /*#__PURE__*/React.createElement(Form.Item, {
    "data-lf-field-name": name,
    className: "lf-control-rate",
    label: label,
    name: name,
    help: error != null ? error : hint && !tooltip ? hint : undefined,
    required: required,
    tooltip: tooltip && hint,
    hasFeedback: error != null,
    validateStatus: error ? 'error' : undefined
  }, /*#__PURE__*/React.createElement(Rate, {
    defaultValue: value,
    disabled: disabled,
    allowClear: allowClear,
    readOnly: readOnly,
    allowHalf: allowHalf,
    onChange: onChange,
    onBlur: onBlur,
    count: count,
    tooltips: mappedTooltips
  }));
}, ['label', 'hint']);
lfLog('Loaded AntD.Rate');

export { RateAntd as default };
