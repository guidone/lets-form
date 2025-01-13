/* LetsForm react-mantine v0.16.6 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, c as _isString, p as passRest, e as _objectSpread2 } from './index-502qOF8v.js';
import React from 'react';
import { Input, Slider } from '@mantine/core';
import 'react-hook-form';

var _excluded = ["name", "hint", "error", "onChange", "onBlur", "label", "required", "className", "lfOnEnter"];
var SliderMantine = I18N(function (_ref) {
  var name = _ref.name,
    hint = _ref.hint,
    error = _ref.error,
    onChange = _ref.onChange;
    _ref.onBlur;
    var label = _ref.label,
    required = _ref.required,
    className = _ref.className;
    _ref.lfOnEnter;
    var rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Input.Wrapper, _extends({}, makeClassName('slider', name, className), {
    description: hint,
    error: _isString(error) ? error : undefined,
    inputWrapperOrder: ['label', 'input', 'description', 'error'],
    label: label,
    required: required
  }), /*#__PURE__*/React.createElement(Slider, _extends({
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
