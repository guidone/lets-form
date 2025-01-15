/* LetsForm react-material-ui v0.12.6 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, p as passRest, m as makeClassName } from './index-BzSEDvr3.js';
import React, { useCallback } from 'react';
import Rating from '@mui/material/Rating';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import 'react-hook-form';

var _excluded = ["name", "label", "hint", "value", "onChange", "onBlur", "size", "disabled", "readOnly", "required", "max", "precision", "color", "labelPlacement", "error", "className"];

// DOC: https://mui.com/material-ui/api/rating/

var Rate = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    size = _ref.size,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    required = _ref.required,
    max = _ref.max,
    precision = _ref.precision,
    color = _ref.color,
    labelPlacement = _ref.labelPlacement,
    error = _ref.error,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (event) {
    onChange(parseFloat(event.target.value));
  }, [onChange]);
  var ctrl = /*#__PURE__*/React.createElement(Rating, _extends({
    size: size !== null && size !== void 0 ? size : undefined,
    max: max,
    precision: precision !== null && precision !== void 0 ? precision : 1,
    value: value,
    color: color,
    readOnly: readOnly,
    required: required,
    onChange: handleChange,
    onBlur: onBlur,
    disabled: disabled
  }, passRest(rest)));
  return /*#__PURE__*/React.createElement("div", makeClassName('rate', name, className), /*#__PURE__*/React.createElement(FormControl, {
    required: required,
    error: error != null,
    sx: {
      mt: 2
    },
    variant: "standard"
  }, label && !labelPlacement && /*#__PURE__*/React.createElement(FormLabel, null, label), label && labelPlacement && /*#__PURE__*/React.createElement(FormControlLabel, {
    labelPlacement: labelPlacement ? labelPlacement : undefined,
    disabled: disabled,
    label: label,
    control: ctrl,
    error: error
  }), !(label && labelPlacement) && ctrl, hint && !error && /*#__PURE__*/React.createElement(FormHelperText, null, hint), error && /*#__PURE__*/React.createElement(FormHelperText, null, error)));
}, ['label', 'hint']);
lfLog('Loaded MUI.Rate');

export { Rate as default };
