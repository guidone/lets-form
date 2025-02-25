/* LetsForm react-antd v0.12.14 - ESM */
import { s as styleInject, I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, m as makeClassName, b as makeWidthStyle, p as passRest } from './index-CqYSvQxl.js';
import React, { useCallback } from 'react';
import { Form, Input } from 'antd';
import { T as TextOrIcon } from './index-SsLjck0G.js';

var css_248z = ".lf-form-react-antd .lf-control-input-text .lf-prefix-icon {\n  max-height: 16px;\n}\n.lf-form-react-antd .lf-control-input-text.lf-size-small .lf-prefix-icon {\n  max-height: 12px;\n}\n.lf-form-react-antd .lf-control-input-text.lf-size-large .lf-prefix-icon {\n  max-height: 18px;\n}\n.lf-form-react-antd .lf-control-input-text input[type=color] {\n  min-width: 60px;\n}";
styleInject(css_248z);

var _excluded = ["name", "label", "hint", "value", "size", "tooltip", "required", "submitOnEnter", "error", "prefix", "postfix", "onChange", "onBlur", "fullWidth", "width", "inputType", "inputMode", "lfOnEnter", "className"];
var TextInput = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    size = _ref.size,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
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
    inputType = _ref.inputType,
    inputMode = _ref.inputMode,
    _ref$lfOnEnter = _ref.lfOnEnter,
    lfOnEnter = _ref$lfOnEnter === void 0 ? function () {} : _ref$lfOnEnter,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    return onChange(e.target.value);
  }, [onChange]);
  var handleKeyUp = useCallback(function (e) {
    return e.keyCode === 13 && lfOnEnter();
  }, [lfOnEnter]);
  return /*#__PURE__*/React.createElement(Form.Item, _extends({}, makeClassName('input-text', name, className, "lf-size-".concat(size)), {
    label: label,
    name: name,
    help: error != null ? error : hint && !tooltip ? hint : undefined,
    required: required,
    tooltip: tooltip && hint,
    hasFeedback: error != null,
    validateStatus: error ? 'error' : undefined,
    valuePropName: null
  }), /*#__PURE__*/React.createElement(Input, _extends({
    type: inputType !== null && inputType !== void 0 ? inputType : 'text',
    inputMode: inputMode,
    onChange: handleChange,
    onBlur: onBlur,
    onKeyUp: submitOnEnter ? handleKeyUp : undefined,
    defaultValue: value,
    size: size,
    prefix: TextOrIcon(prefix),
    suffix: TextOrIcon(postfix),
    style: makeWidthStyle(fullWidth, width)
  }, passRest(rest, ['bordered']))));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded AntD.InputText');

export { TextInput as default };
