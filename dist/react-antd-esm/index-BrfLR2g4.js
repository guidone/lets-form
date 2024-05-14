/* LetsForm react-antd v0.7.13-beta-9 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, c as classNames, a as _extends, p as passRest, g as i18nOptions } from './index-BICfY6Nk.js';
import React from 'react';
import { Form, Checkbox } from 'antd';
import 'react-hook-form';

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
  return /*#__PURE__*/React.createElement(Form.Item, {
    className: classNames('lf-control-checkbox-group', className),
    "data-lf-field-name": name,
    label: label,
    name: name,
    help: error != null ? error : hint && !tooltip ? hint : undefined,
    required: required,
    tooltip: tooltip && hint,
    hasFeedback: error != null,
    validateStatus: error ? 'error' : undefined
  }, /*#__PURE__*/React.createElement(Checkbox.Group, _extends({
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
