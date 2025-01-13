/* LetsForm Generator v0.12.5 - ESM */
import { u as classNames, g as _defineProperty, l as lfLog } from './index-DL7atULa.js';
import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import 'react-hook-form';

var FormMaterialUI = function FormMaterialUI(_ref) {
  var id = _ref.id,
    name = _ref.name,
    buttonsAlign = _ref.buttonsAlign,
    children = _ref.children,
    _ref$labelSubmit = _ref.labelSubmit,
    labelSubmit = _ref$labelSubmit === void 0 ? 'Submit' : _ref$labelSubmit,
    _ref$labelCancel = _ref.labelCancel,
    labelCancel = _ref$labelCancel === void 0 ? 'Cancel' : _ref$labelCancel,
    _ref$hideCancel = _ref.hideCancel,
    hideCancel = _ref$hideCancel === void 0 ? false : _ref$hideCancel,
    _ref$hideSubmit = _ref.hideSubmit,
    hideSubmit = _ref$hideSubmit === void 0 ? false : _ref$hideSubmit,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$disabledSubmit = _ref.disabledSubmit,
    disabledSubmit = _ref$disabledSubmit === void 0 ? false : _ref$disabledSubmit,
    plaintext = _ref.plaintext,
    _ref$onlyFields = _ref.onlyFields,
    onlyFields = _ref$onlyFields === void 0 ? false : _ref$onlyFields,
    _ref$hideToolbar = _ref.hideToolbar,
    hideToolbar = _ref$hideToolbar === void 0 ? false : _ref$hideToolbar,
    _ref$onSubmit = _ref.onSubmit,
    onSubmit = _ref$onSubmit === void 0 ? function () {} : _ref$onSubmit,
    _ref$onReset = _ref.onReset,
    onReset = _ref$onReset === void 0 ? function () {} : _ref$onReset,
    _ref$onBlur = _ref.onBlur,
    onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,
    custom = _ref.custom;
  return /*#__PURE__*/React.createElement("form", {
    id: id,
    className: classNames('lf-form lf-form-react-material-ui', _defineProperty({
      'lf-form-react-material-ui-plaintext': plaintext
    }, buttonsAlign ? "lf-form-buttons-align-".concat(buttonsAlign) : undefined, true)),
    "data-lf-form-name": name,
    onSubmit: onSubmit,
    onBlur: onBlur
  }, children, !onlyFields && !hideToolbar && !plaintext && /*#__PURE__*/React.createElement(Stack, {
    spacing: 2,
    direction: "row",
    className: "lf-buttons"
  }, !hideSubmit && /*#__PURE__*/React.createElement(Button, {
    onClick: onSubmit,
    variant: "contained",
    disabled: disabled || disabledSubmit
  }, labelSubmit), !hideCancel && /*#__PURE__*/React.createElement(Button, {
    onClick: onReset,
    variant: "outlined",
    disabled: disabled
  }, labelCancel), custom));
};
lfLog('Loaded MUI.Form');

export { FormMaterialUI as default };
