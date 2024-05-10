/* LetsForm react-antd v0.7.11 - ESM */
import React, { useState, useCallback } from 'react';
import { Form } from 'antd';
import { A as _slicedToArray, q as _objectSpread2, r as _defineProperty, B as _toConsumableArray, o as _isArray, I as I18N, l as lfLog, g as i18nOptions } from './index-CbYhbWGD.js';
import BiStateButton from './index-6qN1zP-o.js';

var getInitialValue = function getInitialValue(value, multiple) {
  return multiple ? (_isArray(value) ? value : []).reduce(function (acc, value) {
    return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, value, true));
  }, {}) : _defineProperty({}, value, true);
};
var ButtonsToggleGroup = function ButtonsToggleGroup(_ref2) {
  var value = _ref2.value,
    options = _ref2.options,
    onChange = _ref2.onChange,
    size = _ref2.size,
    _ref2$multiple = _ref2.multiple,
    multiple = _ref2$multiple === void 0 ? false : _ref2$multiple,
    disabled = _ref2.disabled,
    ButtonComponent = _ref2.ButtonComponent;
  var _useState = useState(getInitialValue(value, multiple)),
    _useState2 = _slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var handleClick = useCallback(function (value, name) {
    var newValues = multiple ? _objectSpread2(_objectSpread2({}, values), {}, _defineProperty({}, name, value)) : _defineProperty({}, name, value);
    setValues(newValues);
    var newValue = options.reduce(function (acc, option) {
      return newValues[option.value] ? [].concat(_toConsumableArray(acc), [option.value]) : acc;
    }, []);
    onChange(multiple ? newValue : newValue[0]);
  }, [onChange, options, values, multiple]);
  return /*#__PURE__*/React.createElement("div", null, (options !== null && options !== void 0 ? options : []).map(function (_ref4) {
    var value = _ref4.value,
      label = _ref4.label;
    return /*#__PURE__*/React.createElement(ButtonComponent, {
      key: value + values[value],
      buttonType: "toggle",
      labelOn: label,
      name: value,
      initialValue: values[value],
      labelOff: label,
      size: size,
      disabled: disabled,
      onChange: handleClick
    });
  }));
};

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
    options = _ref$options === void 0 ? [] : _ref$options;
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
  }, /*#__PURE__*/React.createElement(ButtonsToggleGroup, {
    ButtonComponent: BiStateButton,
    name: name,
    multiple: multiple,
    value: value,
    onChange: onChange,
    options: options,
    disabled: disabled,
    size: size
  }));
}, ['label', 'hint'], {
  options: i18nOptions
});
lfLog('Loaded AntD.ButtonsToggleGroup');

export { AntdButtonsToggleGroup as default };
