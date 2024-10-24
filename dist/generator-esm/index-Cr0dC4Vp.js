/* LetsForm Generator v0.11.4 - ESM */
import { s as styleInject, I as I18N, l as lfLog, a as _objectWithoutProperties, b as _extends, S as LetsForm } from './index-Ce7dhp0n.js';
import React from 'react';
import { Form } from 'antd';
import { L as ListArray } from './index-CoLCXU1o.js';
import 'react-hook-form';

var css_248z = ".lf-form-react-antd .lf-control-common-array-item .ant-form-item {\n  margin-bottom: 0px !important;\n}\n.lf-form-react-antd .lf-control-common-array-item {\n  padding-bottom: 5px;\n}\n.lf-form-react-antd .lf-control-two-columns:last-child {\n  margin-bottom: 0px;\n}\n.lf-form-react-antd .lf-control-three-columns:last-child {\n  margin-bottom: 0px;\n}";
styleInject(css_248z);

var _excluded = ["hint", "required", "tooltip", "name", "label", "error"];
var ListArrayAntd = I18N(function (_ref) {
  var hint = _ref.hint,
    required = _ref.required,
    tooltip = _ref.tooltip,
    name = _ref.name,
    label = _ref.label,
    error = _ref.error,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Item, {
    className: "lf-control-array",
    "data-lf-field-name": name,
    label: label,
    name: name,
    help: error != null ? error : hint && !tooltip ? hint : undefined,
    required: required,
    tooltip: tooltip && hint,
    hasFeedback: error != null,
    validateStatus: error ? 'error' : undefined,
    valuePropName: null
  }, /*#__PURE__*/React.createElement(ListArray, _extends({
    LetsFormComponent: LetsForm
  }, rest)));
}, ['label', 'hint']);
lfLog('Loaded AntD.ListArray');

export { ListArrayAntd as default };
