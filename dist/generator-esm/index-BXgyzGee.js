/* LetsForm Generator v0.7.13-beta-9 - ESM */
import { b as _extends, v as _isFunction, a as _objectWithoutProperties, d as _slicedToArray, m as makeWidthStyle, p as passRest, t as _omit, e as classNames, g as _defineProperty } from './index-BK4tt4jT.js';
import React, { useState, useCallback } from 'react';

var _excluded = ["ButtonComponent", "OnStateProps", "OffStateProps", "LinkProps", "name", "labelOn", "labelOff", "labelLink", "iconOn", "iconOff", "iconLink", "size", "href", "appearance", "fullWidth", "width", "onChange", "onBlur", "value", "buttonType", "hint", "initialValue"];
var GenericButton = function GenericButton(_ref) {
  var ButtonComponent = _ref.ButtonComponent,
    OnStateProps = _ref.OnStateProps,
    OffStateProps = _ref.OffStateProps,
    _ref$LinkProps = _ref.LinkProps,
    LinkProps = _ref$LinkProps === void 0 ? {} : _ref$LinkProps,
    name = _ref.name,
    labelOn = _ref.labelOn,
    labelOff = _ref.labelOff,
    labelLink = _ref.labelLink,
    iconOn = _ref.iconOn,
    iconOff = _ref.iconOff,
    iconLink = _ref.iconLink,
    size = _ref.size,
    href = _ref.href,
    appearance = _ref.appearance,
    fullWidth = _ref.fullWidth,
    width = _ref.width,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    value = _ref.value,
    buttonType = _ref.buttonType,
    hint = _ref.hint,
    initialValue = _ref.initialValue,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(value || initialValue),
    _useState2 = _slicedToArray(_useState, 2),
    checked = _useState2[0],
    setChecked = _useState2[1];
  var handleClick = useCallback(function () {
    var newValue = !checked;
    setChecked(!checked);
    onChange(newValue, name);
  }, [onChange, checked, name]);
  var inner;
  if (buttonType === 'toggle') {
    inner = /*#__PURE__*/React.createElement(ButtonComponent, _extends({
      size: size,
      onClick: handleClick,
      onBlur: onBlur,
      icon: checked ? iconOn : iconOff,
      label: checked ? labelOn : labelOff,
      hint: hint,
      style: makeWidthStyle(fullWidth, width)
    }, passRest(_omit(rest, 'label')), checked ? OnStateProps : OffStateProps));
  } else if (buttonType === 'link') {
    inner = /*#__PURE__*/React.createElement(ButtonComponent, _extends({
      size: size,
      onBlur: onBlur,
      appearance: appearance,
      hint: hint,
      label: labelLink,
      icon: iconLink,
      href: href,
      target: "_blank",
      style: makeWidthStyle(fullWidth, width)
    }, passRest(_omit(rest, 'label')), LinkProps));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('lf-control-button', _defineProperty({}, "lf-control-button-".concat(size !== null && size !== void 0 ? size : ''), true)),
    "data-lf-field-name": name
  }, inner);
};
var MakeButton = function MakeButton(ButtonComponent, OnStateProps, OffStateProps, LinkProps) {
  return function (props) {
    return /*#__PURE__*/React.createElement(GenericButton, _extends({
      ButtonComponent: ButtonComponent,
      OnStateProps: _isFunction(OnStateProps) ? OnStateProps(props) : OnStateProps,
      OffStateProps: _isFunction(OffStateProps) ? OffStateProps(props) : OffStateProps,
      LinkProps: _isFunction(LinkProps) ? LinkProps(props) : LinkProps
    }, props));
  };
};

export { MakeButton as M };
