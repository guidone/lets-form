/* LetsForm react-mantine v0.7.10 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, b as _isString, a as _extends, p as passRest, B as _objectSpread2 } from './index-DLATXBUL.js';
import React from 'react';
import { Input, Slider } from '@mantine/core';

var _excluded = ["name", "hint", "error", "onChange", "onBlur", "label", "required", "lfOnEnter"];
var SliderMantine = I18N(function (_ref) {
  var name = _ref.name,
    hint = _ref.hint,
    error = _ref.error,
    onChange = _ref.onChange;
    _ref.onBlur;
    var label = _ref.label,
    required = _ref.required;
    _ref.lfOnEnter;
    var rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Input.Wrapper, {
    className: "lf-control-slider",
    "data-lf-field-name": name,
    description: hint,
    error: _isString(error) ? error : undefined,
    inputWrapperOrder: ['label', 'input', 'description', 'error'],
    label: label,
    required: required
  }, /*#__PURE__*/React.createElement(Slider, _extends({
    onChange: onChange
  }, passRest(rest))));
}, ['label', 'hint', 'placeholder'], {
  marks: function marks(value, i18n) {
    return (Array.isArray(value) ? value : []).map(function (value) {
      return _objectSpread2(_objectSpread2({}, value), {}, {
        label: i18n(value.label)
      });
    });
  }
});
lfLog('Loaded Mantine.Slider');

export { SliderMantine as default };