/* LetsForm react-material-ui v0.7.13 - ESM */
import { a as _extends, F as _isFunction, _ as _objectWithoutProperties, v as _slicedToArray, H as makeWidthStyle, p as passRest, y as _omit, s as classNames, r as _defineProperty, B as styleInject, I as I18N, l as lfLog, d as _isEmpty } from './index-C-8s4U67.js';
import React, { useState, useCallback } from 'react';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
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

var css_248z = ".lf-form-react-material-ui .lf-control-button {\n  min-height: 20px;\n}\n.lf-form-react-material-ui .lf-control-button .lf-icon {\n  max-width: 20px;\n  max-height: 20px;\n}\n.lf-form-react-material-ui .lf-control-button .MuiButton-sizeLarge .lf-icon {\n  max-width: 22px;\n  max-height: 22px;\n}\n.lf-form-react-material-ui .lf-control-button .MuiButton-sizeSmall .lf-icon {\n  max-width: 18px;\n  max-height: 18px;\n}\n.lf-form-react-material-ui .lf-control-button .only-icon {\n  min-width: inherit;\n}\n.lf-form-react-material-ui .lf-control-button .only-icon .MuiButton-startIcon {\n  margin-right: 0px !important;\n}";
styleInject(css_248z);

var _excluded = ["label", "icon", "hint", "tooltip", "variant", "size", "color"];
var MuiButton = function MuiButton(_ref) {
  var label = _ref.label,
    icon = _ref.icon,
    hint = _ref.hint,
    tooltip = _ref.tooltip,
    variant = _ref.variant,
    size = _ref.size,
    color = _ref.color,
    rest = _objectWithoutProperties(_ref, _excluded);
  var inner;
  if (!_isEmpty(label) && !_isEmpty(icon)) {
    inner = /*#__PURE__*/React.createElement(Button, _extends({
      startIcon: /*#__PURE__*/React.createElement("img", {
        className: "lf-icon",
        src: icon
      }),
      variant: variant || 'contained',
      size: size !== null && size !== void 0 ? size : undefined,
      color: color !== null && color !== void 0 ? color : undefined
    }, rest), label);
  } else if (!_isEmpty(label) && _isEmpty(icon)) {
    inner = /*#__PURE__*/React.createElement(Button, _extends({
      variant: variant || 'contained',
      size: size !== null && size !== void 0 ? size : undefined,
      color: color !== null && color !== void 0 ? color : undefined
    }, rest), label);
  } else if (_isEmpty(label) && !_isEmpty(icon)) {
    inner = /*#__PURE__*/React.createElement(Button, _extends({
      className: "only-icon",
      startIcon: /*#__PURE__*/React.createElement("img", {
        className: "lf-icon",
        src: icon
      }),
      variant: variant || 'contained',
      size: size !== null && size !== void 0 ? size : undefined,
      color: color !== null && color !== void 0 ? color : undefined
    }, rest));
  } else {
    inner = /*#__PURE__*/React.createElement(React.Fragment, null);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, (_isEmpty(hint) || !tooltip) && inner, !_isEmpty(hint) && /*#__PURE__*/React.createElement(FormHelperText, null, hint));
};
var BiStateButton = I18N(MakeButton(MuiButton, {
  variant: 'contained'
}, {
  variant: 'outlined'
}), ['labelOn', 'labelOff', 'labelLink', 'hint']);
lfLog('Loaded MUI.Button');

export { BiStateButton as default };
