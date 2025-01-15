/* LetsForm Generator v0.12.6 - ESM */
import { s as styleInject, I as I18N, l as lfLog, _ as _objectWithoutProperties, m as makeClassName, a as _extends, L as LetsForm, p as passRest } from './index-DP3yuoJB.js';
import React from 'react';
import { Form } from 'rsuite';
import { R as RequiredIcon } from './index-Peb5xOtE.js';
import { L as ListArray } from './index-CFslcDvt.js';
import 'react-hook-form';

var css_248z = ".lf-form-react-rsuite5 .lf-control-array .array-error-message {\n  color: #ff6633;\n}";
styleInject(css_248z);

var _excluded = ["hint", "required", "tooltip", "name", "label", "className"];
var ListArrayRSuite5 = I18N(function (_ref) {
  var _rest$error;
  var hint = _ref.hint,
    required = _ref.required,
    tooltip = _ref.tooltip,
    name = _ref.name,
    label = _ref.label,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Group, makeClassName('array', name, className), label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(ListArray, _extends({
    LetsFormComponent: LetsForm,
    name: name
  }, passRest(rest))), _.isString((_rest$error = rest.error) === null || _rest$error === void 0 ? void 0 : _rest$error.errorMessage) && /*#__PURE__*/React.createElement(Form.HelpText, {
    className: "array-error-message"
  }, rest.error.errorMessage), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint']);
lfLog('Loaded RSuite5.ListArray');

export { ListArrayRSuite5 as default };
