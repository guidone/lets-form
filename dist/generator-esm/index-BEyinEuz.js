/* LetsForm Generator v0.7.13 - ESM */
import { s as styleInject, I as I18N, l as lfLog, a as _objectWithoutProperties, _ as _isString, b as _extends, N as LetsForm } from './index-CJ5moTpY.js';
import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { L as ListArray } from './index-cAI-rMFA.js';
import { M as MuiLabel } from './index-Be2UjYxW.js';
import 'react-hook-form';

var css_248z = ".lf-form.lf-form-react-material-ui .lf-control-common-array [class^=lf-control]:not(:last-child) {\n  margin-bottom: 10px;\n}";
styleInject(css_248z);

var _excluded = ["hint", "required", "tooltip", "name", "label", "error"];
var ListArrayMui = I18N(function (_ref) {
  var hint = _ref.hint,
    required = _ref.required;
    _ref.tooltip;
    var name = _ref.name,
    label = _ref.label,
    error = _ref.error,
    rest = _objectWithoutProperties(_ref, _excluded);
  var hasError = error && _isString(error);
  return /*#__PURE__*/React.createElement("div", {
    "data-lf-field-name": name,
    className: "lf-control-array"
  }, /*#__PURE__*/React.createElement(FormControl, {
    required: required,
    error: hasError,
    fullWidth: true
  }, /*#__PURE__*/React.createElement(MuiLabel, null, label), /*#__PURE__*/React.createElement(ListArray, _extends({
    LetsFormComponent: LetsForm
  }, rest)), hint && !error && /*#__PURE__*/React.createElement(FormHelperText, null, hint), error && /*#__PURE__*/React.createElement(FormHelperText, null, error)));
}, ['label', 'hint']);
lfLog('Loaded MUI.Array');

export { ListArrayMui as default };
