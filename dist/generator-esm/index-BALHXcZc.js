/* LetsForm Generator v0.7.13-beta-9 - ESM */
import { s as styleInject, I as I18N, l as lfLog, a as _objectWithoutProperties, e as classNames, b as _extends, m as makeWidthStyle, p as passRest } from './index-BK4tt4jT.js';
import React, { useCallback } from 'react';
import { Form, Input } from 'antd';
import { T as TextOrIcon } from './index-B3uuK2Sd.js';
import 'react-hook-form';

var css_248z = ".lf-form-react-antd .lf-control-input-text .lf-prefix-icon {\n  max-height: 16px;\n}\n.lf-form-react-antd .lf-control-input-text.lf-size-small .lf-prefix-icon {\n  max-height: 12px;\n}\n.lf-form-react-antd .lf-control-input-text.lf-size-large .lf-prefix-icon {\n  max-height: 18px;\n}\n.lf-form-react-antd .lf-control-input-text input[type=color] {\n  min-width: 60px;\n}";
styleInject(css_248z);

var _excluded = ["name", "label", "hint", "value", "size", "placeholder", "showCount", "tooltip", "disabled", "readOnly", "required", "submitOnEnter", "maxLength", "error", "prefix", "postfix", "allowClear", "bordered", "onChange", "onBlur", "fullWidth", "width", "inputType", "inputMode", "autocomplete", "lfOnEnter"];
var TextInput = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    size = _ref.size,
    placeholder = _ref.placeholder,
    showCount = _ref.showCount,
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
    maxLength = _ref.maxLength,
    error = _ref.error,
    prefix = _ref.prefix,
    postfix = _ref.postfix,
    allowClear = _ref.allowClear,
    bordered = _ref.bordered,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    fullWidth = _ref.fullWidth,
    width = _ref.width,
    inputType = _ref.inputType,
    inputMode = _ref.inputMode,
    autocomplete = _ref.autocomplete,
    _ref$lfOnEnter = _ref.lfOnEnter,
    lfOnEnter = _ref$lfOnEnter === void 0 ? function () {} : _ref$lfOnEnter,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    return onChange(e.target.value);
  }, [onChange]);
  var handleKeyUp = useCallback(function (e) {
    return e.keyCode === 13 && lfOnEnter();
  }, [lfOnEnter]);
  return /*#__PURE__*/React.createElement(Form.Item, {
    className: classNames('lf-control-input-text', "lf-size-".concat(size)),
    "data-lf-field-name": name,
    label: label,
    name: name,
    help: error != null ? error : hint && !tooltip ? hint : undefined,
    required: required,
    tooltip: tooltip && hint,
    hasFeedback: error != null,
    validateStatus: error ? 'error' : undefined
  }, /*#__PURE__*/React.createElement(Input, _extends({
    placeholder: placeholder,
    readOnly: readOnly,
    autocomplete: autocomplete,
    type: inputType !== null && inputType !== void 0 ? inputType : 'text',
    inputmode: inputMode,
    onChange: handleChange,
    onBlur: onBlur,
    onKeyUp: submitOnEnter ? handleKeyUp : undefined,
    value: value,
    size: size,
    prefix: TextOrIcon(prefix),
    suffix: TextOrIcon(postfix),
    allowClear: allowClear,
    bordered: bordered,
    disabled: disabled,
    showCount: showCount,
    maxLength: maxLength,
    style: makeWidthStyle(fullWidth, width)
  }, passRest(rest))));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded AntD.InputText');

export { TextInput as default };
