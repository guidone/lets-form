/* LetsForm Generator v0.12.17 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, m as makeClassName, c as makeWidthStyle, b as _isString, p as passRest, t as _omit } from './index-DTpeATkX.js';
import React, { useCallback } from 'react';
import { TextInput } from '@mantine/core';

var _excluded = ["name", "hint", "value", "fullWidth", "width", "submitOnEnter", "error", "onChange", "onBlur", "lfOnEnter", "className"];
var InputText = I18N(function (_ref) {
  var name = _ref.name,
    hint = _ref.hint,
    value = _ref.value,
    fullWidth = _ref.fullWidth,
    width = _ref.width,
    _ref$submitOnEnter = _ref.submitOnEnter,
    submitOnEnter = _ref$submitOnEnter === void 0 ? false : _ref$submitOnEnter,
    error = _ref.error,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    _ref$lfOnEnter = _ref.lfOnEnter,
    lfOnEnter = _ref$lfOnEnter === void 0 ? function () {} : _ref$lfOnEnter,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleKeyUp = useCallback(function (e) {
    return e.keyCode === 13 && lfOnEnter();
  }, [lfOnEnter]);
  var handleChange = useCallback(function (event) {
    return onChange(event.currentTarget.value);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(TextInput, _extends({}, makeClassName('input-text', name, className), {
    value: value,
    style: makeWidthStyle(fullWidth, width),
    description: hint,
    error: _isString(error) ? error : undefined,
    inputWrapperOrder: ['label', 'input', 'description', 'error'],
    onChange: handleChange,
    onBlur: onBlur,
    onKeyUp: submitOnEnter ? handleKeyUp : undefined,
    type: rest.inputType ? rest.inputType : undefined,
    inputmode: rest.inputMode ? rest.inputMode : undefined
  }, passRest(_omit(rest, 'inputType', 'inputMode'))));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded Mantine.InputText');

export { InputText as default };
