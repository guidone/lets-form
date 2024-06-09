/* LetsForm Generator v0.7.17 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, b as _extends, p as passRest, i as i18nOptions } from './index-DfGaniFQ.js';
import React from 'react';
import { Form } from 'antd';
import BiStateButton from './index-BsgRZ531.js';
import { B as ButtonsToggleGroup } from './index-K6SETEMF.js';
import 'react-hook-form';
import './index-BD5Z1eYa.js';

var _excluded = ["name", "label", "hint", "value", "tooltip", "disabled", "required", "size", "error", "onChange", "multiple", "options"];
var AntdButtonsToggleGroup = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    size = _ref.size,
    error = _ref.error,
    onChange = _ref.onChange,
    multiple = _ref.multiple,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Item, {
    className: "lf-control-button-toggle-group",
    "data-lf-field-name": name,
    label: label,
    name: name,
    help: error != null ? error : hint && !tooltip ? hint : undefined,
    required: required,
    tooltip: tooltip && hint,
    hasFeedback: error != null,
    validateStatus: error ? 'error' : undefined
  }, /*#__PURE__*/React.createElement(ButtonsToggleGroup, _extends({
    ButtonComponent: BiStateButton,
    name: name,
    multiple: multiple,
    value: value,
    onChange: onChange,
    options: options,
    disabled: disabled,
    size: size
  }, passRest(rest))));
}, ['label', 'hint'], {
  options: i18nOptions
});
lfLog('Loaded AntD.ButtonsToggleGroup');

export { AntdButtonsToggleGroup as default };
