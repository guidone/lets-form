/* LetsForm Generator v0.7.15 - ESM */
import { s as styleInject, e as classNames, g as _defineProperty, l as lfLog } from './index-BlDYFeHM.js';
import React__default from 'react';
import { a as Form } from './Form-Bumt1K5q.js';
import { B as Button } from './Button-ss2xyIv3.js';
import './createWithBsPrefix-GNsR_EB9.js';
import 'prop-types';
import './Button-B76UWB9X.js';

var css_248z = ".lf-form-react-bootstrap .lf-buttons {\n  display: flex;\n}\n.lf-form-react-bootstrap .lf-buttons button:not(:first-child) {\n  margin-left: 10px;\n}";
styleInject(css_248z);

var FormBootstrap = function FormBootstrap(_ref) {
  var name = _ref.name,
    children = _ref.children,
    onSubmit = _ref.onSubmit,
    buttonsAlign = _ref.buttonsAlign,
    onReset = _ref.onReset,
    _ref$hideToolbar = _ref.hideToolbar,
    hideToolbar = _ref$hideToolbar === void 0 ? false : _ref$hideToolbar,
    _ref$onlyFields = _ref.onlyFields,
    onlyFields = _ref$onlyFields === void 0 ? false : _ref$onlyFields,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$disabledSubmit = _ref.disabledSubmit,
    disabledSubmit = _ref$disabledSubmit === void 0 ? false : _ref$disabledSubmit,
    plaintext = _ref.plaintext,
    _ref$labelSubmit = _ref.labelSubmit,
    labelSubmit = _ref$labelSubmit === void 0 ? 'Submit' : _ref$labelSubmit,
    _ref$labelCancel = _ref.labelCancel,
    labelCancel = _ref$labelCancel === void 0 ? 'Cancel' : _ref$labelCancel,
    custom = _ref.custom;
  return /*#__PURE__*/React__default.createElement(Form, {
    className: classNames('lf-form lf-form-react-bootstrap', _defineProperty({}, buttonsAlign ? "lf-form-buttons-align-".concat(buttonsAlign) : undefined, true)),
    "data-lf-form-name": name,
    onSubmit: onSubmit
  }, /*#__PURE__*/React__default.createElement("div", null, children), !hideToolbar && !onlyFields && !plaintext && /*#__PURE__*/React__default.createElement("div", {
    className: "lf-buttons"
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "primary",
    onClick: onSubmit,
    disabled: disabled || disabledSubmit
  }, labelSubmit), /*#__PURE__*/React__default.createElement(Button, {
    variant: "secondary",
    onClick: onReset,
    disabled: disabled
  }, labelCancel), custom));
};
lfLog('Loaded ReactBootrap.Form');

export { FormBootstrap as default };
