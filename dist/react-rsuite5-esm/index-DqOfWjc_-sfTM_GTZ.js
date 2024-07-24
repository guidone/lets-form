/* LetsForm react-rsuite5 v0.9.4 - ESM */
import { s as styleInject, I as I18N, l as lfLog, b as _extends, K as _isFunction, _ as _objectWithoutProperties, g as _slicedToArray, m as makeWidthStyle, p as passRest, n as _omit, c as classNames, d as _defineProperty$1, q as _isEmpty } from './index-DpKM_8GA.js';
import React, { useState, useCallback } from 'react';
import { Button, IconButton, Whisper, Tooltip, Form } from 'rsuite';
import 'react-hook-form';
import './index-DC6uVyk8.js';
import './index-BvswBXlW.js';
import './index-DcwatjKC.js';

/* LetsForm react-rsuite5 v0.9.3 - ESM */
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
    className: classNames('lf-control-button', className, _defineProperty$1({}, "lf-control-button-".concat(size !== null && size !== void 0 ? size : ''), true)),
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
var css_248z = ".lf-form-react-rsuite5 .lf-control-button {\n  min-height: 20px;\n}\n.lf-form-react-rsuite5 .lf-control-button .lf-icon {\n  max-width: 16px;\n  max-height: 16px;\n}\n.lf-form-react-rsuite5 .lf-control-button .rs-btn-lg .lf-icon {\n  max-width: 20px;\n  max-height: 20px;\n}\n.lf-form-react-rsuite5 .lf-control-button .rs-btn-xs .lf-icon {\n  max-width: 12px;\n  max-height: 12px;\n}";
styleInject(css_248z);
var _excluded = ["label", "icon", "hint", "tooltip"];
var RSuiteButton = function RSuiteButton(_ref) {
  var label = _ref.label,
    icon = _ref.icon,
    hint = _ref.hint,
    tooltip = _ref.tooltip,
    rest = _objectWithoutProperties(_ref, _excluded);
  var inner;
  if (!_isEmpty(label) && !_isEmpty(icon)) {
    inner = /*#__PURE__*/React.createElement(Button, _extends({
      startIcon: /*#__PURE__*/React.createElement("img", {
        className: "lf-icon",
        src: icon
      })
    }, passRest(rest)), label);
  } else if (!_isEmpty(label) && _isEmpty(icon)) {
    inner = /*#__PURE__*/React.createElement(Button, passRest(rest), label);
  } else if (_isEmpty(label) && !_isEmpty(icon)) {
    inner = /*#__PURE__*/React.createElement(IconButton, _extends({
      icon: /*#__PURE__*/React.createElement("img", {
        className: "lf-icon",
        src: icon
      })
    }, passRest(rest)));
  } else {
    inner = /*#__PURE__*/React.createElement(React.Fragment, null);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, !_isEmpty(hint) && tooltip && /*#__PURE__*/React.createElement(Whisper, {
    placement: "top",
    trigger: "hover",
    speaker: /*#__PURE__*/React.createElement(Tooltip, null, hint)
  }, inner), (_isEmpty(hint) || !tooltip) && inner, !_isEmpty(hint) && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
};
var BiStateButton = I18N(MakeButton(RSuiteButton, {
  appearance: 'primary'
}, {
  appearance: 'ghost'
}), ['labelOn', 'labelOff', 'labelLink', 'hint']);
lfLog('Loaded RSuite5.Button');

export { BiStateButton as default };