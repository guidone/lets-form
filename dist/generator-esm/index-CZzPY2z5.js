/* LetsForm Generator v0.12.5 - ESM */
import { s as styleInject, u as classNames, g as _defineProperty } from './index-DL7atULa.js';
import React from 'react';
import { Form, Button } from 'antd';
import 'react-hook-form';

var css_248z = ".lf-form-react-antd .ant-form-item {\n  margin-bottom: 0px;\n}\n.lf-form-react-antd .lf-buttons {\n  display: flex;\n}\n.lf-form-react-antd .lf-buttons button:not(:first-child) {\n  margin-left: 10px;\n}\n.lf-form-react-antd.lf-form-react-antd-plaintext .ant-col.ant-form-item-label {\n  padding-bottom: 0px;\n}";
styleInject(css_248z);

var buildColObject = function buildColObject(span, offset) {
  if (span || offset) {
    var result = {};
    if (span) {
      result.span = span;
    }
    if (offset) {
      result.offset = offset;
    }
    return result;
  }
  return undefined;
};
var FormAntD = function FormAntD(_ref) {
  var name = _ref.name,
    buttonsAlign = _ref.buttonsAlign,
    _ref$onReset = _ref.onReset,
    onReset = _ref$onReset === void 0 ? function () {} : _ref$onReset,
    _ref$onSubmit = _ref.onSubmit,
    onSubmit = _ref$onSubmit === void 0 ? function () {} : _ref$onSubmit,
    _ref$onBlur = _ref.onBlur,
    onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,
    labelWrap = _ref.labelWrap,
    labelAlign = _ref.labelAlign,
    requiredMark = _ref.requiredMark,
    layout = _ref.layout,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$disabledSubmit = _ref.disabledSubmit,
    disabledSubmit = _ref$disabledSubmit === void 0 ? false : _ref$disabledSubmit,
    size = _ref.size,
    _ref$hideToolbar = _ref.hideToolbar,
    hideToolbar = _ref$hideToolbar === void 0 ? false : _ref$hideToolbar,
    _ref$onlyFields = _ref.onlyFields,
    onlyFields = _ref$onlyFields === void 0 ? false : _ref$onlyFields,
    _ref$labelSubmit = _ref.labelSubmit,
    labelSubmit = _ref$labelSubmit === void 0 ? 'Submit' : _ref$labelSubmit,
    _ref$labelCancel = _ref.labelCancel,
    labelCancel = _ref$labelCancel === void 0 ? 'Cancel' : _ref$labelCancel,
    readOnly = _ref.readOnly,
    plaintext = _ref.plaintext,
    defaultValues = _ref.defaultValues,
    labelColSpan = _ref.labelColSpan,
    labelColOffset = _ref.labelColOffset,
    wrapperColSpan = _ref.wrapperColSpan,
    wrapperColOffset = _ref.wrapperColOffset,
    children = _ref.children,
    custom = _ref.custom;
  return /*#__PURE__*/React.createElement(Form, {
    className: classNames('lf-form lf-form-react-antd', _defineProperty({
      'lf-form-react-antd-plaintext': plaintext
    }, buttonsAlign ? "lf-form-buttons-align-".concat(buttonsAlign) : undefined, true)),
    onBlur: onBlur,
    "data-lf-form-name": name,
    layout: layout,
    labelAlign: labelAlign,
    labelWrap: labelWrap,
    readOnly: readOnly,
    requiredMark: requiredMark,
    labelCol: buildColObject(labelColSpan, labelColOffset),
    wrapperCol: buildColObject(wrapperColSpan, wrapperColOffset),
    size: size,
    initialValues: defaultValues,
    autoComplete: "off"
  }, children, !hideToolbar && !onlyFields && !plaintext && /*#__PURE__*/React.createElement("div", {
    className: "lf-buttons"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: onSubmit,
    disabled: disabled || disabledSubmit
  }, labelSubmit), /*#__PURE__*/React.createElement(Button, {
    onClick: onReset,
    disabled: disabled
  }, labelCancel), custom));
};

export { FormAntD as default };
