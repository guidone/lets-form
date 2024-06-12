/* LetsForm react-mantine v0.7.18 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, b as _isString, a as _extends, p as passRest } from './index-CL8UOEQA.js';
import React from 'react';
import { Input, Rating } from '@mantine/core';
import 'react-hook-form';

var _excluded = ["name", "hint", "value", "fullWidth", "width", "submitOnEnter", "error", "onChange", "onBlur", "label", "required", "lfOnEnter"];
var InputText = I18N(function (_ref) {
  var name = _ref.name,
    hint = _ref.hint;
    _ref.value;
    _ref.fullWidth;
    _ref.width;
    _ref.submitOnEnter;
    var error = _ref.error,
    onChange = _ref.onChange;
    _ref.onBlur;
    var label = _ref.label,
    required = _ref.required;
    _ref.lfOnEnter;
    var rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Input.Wrapper, {
    className: "lf-control-rate",
    "data-lf-field-name": name,
    description: hint,
    error: _isString(error) ? error : undefined,
    inputWrapperOrder: ['label', 'input', 'description', 'error'],
    label: label,
    required: required
  }, /*#__PURE__*/React.createElement(Rating, _extends({
    onChange: onChange
  }, passRest(rest))));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded Mantine.Rate');

export { InputText as default };
