/* LetsForm Generator v0.13.0 - ESM */
import { s as styleInject, I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, m as makeClassName, b as _isString, X as LetsForm } from './index-Df19TMKV.js';
import React from 'react';
import { Form } from 'antd';
import { L as ListArray } from './index-mQWRQEyP.js';

var css_248z = ".lf-form-react-antd .lf-control-common-array-item .ant-form-item {\n  margin-bottom: 0px !important;\n}\n.lf-form-react-antd .lf-control-common-array-item {\n  padding-bottom: 5px;\n}\n.lf-form-react-antd .lf-control-two-columns:last-child {\n  margin-bottom: 0px;\n}\n.lf-form-react-antd .lf-control-three-columns:last-child {\n  margin-bottom: 0px;\n}";
styleInject(css_248z);

var _excluded = ["hint", "required", "tooltip", "name", "label", "className"];
var ListArrayAntd = I18N(function (_ref) {
  var _rest$error, _rest$error2, _rest$error3, _rest$error4;
  var hint = _ref.hint,
    required = _ref.required,
    tooltip = _ref.tooltip,
    name = _ref.name,
    label = _ref.label,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  // Note: leave the div as first child of the Form.Item since it replaces the onChange
  // with a function which is not referential stable and causes re-renders
  return /*#__PURE__*/React.createElement(Form.Item, _extends({}, makeClassName('array', name, className), {
    label: label,
    name: name,
    help: _isString((_rest$error = rest.error) === null || _rest$error === void 0 ? void 0 : _rest$error.errorMessage) && (_rest$error2 = rest.error) !== null && _rest$error2 !== void 0 && _rest$error2.errorMessage ? rest.error.errorMessage : hint && !tooltip ? hint : undefined,
    required: required,
    tooltip: tooltip && hint,
    hasFeedback: _isString((_rest$error3 = rest.error) === null || _rest$error3 === void 0 ? void 0 : _rest$error3.errorMessage) && ((_rest$error4 = rest.error) === null || _rest$error4 === void 0 ? void 0 : _rest$error4.errorMessage),
    validateStatus: rest.error ? 'error' : undefined,
    valuePropName: null
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ListArray, _extends({
    LetsFormComponent: LetsForm,
    name: name
  }, rest))));
}, ['label', 'hint']);
lfLog('Loaded AntD.ListArray');

export { ListArrayAntd as default };
