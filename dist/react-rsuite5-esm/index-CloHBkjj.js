/* LetsForm react-rsuite5 v0.11.6 - ESM */
import { s as styleInject, I as I18N, l as lfLog, a as _objectWithoutProperties, n as _slicedToArray, _ as _isString, k as classNames, j as _defineProperty, m as makeWidthStyle, b as _extends, p as passRest } from './index-C1KFLjD_.js';
import React, { useState, useCallback } from 'react';
import { Form, InputNumber } from 'rsuite';
import { R as RequiredIcon } from './index-DC1pM-Qm.js';
import { R as RSuite5FieldControl } from './index-Bkjh8O1q.js';
import 'react-hook-form';

var CrossCirle = function CrossCirle(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 24 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 24 : _ref$height,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#000000' : _ref$color,
    _ref$yOffset = _ref.yOffset,
    yOffset = _ref$yOffset === void 0 ? 0 : _ref$yOffset;
  return /*#__PURE__*/React.createElement("svg", {
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    viewBox: "0 ".concat(yOffset, " 24 24"),
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var css_248z = ".lf-form-react-rsuite5 .lf-control-input-number.rs-form-group .rs-input-group {\n  width: auto;\n}";
styleInject(css_248z);

var _excluded = ["name", "label", "hint", "value", "size", "placeholder", "min", "max", "tooltip", "disabled", "readOnly", "required", "error", "prefix", "postfix", "width", "fullWidth", "onChange", "step", "onBlur", "inside", "allowClear"];
var hasDecimals = function hasDecimals(f) {
  return _isString(f) && (f.includes(',') || f.includes('.'));
};
var InputNumberRSuite5 = I18N(function (_ref) {
  var _classNames;
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    size = _ref.size,
    placeholder = _ref.placeholder,
    min = _ref.min,
    max = _ref.max,
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
    width = _ref.width,
    fullWidth = _ref.fullWidth,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$step = _ref.step,
    step = _ref$step === void 0 ? 1 : _ref$step,
    onBlur = _ref.onBlur,
    _ref$inside = _ref.inside,
    inside = _ref$inside === void 0 ? false : _ref$inside,
    allowClear = _ref.allowClear,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(value !== null && value !== void 0 ? value : null),
    _useState2 = _slicedToArray(_useState, 2),
    currentValue = _useState2[0],
    setCurrentValue = _useState2[1];
  var handleChange = useCallback(function (value) {
    var parsed = value;
    if (_isString(value)) {
      if (value === '') {
        // void if the user deleted all chars
        parsed = null;
      } else if (hasDecimals(value)) {
        parsed = parseFloat(value);
      } else {
        parsed = parseInt(value, 10);
      }
    }
    // set the original value again, otherwise never be able to
    // input a float number i.e. "0.2"
    setCurrentValue(value);
    if (!isNaN(parsed)) {
      onChange(parsed);
    }
  }, [onChange]);
  var handleClear = useCallback(function (e) {
    e.preventDefault();
    onChange(undefined);
    setCurrentValue(null);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(Form.Group, {
    "data-lf-field-name": name,
    className: classNames('lf-control-input-number', (_classNames = {}, _defineProperty(_classNames, "lf-size-".concat(size), size != null), _defineProperty(_classNames, 'lf-full-width', fullWidth || width != null), _classNames)),
    style: makeWidthStyle(fullWidth, width)
  }, label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(RSuite5FieldControl, {
    errorMessage: _isString(error) ? error : undefined
  }, /*#__PURE__*/React.createElement(InputNumber, _extends({
    name: name,
    accepter: InputNumber,
    value: currentValue,
    onChange: handleChange,
    onBlur: onBlur,
    disabled: disabled,
    size: size,
    min: min,
    max: max,
    step: step,
    inside: inside,
    prefix: prefix,
    postfix: allowClear ? /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: handleClear
    }, /*#__PURE__*/React.createElement(CrossCirle, {
      width: 16,
      height: 16
    })) : postfix,
    placeholder: placeholder,
    readOnly: readOnly
  }, passRest(rest)))), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded RSuite.InputNumber');

export { InputNumberRSuite5 as default };
