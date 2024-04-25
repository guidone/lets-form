/* LetsForm React-Mantine v0.7.9-beta-1 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, m as makeWidthStyle, b as _isString, p as passRest } from './index-Tk51PyZK.js';
import React, { useCallback } from 'react';
import { Textarea } from '@mantine/core';

var _excluded = ["name", "label", "hint", "submitOnEnter", "error", "onChange", "fullWidth", "width", "inputType", "lfOnEnter"];
var MantineTextarea = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    _ref$submitOnEnter = _ref.submitOnEnter,
    submitOnEnter = _ref$submitOnEnter === void 0 ? false : _ref$submitOnEnter,
    error = _ref.error,
    onChange = _ref.onChange,
    fullWidth = _ref.fullWidth,
    width = _ref.width,
    inputType = _ref.inputType,
    _ref$lfOnEnter = _ref.lfOnEnter,
    lfOnEnter = _ref$lfOnEnter === void 0 ? function () {} : _ref$lfOnEnter,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleKeyUp = useCallback(function (e) {
    return e.keyCode === 13 && lfOnEnter();
  }, [lfOnEnter]);
  var handleChange = useCallback(function (event) {
    return onChange(event.currentTarget.value);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(Textarea, _extends({
    className: "lf-control-textarea",
    "data-lf-field-name": name,
    name: name,
    style: makeWidthStyle(fullWidth, width),
    label: label,
    description: hint,
    error: _isString(error) ? error : undefined,
    inputWrapperOrder: ['label', 'input', 'description', 'error'],
    onChange: handleChange,
    onKeyUp: submitOnEnter ? handleKeyUp : undefined,
    type: inputType
  }, passRest(rest)));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded Mantine.Textarea');

export { MantineTextarea as default };
