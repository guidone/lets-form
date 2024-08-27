/* LetsForm react-rsuite5 v0.10.4 - ESM */
import { n as _slicedToArray, D as _objectSpread2, j as _defineProperty, o as _toConsumableArray, w as _isEmpty, k as classNames, q as _isArray, s as styleInject, I as I18N, l as lfLog, a as _objectWithoutProperties, b as _extends, _ as _isString, p as passRest, i as i18nOptions } from './index-BpoGFckX.js';
import React, { useState, useCallback } from 'react';
import { Form } from 'rsuite';
import { R as RequiredIcon } from './index-CaBpl6j1.js';
import BiStateButton from './index-D4RRL7Et.js';
import 'react-hook-form';

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
    ButtonComponent = _ref2.ButtonComponent,
    fullWidth = _ref2.fullWidth,
    justifyContent = _ref2.justifyContent;
  var _useState = useState(getInitialValue(value, multiple)),
    _useState2 = _slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  console.log('options', options);
  var handleClick = useCallback(function (value, name) {
    var newValues = multiple ? _objectSpread2(_objectSpread2({}, values), {}, _defineProperty({}, name, value)) : _defineProperty({}, name, value);
    setValues(newValues);
    var newValue = options.reduce(function (acc, option) {
      return newValues[option.value] ? [].concat(_toConsumableArray(acc), [option.value]) : acc;
    }, []);
    onChange(multiple ? newValue : newValue[0]);
  }, [onChange, options, values, multiple]);
  var style = {};
  if (fullWidth) {
    style.display = 'flex';
  }
  if (!_isEmpty(justifyContent)) {
    style.display = 'flex';
    style.justifyContent = justifyContent;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-control-button-toggle-group-container",
    style: style
  }, (options !== null && options !== void 0 ? options : []).map(function (_ref4) {
    var value = _ref4.value,
      label = _ref4.label,
      image = _ref4.image;
    return /*#__PURE__*/React.createElement(ButtonComponent, {
      key: value + values[value],
      buttonType: "toggle",
      labelOn: label,
      name: value,
      initialValue: values[value],
      labelOff: label,
      size: size,
      disabled: disabled,
      icon: image,
      onChange: handleClick,
      className: classNames({
        'lf-full-width': fullWidth
      })
    });
  }));
};

var css_248z = ".lf-form-react-rsuite5 .lf-control-button-toggle-group .rs-form-control-wrapper {\n  display: block;\n}";
styleInject(css_248z);

var _excluded = ["name", "label", "hint", "value", "tooltip", "disabled", "required", "size", "error", "onChange", "options"];
var RSuiteButtonsToggleGroup = I18N(function (_ref) {
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
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Group, {
    "data-lf-field-name": name,
    className: "lf-control-button-toggle-group"
  }, label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(Form.Control, _extends({
    ButtonComponent: BiStateButton,
    name: name,
    accepter: ButtonsToggleGroup,
    value: value,
    onChange: onChange,
    options: options,
    disabled: disabled,
    size: size,
    errorMessage: _isString(error) ? error : undefined
  }, passRest(rest))), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint'], {
  options: i18nOptions
});
lfLog('Loaded RSuite5.ButtonsToggleGroup');

export { RSuiteButtonsToggleGroup as default };
