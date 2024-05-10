/* LetsForm react-mantine v0.7.11 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, m as makeWidthStyle, b as _isString, p as passRest } from './index-BYvS7nhc.js';
import React, { useCallback } from 'react';
import { FileInput } from '@mantine/core';

var _excluded = ["name", "hint", "fullWidth", "width", "error", "onChange", "onBlur", "lfOnEnter", "accept"];
var MantineUpload = I18N(function (_ref) {
  var name = _ref.name,
    hint = _ref.hint,
    fullWidth = _ref.fullWidth,
    width = _ref.width,
    error = _ref.error,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur;
    _ref.lfOnEnter;
    var accept = _ref.accept,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (value) {
    return onChange(value);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(FileInput, _extends({
    className: "lf-control-upload",
    "data-lf-field-name": name,
    style: makeWidthStyle(fullWidth, width),
    description: hint,
    error: _isString(error) ? error : undefined,
    inputWrapperOrder: ['label', 'input', 'description', 'error'],
    onChange: handleChange,
    onBlur: onBlur,
    accept: Array.isArray(accept) ? accept.join(',') : accept !== null && accept !== void 0 ? accept : undefined
  }, passRest(rest)));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded Mantine.Upload');

export { MantineUpload as default };
