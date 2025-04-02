/* LetsForm Generator v0.12.15 - ESM */
import { s as styleInject, I as I18N, l as lfLog, _ as _objectWithoutProperties, b as _isString, m as makeClassName, a as _extends, Q as LetsForm } from './index-7LChbcm9.js';
import React, { useId } from 'react';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import { L as ListArray } from './index-DGZarmYD.js';

var css_248z = ".lf-form.lf-form-react-material-ui .lf-control-common-array [class^=lf-control]:not(:last-child) {\n  margin-bottom: 10px;\n}";
styleInject(css_248z);

var _excluded = ["hint", "required", "tooltip", "name", "label", "className"];
var ListArrayMui = I18N(function (_ref) {
  var _rest$error, _rest$error2, _rest$error3;
  var hint = _ref.hint,
    required = _ref.required;
    _ref.tooltip;
    var name = _ref.name,
    label = _ref.label,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var hasError = rest.error && _isString((_rest$error = rest.error) === null || _rest$error === void 0 ? void 0 : _rest$error.errorMessage) && ((_rest$error2 = rest.error) === null || _rest$error2 === void 0 ? void 0 : _rest$error2.errorMessage);
  var controlId = useId();
  return /*#__PURE__*/React.createElement("div", makeClassName('array', name, className), /*#__PURE__*/React.createElement(FormControl, {
    required: required,
    error: hasError,
    fullWidth: true
  }, /*#__PURE__*/React.createElement(FormLabel, {
    id: controlId
  }, label), /*#__PURE__*/React.createElement(ListArray, _extends({
    LetsFormComponent: LetsForm
  }, rest)), hint && !hasError && /*#__PURE__*/React.createElement(FormHelperText, null, hint), hasError && /*#__PURE__*/React.createElement(FormHelperText, null, (_rest$error3 = rest.error) === null || _rest$error3 === void 0 ? void 0 : _rest$error3.errorMessage)));
}, ['label', 'hint']);
lfLog('Loaded MUI.Array');

export { ListArrayMui as default };
