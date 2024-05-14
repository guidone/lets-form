/* LetsForm Generator v0.7.12 - ESM */
import { d as _slicedToArray, o as _objectSpread2, g as _defineProperty, E as _toConsumableArray, k as _isArray } from './index-DRF8thTp.js';
import React__default, { useState, useCallback } from 'react';

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
  return /*#__PURE__*/React__default.createElement("div", null, (options !== null && options !== void 0 ? options : []).map(function (_ref4) {
    var value = _ref4.value,
      label = _ref4.label;
    return /*#__PURE__*/React__default.createElement(ButtonComponent, {
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

export { ButtonsToggleGroup as B };
