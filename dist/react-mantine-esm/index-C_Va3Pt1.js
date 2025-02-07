/* LetsForm react-mantine v0.12.9 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, m as makeClassName, c as _isString, p as passRest } from './index-BU_pAxnB.js';
import React from 'react';
import { Input, Rating } from '@mantine/core';

var _excluded = ["name", "hint", "value", "fullWidth", "width", "submitOnEnter", "error", "onChange", "onBlur", "label", "required", "lfOnEnter", "className"];
var InputText = I18N(function (_ref) {
  var name = _ref.name,
    hint = _ref.hint,
    value = _ref.value;
    _ref.fullWidth;
    _ref.width;
    _ref.submitOnEnter;
    var error = _ref.error,
    onChange = _ref.onChange;
    _ref.onBlur;
    var label = _ref.label,
    required = _ref.required;
    _ref.lfOnEnter;
    var className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Input.Wrapper, _extends({}, makeClassName('rate', name, className), {
    description: hint,
    error: _isString(error) ? error : undefined,
    inputWrapperOrder: ['label', 'input', 'description', 'error'],
    label: label,
    required: required
  }), /*#__PURE__*/React.createElement(Rating, _extends({
    onChange: onChange,
    defaultValue: value
  }, passRest(rest))));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded Mantine.Rate');

export { InputText as default };
