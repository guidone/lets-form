/* LetsForm Generator v0.7.13-beta-9 - ESM */
import { s as styleInject, I as I18N, l as lfLog, a as _objectWithoutProperties, _ as _isString, b as _extends, p as passRest, e as classNames, g as _defineProperty, m as makeWidthStyle } from './index-BK4tt4jT.js';
import React, { useCallback } from 'react';
import Form from 'rsuite/Form';
import Input from 'rsuite/Input';
import InputGroup from 'rsuite/InputGroup';
import { R as RequiredIcon } from './index-Bj4yKodF.js';
import { R as RSuite5FieldControl } from './index-BP9p7bTX.js';
import { T as TextOrIcon } from './index-B3uuK2Sd.js';
import 'react-hook-form';
import 'rsuite/Whisper';
import 'rsuite/Popover';

var css_248z = ".lf-control-input-text .rs-form-control-wrapper > .rs-input, .lf-control-input-text .rs-form-control-wrapper > .rs-input-number {\n  width: 100%;\n}\n.lf-control-input-text.lf-full-width .rs-input-group {\n  width: 100%;\n}\n.lf-control-input-text .lf-prefix-icon {\n  max-height: 16px;\n}\n.lf-control-input-text.lf-size-lg .lf-prefix-icon {\n  max-height: 22px;\n}\n.lf-control-input-text.lf-size-md .lf-prefix-icon {\n  max-height: 16px;\n}\n.lf-control-input-text.lf-size-sm .lf-prefix-icon {\n  max-height: 10px;\n}\n.lf-control-input-text.lf-size-xs .lf-prefix-icon {\n  max-height: 4px;\n}";
styleInject(css_248z);

var _excluded = ["name", "label", "hint", "value", "size", "placeholder", "tooltip", "disabled", "readOnly", "required", "submitOnEnter", "error", "prefix", "postfix", "onChange", "onBlur", "fullWidth", "width", "autocomplete", "inputMode", "inputType", "inside", "lfOnEnter"];
var TextInput = I18N(function (_ref) {
  var _classNames;
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
    _ref$submitOnEnter = _ref.submitOnEnter,
    submitOnEnter = _ref$submitOnEnter === void 0 ? false : _ref$submitOnEnter,
    error = _ref.error,
    prefix = _ref.prefix,
    postfix = _ref.postfix,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    fullWidth = _ref.fullWidth,
    width = _ref.width,
    autocomplete = _ref.autocomplete,
    inputMode = _ref.inputMode,
    inputType = _ref.inputType,
    _ref$inside = _ref.inside,
    inside = _ref$inside === void 0 ? false : _ref$inside,
    _ref$lfOnEnter = _ref.lfOnEnter,
    lfOnEnter = _ref$lfOnEnter === void 0 ? function () {} : _ref$lfOnEnter,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleKeyUp = useCallback(function (e) {
    return e.keyCode === 13 && lfOnEnter();
  }, [lfOnEnter]);
  var inner = /*#__PURE__*/React.createElement(RSuite5FieldControl, {
    errorMessage: _isString(error) ? error : undefined
  }, /*#__PURE__*/React.createElement(Input, _extends({
    accepter: Input,
    value: value,
    onChange: onChange,
    onBlur: onBlur,
    onKeyUp: submitOnEnter ? handleKeyUp : undefined,
    disabled: disabled,
    autoComplete: autocomplete,
    inputMode: inputMode,
    type: inputType,
    size: size,
    placeholder: placeholder,
    readOnly: readOnly
  }, passRest(rest))));
  var needsGroup = postfix || prefix;
  return /*#__PURE__*/React.createElement(Form.Group, {
    className: classNames('lf-control-input-text', (_classNames = {}, _defineProperty(_classNames, "lf-size-".concat(size), size != null), _defineProperty(_classNames, 'lf-full-width', fullWidth || width != null), _classNames)),
    "data-lf-field-name": name,
    style: makeWidthStyle(fullWidth, width)
  }, label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), !needsGroup && inner, needsGroup && /*#__PURE__*/React.createElement(InputGroup, {
    inside: inside
  }, prefix && /*#__PURE__*/React.createElement(InputGroup.Addon, null, TextOrIcon(prefix)), inner, postfix && /*#__PURE__*/React.createElement(InputGroup.Addon, null, TextOrIcon(postfix))), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded RSuite.InputText');

export { TextInput as default };
