/* LetsForm Generator v0.12.12 - ESM */
import { s as styleInject, I as I18N, l as lfLog, _ as _objectWithoutProperties, b as _isString, m as makeClassName, a as _extends, R as LetsForm } from './index-DU8xNUbV.js';
import React from 'react';
import { L as ListArray } from './index-BI9seg-j.js';
import { R as RequiredIcon } from './index-CISoV4Gh.js';

var css_248z = ".lf-form-react .lf-control-common-array-item {\n  padding-bottom: 5px;\n}\n.lf-form-react .lf-control-common-array-item .lf-control-two-columns:last-child {\n  margin-bottom: 0px;\n}\n.lf-form-react .lf-control-common-array-item .lf-control-three-columns:last-child {\n  margin-bottom: 0px;\n}";
styleInject(css_248z);

var _excluded = ["hint", "required", "tooltip", "name", "label", "className"];
var ListArrayReact = I18N(function (_ref) {
  var _rest$error, _rest$error2, _rest$error3;
  var hint = _ref.hint,
    required = _ref.required;
    _ref.tooltip;
    var name = _ref.name,
    label = _ref.label,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var hasError = rest.error && _isString((_rest$error = rest.error) === null || _rest$error === void 0 ? void 0 : _rest$error.errorMessage) && ((_rest$error2 = rest.error) === null || _rest$error2 === void 0 ? void 0 : _rest$error2.errorMessage);
  return /*#__PURE__*/React.createElement("div", makeClassName('array', name, 'lf-form-react-control-group', className), /*#__PURE__*/React.createElement("label", {
    for: name
  }, label, required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(ListArray, _extends({
    LetsFormComponent: LetsForm
  }, rest)), hint && !hasError && /*#__PURE__*/React.createElement("div", {
    className: "lf-form-react-message"
  }, hint), hasError && /*#__PURE__*/React.createElement("div", {
    className: "lf-form-react-error-message"
  }, (_rest$error3 = rest.error) === null || _rest$error3 === void 0 ? void 0 : _rest$error3.errorMessage));
}, ['label', 'hint']);
lfLog('Loaded React.Array');

export { ListArrayReact as default };
