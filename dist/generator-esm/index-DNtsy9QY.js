/* LetsForm Generator v0.12.5 - ESM */
import { s as styleInject, u as classNames, g as _defineProperty, l as lfLog } from './index-DL7atULa.js';
import React from 'react';
import { Group, Button } from '@mantine/core';
import 'react-hook-form';

var css_248z = ".lf-form-react-mantine .lf-control-input-number div[data-position=right] .lf-postfix-wrapper, .lf-form-react-mantine .lf-control-input-text div[data-position=right] .lf-postfix-wrapper {\n  padding-right: 1em;\n}\n.lf-form-react-mantine .lf-control-input-number div[data-position=left] .lf-prefix-wrapper, .lf-form-react-mantine .lf-control-input-text div[data-position=left] .lf-prefix-wrapper {\n  padding-left: 1em;\n}";
styleInject(css_248z);

var MantineForm = function MantineForm() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    id = _ref.id,
    name = _ref.name,
    children = _ref.children,
    buttonsAlign = _ref.buttonsAlign,
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
    _ref$onSubmit = _ref.onSubmit,
    onSubmit = _ref$onSubmit === void 0 ? function () {} : _ref$onSubmit,
    _ref$onReset = _ref.onReset,
    onReset = _ref$onReset === void 0 ? function () {} : _ref$onReset,
    _ref$onBlur = _ref.onBlur,
    onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,
    custom = _ref.custom;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
    id: id,
    onSubmit: onSubmit,
    className: classNames('lf-form lf-form-react-mantine', _defineProperty({}, buttonsAlign ? "lf-form-buttons-align-".concat(buttonsAlign) : undefined, true)),
    "data-lf-form-name": name,
    onBlur: onBlur
  }, children, !hideToolbar && !onlyFields && !plaintext && /*#__PURE__*/React.createElement(Group, {
    className: "lf-buttons",
    align: buttonsAlign
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "filled",
    onClick: onSubmit,
    disabled: disabled || disabledSubmit,
    className: "lf-form-react-primary-button"
  }, labelSubmit), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    disabled: disabled,
    className: "lf-form-react-secondary-button",
    onClick: onReset
  }, labelCancel), custom)));
};
lfLog('Loaded Mantine.Form');

export { MantineForm as default };
