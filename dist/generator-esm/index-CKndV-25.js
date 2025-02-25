/* LetsForm Generator v0.12.14 - ESM */
import { s as styleInject, u as classNames, g as _defineProperty, l as lfLog } from './index-CuAywSmk.js';
import React from 'react';
import { Form, ButtonToolbar, Button } from 'rsuite';

var css_248z = ".lf-form-react-rsuite5 {\n  /*.lf-buttons {\n    margin-top: 24px;\n  }*/\n}\n.lf-form-react-rsuite5.rs-form:not(.rs-form-inline) .rs-form-group:not(:last-child) {\n  margin-bottom: unset;\n}\n.lf-form-react-rsuite5.rs-form-vertical .rs-form-group .rs-input-group {\n  width: unset;\n}\n.lf-form-react-rsuite5 .rs-form-control-label > .rs-form-help-text.rs-form-help-text-tooltip {\n  margin-top: 0px;\n  margin-left: 5px;\n}\n.lf-form-react-rsuite5 .lf-full-width .rs-form-control-wrapper {\n  width: 100%;\n}";
styleInject(css_248z);

var FormRsuite5 = function FormRsuite5(_ref) {
  var children = _ref.children,
    name = _ref.name,
    layout = _ref.layout,
    _ref$fluid = _ref.fluid,
    fluid = _ref$fluid === void 0 ? false : _ref$fluid,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$disabledSubmit = _ref.disabledSubmit,
    disabledSubmit = _ref$disabledSubmit === void 0 ? false : _ref$disabledSubmit,
    buttonsAlign = _ref.buttonsAlign,
    _ref$labelSubmit = _ref.labelSubmit,
    labelSubmit = _ref$labelSubmit === void 0 ? 'Submit' : _ref$labelSubmit,
    _ref$labelCancel = _ref.labelCancel,
    labelCancel = _ref$labelCancel === void 0 ? 'Cancel' : _ref$labelCancel,
    _ref$hideCancel = _ref.hideCancel,
    hideCancel = _ref$hideCancel === void 0 ? false : _ref$hideCancel,
    _ref$hideSubmit = _ref.hideSubmit,
    hideSubmit = _ref$hideSubmit === void 0 ? false : _ref$hideSubmit,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
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
  if (onlyFields) {
    var _classNames;
    // TODO check this
    return /*#__PURE__*/React.createElement("div", {
      className: classNames('rs-form', (_classNames = {}, _defineProperty(_classNames, "rs-form-".concat(layout), true), _defineProperty(_classNames, 'rs-form-fluid', fluid), _classNames))
    }, children);
  }
  return /*#__PURE__*/React.createElement(Form, {
    className: classNames('lf-form lf-form-react-rsuite5', _defineProperty({}, buttonsAlign ? "lf-form-buttons-align-".concat(buttonsAlign) : undefined, true)),
    "data-lf-form-name": name,
    layout: layout,
    fluid: fluid,
    readOnly: readOnly,
    disabled: disabled,
    onBlur: onBlur
  }, /*#__PURE__*/React.createElement("div", null, children), !hideToolbar && /*#__PURE__*/React.createElement(ButtonToolbar, {
    className: "lf-buttons"
  }, !hideSubmit && /*#__PURE__*/React.createElement(Button, {
    appearance: "primary",
    onClick: onSubmit,
    disabled: disabled || disabledSubmit
  }, labelSubmit), !hideCancel && /*#__PURE__*/React.createElement(Button, {
    onClick: onReset,
    disabled: disabled
  }, labelCancel), custom));
};
lfLog('Loaded RSuite5.Form');

export { FormRsuite5 as default };
