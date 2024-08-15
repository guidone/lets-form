/* LetsForm Generator v0.10.3 - ESM */
import { s as styleInject, I as I18N, l as lfLog, a as _objectWithoutProperties, _ as _isString, b as _extends, P as LetsForm } from './index-DTOarPRu.js';
import React, { useId } from 'react';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import { L as ListArray } from './index-CC4IX-9_.js';
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
  var controlId = useId();
  return /*#__PURE__*/React.createElement("div", {
    "data-lf-field-name": name,
    className: "lf-control-array"
  }, /*#__PURE__*/React.createElement(FormControl, {
    required: required,
    error: hasError,
    fullWidth: true
  }, /*#__PURE__*/React.createElement(FormLabel, {
    id: controlId
  }, label), /*#__PURE__*/React.createElement(ListArray, _extends({
    LetsFormComponent: LetsForm
  }, rest)), hint && !error && /*#__PURE__*/React.createElement(FormHelperText, null, hint), error && /*#__PURE__*/React.createElement(FormHelperText, null, error)));
}, ['label', 'hint']);
lfLog('Loaded MUI.Array');

export { ListArrayMui as default };
