/* LetsForm Generator v0.13.0 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, m as makeClassName, c as makeWidthStyle, b as _isString, p as passRest } from './index-Df19TMKV.js';
import React, { useCallback } from 'react';
import { NumberInput } from '@mantine/core';

var _excluded = ["name", "hint", "value", "submitOnEnter", "error", "fullWidth", "width", "className", "lfOnEnter"];
var MantineNumberInput = I18N(function (_ref) {
  var name = _ref.name,
    hint = _ref.hint,
    value = _ref.value,
    _ref$submitOnEnter = _ref.submitOnEnter,
    submitOnEnter = _ref$submitOnEnter === void 0 ? false : _ref$submitOnEnter,
    error = _ref.error,
    fullWidth = _ref.fullWidth,
    width = _ref.width,
    className = _ref.className,
    _ref$lfOnEnter = _ref.lfOnEnter,
    lfOnEnter = _ref$lfOnEnter === void 0 ? function () {} : _ref$lfOnEnter,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleKeyUp = useCallback(function (e) {
    return e.keyCode === 13 && lfOnEnter();
  }, [lfOnEnter]);
  return /*#__PURE__*/React.createElement(NumberInput, _extends({}, makeClassName('input-number', name, className), {
    style: makeWidthStyle(fullWidth, width),
    value: value,
    name: name,
    description: hint,
    error: _isString(error) ? error : undefined,
    inputWrapperOrder: ['label', 'input', 'description', 'error'],
    onKeyUp: submitOnEnter ? handleKeyUp : undefined
  }, passRest(rest)));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded Mantine.InputNumber');

export { MantineNumberInput as default };
