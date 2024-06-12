/* LetsForm react-material-ui v0.7.20 - ESM */
import React, { useCallback } from 'react';
import Rating from '@mui/material/Rating';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { I as I18N, l as lfLog } from './index-B_gtFlJR.js';
import 'react-hook-form';

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
    error = _ref.error;
  var handleChange = useCallback(function (event) {
    onChange(parseFloat(event.target.value));
  }, [onChange]);
  var ctrl = /*#__PURE__*/React.createElement(Rating, {
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
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-control-rate",
    "data-lf-field-name": name
  }, /*#__PURE__*/React.createElement(FormControl, {
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
