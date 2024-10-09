/* LetsForm Generator v0.11.1 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, _ as _isString, b as _extends, p as passRest, m as makeWidthStyle } from './index-VMY6Gm-l.js';
import React from 'react';
import { MaskedInput, Form, InputGroup } from 'rsuite';
import { R as RequiredIcon } from './index-Dz8vM04U.js';
import { R as RSuite5FieldControl } from './index-IzQ6tnYj.js';
import 'react-hook-form';

var _excluded = ["name", "label", "hint", "value", "size", "placeholder", "tooltip", "disabled", "readOnly", "required", "error", "prefix", "postfix", "onChange", "onBlur", "placeholderChar", "mask", "inside", "fullWidth", "width"];
var prepareMask = function prepareMask(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return [];
  }
  var matches = str.match(/\$\{[a-zA-Z0-9]\}|.{1,1}/gm);
  return matches.map(function (token) {
    if (token === '${d}') {
      return /\d/;
    } else if (token === '${D}') {
      return /\D/;
    } else if (token === '${a}') {
      return /[a-zA-Z]/;
    } else if (token === '${w}') {
      return /[a-zA-Z0-9]/;
    }
    return token;
  });
};
var InputMask = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    size = _ref.size,
    placeholder = _ref.placeholder,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    error = _ref.error,
    prefix = _ref.prefix,
    postfix = _ref.postfix,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    _ref$placeholderChar = _ref.placeholderChar,
    placeholderChar = _ref$placeholderChar === void 0 ? '_' : _ref$placeholderChar,
    _ref$mask = _ref.mask,
    mask = _ref$mask === void 0 ? [] : _ref$mask,
    _ref$inside = _ref.inside,
    inside = _ref$inside === void 0 ? false : _ref$inside,
    fullWidth = _ref.fullWidth,
    width = _ref.width,
    rest = _objectWithoutProperties(_ref, _excluded);
  var parsedMask = prepareMask(mask);
  var inner = /*#__PURE__*/React.createElement(RSuite5FieldControl, {
    errorMessage: _isString(error) ? error : undefined
  }, /*#__PURE__*/React.createElement(MaskedInput, _extends({
    name: name,
    value: value,
    onChange: onChange,
    onBlur: onBlur,
    disabled: disabled,
    size: size,
    placeholder: placeholder,
    readOnly: readOnly,
    placeholderChar: typeof placeholderChar === 'string' && placeholderChar.length > 0 ? placeholderChar[0] : '_',
    mask: parsedMask
  }, passRest(rest))));
  var needsGroup = postfix || prefix;
  return /*#__PURE__*/React.createElement(Form.Group, {
    "data-lf-field-name": name,
    className: "lf-control-input-mask",
    style: makeWidthStyle(fullWidth, width)
  }, label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), !needsGroup && inner, needsGroup && /*#__PURE__*/React.createElement(InputGroup, {
    inside: inside
  }, prefix && /*#__PURE__*/React.createElement(InputGroup.Addon, null, prefix), inner, postfix && /*#__PURE__*/React.createElement(InputGroup.Addon, null, postfix)), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded RSuite5.InputMask');

export { InputMask as default };
