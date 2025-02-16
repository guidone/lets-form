/* LetsForm Generator v0.12.12 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, m as makeClassName, a as _extends, p as passRest } from './index-DU8xNUbV.js';
import React, { useId } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import FormLabel from '@mui/material/FormLabel';
import { C as CommonCurrency } from './index-7zZMaqEX.js';
import { T as TextOrIcon } from './index-DnuIxEiZ.js';

var _excluded = ["name", "label", "hint", "value", "size", "error", "disabled", "readOnly", "required", "floatingLabel", "className", "lfLocale"];
// DOC: https://mui.com/material-ui/api/input/

var Currency = I18N(function (_ref) {
  var _rest$variant, _rest$variant2;
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value;
    _ref.size;
    var error = _ref.error;
    _ref.disabled;
    var _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    required = _ref.required,
    floatingLabel = _ref.floatingLabel,
    className = _ref.className,
    lfLocale = _ref.lfLocale,
    rest = _objectWithoutProperties(_ref, _excluded);
  var controlId = useId();
  return /*#__PURE__*/React.createElement("div", makeClassName('currency', name, className), /*#__PURE__*/React.createElement(FormControl, {
    required: required,
    error: error != null,
    variant: (_rest$variant = rest.variant) !== null && _rest$variant !== void 0 ? _rest$variant : undefined,
    fullWidth: rest.fullWidth
  }, label && !floatingLabel && /*#__PURE__*/React.createElement(FormLabel, {
    id: controlId
  }, label), /*#__PURE__*/React.createElement(CommonCurrency, _extends({
    defaultValue: value,
    control: TextField,
    locale: lfLocale,
    required: floatingLabel ? rest.required : undefined,
    style: _.isNumber(rest.width) && !rest.fullWidth ? {
      width: "".concat(parseInt(rest.width, 10), "px")
    } : undefined,
    InputProps: {
      startAdornment: rest.prefix ? /*#__PURE__*/React.createElement(InputAdornment, {
        position: "start"
      }, TextOrIcon(rest.prefix)) : undefined,
      endAdornment: rest.postfix ? /*#__PURE__*/React.createElement(InputAdornment, {
        position: "end"
      }, TextOrIcon(rest.postfix)) : undefined,
      disableUnderline: rest.disableUnderline,
      readOnly: readOnly,
      autoComplete: rest.autocomplete
    },
    variant: (_rest$variant2 = rest.variant) !== null && _rest$variant2 !== void 0 ? _rest$variant2 : undefined,
    label: floatingLabel ? rest.label : undefined
  }, passRest(rest))), hint && !error && /*#__PURE__*/React.createElement(FormHelperText, null, hint), error && /*#__PURE__*/React.createElement(FormHelperText, null, error)));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded MUI.Currency');

export { Currency as default };
