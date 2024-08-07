/* LetsForm Generator v0.10.2 - ESM */
import { s as styleInject, I as I18N, l as lfLog, a as _objectWithoutProperties, _ as _isString, b as _extends, Q as LetsForm } from './index-BLtO_gT8.js';
import React from 'react';
import { R as RequiredIcon } from './index-ChdJMNzj.js';
import { L as ListArray } from './index-CBtTOMEJ.js';
import 'react-hook-form';

var css_248z = ".lf-form-react .lf-control-common-array-item {\n  padding-bottom: 5px;\n}\n.lf-form-react .lf-control-common-array-item .lf-control-two-columns:last-child {\n  margin-bottom: 0px;\n}\n.lf-form-react .lf-control-common-array-item .lf-control-three-columns:last-child {\n  margin-bottom: 0px;\n}";
styleInject(css_248z);

var _excluded = ["hint", "required", "tooltip", "name", "label", "error"];
var ListArrayReact = I18N(function (_ref) {
  var hint = _ref.hint,
    required = _ref.required;
    _ref.tooltip;
    var name = _ref.name,
    label = _ref.label,
    error = _ref.error,
    rest = _objectWithoutProperties(_ref, _excluded);
  var hasError = error && _isString(error);
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-control-array lf-form-react-control-group",
    "data-lf-field-name": name
  }, /*#__PURE__*/React.createElement("label", {
    for: name
  }, label, required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(ListArray, _extends({
    LetsFormComponent: LetsForm
  }, rest)), hint && !hasError && /*#__PURE__*/React.createElement("div", {
    className: "lf-form-react-message"
  }, hint), hasError && /*#__PURE__*/React.createElement("div", {
    className: "lf-form-react-error-message"
  }, error));
}, ['label', 'hint']);
lfLog('Loaded React.Array');

export { ListArrayReact as default };
