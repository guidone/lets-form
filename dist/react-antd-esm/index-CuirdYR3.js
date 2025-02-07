/* LetsForm react-antd v0.12.10 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, k as _isArray, f as _isEmpty, n as _objectSpread2, o as _defineProperty, a as _extends, p as passRest, e as i18nOptions } from './index-CUzwYSlb.js';
import React from 'react';
import { Form, Slider } from 'antd';

var _excluded = ["name", "label", "hint", "value", "size", "placeholder", "showCount", "tooltip", "disabled", "readOnly", "required", "keyboard", "dots", "min", "max", "step", "reverse", "tooltipOpen", "tooltipPlacement", "error", "onChange", "onBlur", "width", "marks", "included", "className"];
var SliderAnt = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value;
    _ref.size;
    _ref.placeholder;
    _ref.showCount;
    var _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    keyboard = _ref.keyboard,
    dots = _ref.dots,
    min = _ref.min,
    max = _ref.max,
    step = _ref.step,
    reverse = _ref.reverse,
    tooltipOpen = _ref.tooltipOpen,
    tooltipPlacement = _ref.tooltipPlacement,
    error = _ref.error,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur;
    _ref.width;
    var marks = _ref.marks,
    included = _ref.included,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var antdMarks = undefined;
  if (_isArray(marks) && !_isEmpty(marks)) {
    antdMarks = marks.reduce(function (accumulator, value) {
      return _objectSpread2(_objectSpread2({}, accumulator), {}, _defineProperty({}, value.value, value.label));
    }, {});
  }
  return /*#__PURE__*/React.createElement(Form.Item, _extends({}, makeClassName('slider', name, className), {
    label: label,
    name: name,
    help: error != null ? error : hint && !tooltip ? hint : undefined,
    required: required,
    tooltip: tooltip && hint,
    hasFeedback: error != null,
    validateStatus: error ? 'error' : undefined,
    valuePropName: null
  }), /*#__PURE__*/React.createElement(Slider, _extends({
    readOnly: readOnly,
    included: included,
    onChange: onChange,
    onBlur: onBlur,
    defaultValue: value,
    disabled: disabled,
    keyboard: keyboard,
    dots: dots,
    min: min,
    max: max,
    step: step,
    reverse: reverse,
    marks: antdMarks,
    tooltip: {
      open: tooltipOpen === null ? undefined : tooltipOpen,
      placement: tooltipPlacement
    }
  }, passRest(rest))));
}, ['label', 'hint'], {
  marks: i18nOptions
});
lfLog('Loaded AntD.Slider');

export { SliderAnt as default };
