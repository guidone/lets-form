/* LetsForm react-bootstrap v0.7.18 - ESM */
import { a as _extends, B as _isFunction, _ as _objectWithoutProperties, d as _slicedToArray, m as makeWidthStyle, p as passRest, g as _omit, u as classNames, s as _defineProperty, A as styleInject, I as I18N, l as lfLog, c as _isEmpty } from './index-FJa8f9oy.js';
import React, { useState, useCallback } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'react-hook-form';

var _excluded$1 = ["ButtonComponent", "OnStateProps", "OffStateProps", "LinkProps", "name", "labelOn", "labelOff", "labelLink", "iconOn", "iconOff", "iconLink", "size", "href", "appearance", "fullWidth", "width", "onChange", "onBlur", "value", "buttonType", "hint", "initialValue", "className"];
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
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded$1);
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
    className: classNames('lf-control-button', className, _defineProperty({}, "lf-control-button-".concat(size !== null && size !== void 0 ? size : ''), true)),
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

var css_248z = ".lf-form-react-bootstrap .lf-control-button {\n  min-height: 20px;\n}\n.lf-form-react-bootstrap .lf-control-button .lf-icon {\n  max-width: 20px;\n  max-height: 20px;\n  margin-top: -2px;\n  margin-right: 5px;\n}\n.lf-form-react-bootstrap .lf-control-button .btn-lg .lf-icon {\n  max-width: 24px;\n  max-height: 24px;\n}\n.lf-form-react-bootstrap .lf-control-button .btn-sm .lf-icon {\n  max-width: 16px;\n  max-height: 16px;\n}";
styleInject(css_248z);

var _excluded = ["label", "icon", "hint"];
var BootstrapButton = function BootstrapButton(_ref) {
  var label = _ref.label,
    icon = _ref.icon,
    hint = _ref.hint,
    rest = _objectWithoutProperties(_ref, _excluded);
  var inner;
  if (!_isEmpty(label) && !_isEmpty(icon)) {
    inner = /*#__PURE__*/React.createElement(Button, rest, /*#__PURE__*/React.createElement("img", {
      className: "lf-icon",
      src: icon
    }), label);
  } else if (!_isEmpty(label) && _isEmpty(icon)) {
    inner = /*#__PURE__*/React.createElement(Button, rest, label);
  } else if (_isEmpty(label) && !_isEmpty(icon)) {
    inner = /*#__PURE__*/React.createElement(Button, rest, /*#__PURE__*/React.createElement("img", {
      className: "lf-icon",
      src: icon
    }));
  } else {
    inner = /*#__PURE__*/React.createElement(React.Fragment, null);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, inner, hint && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Form.Text, null, hint)));
};
var BiStateButton = I18N(MakeButton(BootstrapButton, function (props) {
  return {
    variant: props.variant || 'primary'
  };
}, function (props) {
  return {
    variant: 'outline-' + (props.variant || 'primary')
  };
}), ['labelOn', 'labelOff', 'labelLink', 'hint']);
lfLog('Loaded ReactBootrap.Button');

export { BiStateButton as default };
