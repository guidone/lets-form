/* LetsForm react-antd v0.13.0 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, m as makeClassName, p as passRest, e as i18nOptions } from './index-B8s1qliR.js';
import React from 'react';
import { Form, Checkbox } from 'antd';

var _excluded = ["name", "label", "hint", "value", "placeholder", "className", "plaintext", "tooltip", "disabled", "readOnly", "required", "error", "onChange", "onBlur", "options"];
var CheckboxGroupRSuite = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value;
    _ref.placeholder;
    var className = _ref.className;
    _ref.plaintext;
    var _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled;
    _ref.readOnly;
    var _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    error = _ref.error,
    onChange = _ref.onChange;
    _ref.onBlur;
    var _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Item, _extends({}, makeClassName('checkbox-group', name, className), {
    label: label,
    name: name,
    help: error != null ? error : hint && !tooltip ? hint : undefined,
    required: required,
    tooltip: tooltip && hint,
    hasFeedback: error != null,
    validateStatus: error ? 'error' : undefined,
    valuePropName: null
  }), /*#__PURE__*/React.createElement(Checkbox.Group, _extends({
    options: options,
    disabled: disabled,
    defaultValue: value,
    onChange: onChange
  }, passRest(rest))));
}, ['label', 'hint', 'placeholder'], {
  options: i18nOptions
});
lfLog('Loaded AntD.CheckboxGroup');

export { CheckboxGroupRSuite as default };
