/* LetsForm Generator v0.12.16 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, m as makeClassName, c as makeWidthStyle, b as _isString, p as passRest } from './index-C17qSwW1.js';
import React$1, { useRef, useCallback } from 'react';
import { TimeInput } from '@mantine/dates';
import { ActionIcon } from '@mantine/core';

var ClockIcon = function ClockIcon(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 16 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 16 : _ref$height;
  return /*#__PURE__*/React.createElement("svg", {
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    opacity: "0.5",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "#1C274C",
    "stroke-width": "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8V12L14.5 14.5",
    stroke: "#1C274C",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};

var _excluded = ["name", "hint", "value", "fullWidth", "width", "submitOnEnter", "error", "onChange", "onBlur", "lfOnEnter", "className", "showBrowserPicker"];
var MANTINE_ICON_SIZE = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32
};
var mantineIconSize = function mantineIconSize(size) {
  return MANTINE_ICON_SIZE[size] || 16;
};
var Time = I18N(function (_ref) {
  var name = _ref.name,
    hint = _ref.hint;
    _ref.value;
    var fullWidth = _ref.fullWidth,
    width = _ref.width,
    _ref$submitOnEnter = _ref.submitOnEnter,
    submitOnEnter = _ref$submitOnEnter === void 0 ? false : _ref$submitOnEnter,
    error = _ref.error,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    _ref$lfOnEnter = _ref.lfOnEnter,
    lfOnEnter = _ref$lfOnEnter === void 0 ? function () {} : _ref$lfOnEnter,
    className = _ref.className,
    showBrowserPicker = _ref.showBrowserPicker,
    rest = _objectWithoutProperties(_ref, _excluded);
  var ref = useRef(null);
  var handleKeyUp = useCallback(function (e) {
    return e.keyCode === 13 && lfOnEnter();
  }, [lfOnEnter]);
  var handleChange = useCallback(function (event) {
    return onChange(event.currentTarget.value);
  }, [onChange]);
  var handlePicker = useCallback(function () {
    var _ref$current;
    return (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.showPicker();
  }, []);
  var additional = {};
  if (showBrowserPicker) {
    additional.rightSection = /*#__PURE__*/React$1.createElement(ActionIcon, {
      variant: "subtle",
      color: "gray",
      onClick: handlePicker
    }, /*#__PURE__*/React$1.createElement(ClockIcon, {
      width: mantineIconSize(rest.size),
      height: mantineIconSize(rest.size)
    }));
  }
  return /*#__PURE__*/React$1.createElement(TimeInput, _extends({
    ref: ref
  }, makeClassName('time', name, className), {
    style: makeWidthStyle(fullWidth, width),
    description: hint,
    error: _isString(error) ? error : undefined,
    inputWrapperOrder: ['label', 'input', 'description', 'error'],
    onChange: handleChange,
    onBlur: onBlur,
    onKeyUp: submitOnEnter ? handleKeyUp : undefined
  }, passRest(rest), additional));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded Mantine.Time');

export { Time as default };
