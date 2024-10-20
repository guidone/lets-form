/* LetsForm Generator v0.11.3 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, b as _extends, L as LetsForm, p as passRest } from './index-hDo1kas4.js';
import React from 'react';
import { Form } from 'rsuite';
import { R as RequiredIcon } from './index-BS8hBd7R.js';
import { L as ListArray } from './index-CvTW-Q6-.js';
import 'react-hook-form';

var _excluded = ["hint", "required", "tooltip", "name", "label"];
var ListArrayRSuite5 = I18N(function (_ref) {
  var hint = _ref.hint,
    required = _ref.required,
    tooltip = _ref.tooltip,
    name = _ref.name,
    label = _ref.label,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Group, {
    "data-lf-field-name": name,
    className: "lf-control-array"
  }, label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(ListArray, _extends({
    LetsFormComponent: LetsForm
  }, passRest(rest))), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint']);
lfLog('Loaded RSuite5.ListArray');

export { ListArrayRSuite5 as default };
